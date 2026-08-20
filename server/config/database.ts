import { DataSource } from "typeorm";
import { Waitlist } from "../entities/waitlist.entity";

// Allow self-signed certs (required for AWS RDS)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Parse DATABASE_URL or use individual env vars
const dbUrl = process.env.DATABASE_URL;

let dataSourceConfig: any;

if (dbUrl) {
  // Use URL directly
  dataSourceConfig = {
    type: "postgres",
    url: dbUrl,
    synchronize: true,
    logging: false,
    ssl: { rejectUnauthorized: false },
    entities: [Waitlist],
  };
} else {
  // Fallback to individual fields
  dataSourceConfig = {
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "telecaller_dev",
    synchronize: true,
    logging: false,
    ssl: { rejectUnauthorized: false },
    entities: [Waitlist],
  };
}

export const AppDataSource = new DataSource(dataSourceConfig);
