import { AppDataSource } from "../config/database";

export default defineNitroPlugin(async (nitroApp) => {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("TypeORM database connection established.");
    }
  } catch (error) {
    console.error("Error during TypeORM database initialization:", error);
  }
});
