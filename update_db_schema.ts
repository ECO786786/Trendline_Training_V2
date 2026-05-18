import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

async function updateSchema() {
  const pool = mysql.createPool({ uri: process.env.DATABASE_URL });
  
  try {  
    const [tables] = await pool.execute<any[]>("SHOW TABLES LIKE 'registrations'");
    
    if (tables.length === 0) {
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
    } else {
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
    }

    await pool.execute(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT NOT NULL AUTO_INCREMENT,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) DEFAULT '',
        company VARCHAR(255) DEFAULT '',
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255),
        role ENUM('USER', 'ADMIN', 'DEVELOPER', 'MARKETING') DEFAULT 'USER',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    await pool.execute("SET FOREIGN_KEY_CHECKS = 0");
    await pool.execute("DROP TABLE IF EXISTS Registration");
    await pool.execute("DROP TABLE IF EXISTS LearningOutcome");
    await pool.execute("DROP TABLE IF EXISTS CurriculumItem");
    await pool.execute("DROP TABLE IF EXISTS ScheduledCourse");
    await pool.execute("DROP TABLE IF EXISTS Course");
    await pool.execute("DROP TABLE IF EXISTS Inquiry");
    await pool.execute("SET FOREIGN_KEY_CHECKS = 1");
  } catch (error) {
    console.error("Error updating schema:", error);
  } finally {
    await pool.end();
  }
}

updateSchema();
