import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.error("Error: ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required.");
    console.error("Usage: ADMIN_EMAIL=user@example.com ADMIN_PASSWORD=securepass npx tsx scripts/create-admin.ts");
    process.exit(1);
  }

  const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
  });

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const [rows] = await pool.execute<any[]>("SELECT id FROM users WHERE email = ?", [email]);
    
    if (rows.length > 0) {
      await pool.execute(
        "UPDATE users SET password = ?, role = 'ADMIN' WHERE email = ?",
        [hashedPassword, email]
      );
      console.log(`Admin user ${email} updated successfully.`);
    } else {
      await pool.execute(
        "INSERT INTO users (email, name, password, role) VALUES (?, ?, ?, 'ADMIN')",
        [email, "Admin User", hashedPassword]
      );
      console.log(`Admin user ${email} created successfully.`);
    }
  } catch (error) {
    console.error("Database error:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
