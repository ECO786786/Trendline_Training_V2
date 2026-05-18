import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

async function updateSchema() {
  const pool = mysql.createPool({ uri: process.env.DATABASE_URL });
  
  try {  
    const [regs] = await pool.execute<any[]>("SELECT COUNT(*) as count FROM registrations");
    if (regs[0].count === 0) {
      await pool.execute("DROP TABLE IF EXISTS registrations");
      await pool.execute(`
        CREATE TABLE registrations (
          id INT NOT NULL AUTO_INCREMENT,
          course_slug VARCHAR(255),
          first_name VARCHAR(255) NOT NULL,
          surname VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          phone VARCHAR(50) NOT NULL,
          company VARCHAR(255),
          delivery_method ENUM('IN_PERSON', 'ONLINE_LIVE', 'HYBRID') NOT NULL,
          created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `);
    }

    await pool.execute("DROP TABLE IF EXISTS LearningOutcome");
    await pool.execute("DROP TABLE IF EXISTS CurriculumItem");
    await pool.execute("DROP TABLE IF EXISTS ScheduledCourse");
    await pool.execute("DROP TABLE IF EXISTS Course");
    await pool.execute("DROP TABLE IF EXISTS Inquiry");
  } catch (error) {
    console.error("Error updating schema:", error);
  } finally {
    await pool.end();
  }
}

updateSchema();
