import { defineEventHandler, readBody, setResponseStatus } from "h3";
import { z } from "zod";
import { WaitlistController } from "../controllers/waitlist.controller";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().min(3, "Phone number is required").max(50),
  company: z.string().trim().max(160).optional().default(""),
});

const waitlistController = new WaitlistController();

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const parsed = waitlistSchema.safeParse(body);
    if (!parsed.success) {
      setResponseStatus(event, 400);
      const firstIssue = parsed.error.issues[0];
      return {
        success: false,
        message: firstIssue ? firstIssue.message : "Validation failed. Please check your inputs.",
      };
    }

    try {
      // Ensure database is initialized before serving the request
      const { AppDataSource } = await import("../config/database");
      if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
      }

      const result = await waitlistController.handleWaitlistSubmission(parsed.data);
      return result;
    } catch (err: any) {
      if (err.message === "This email is already registered.") {
        setResponseStatus(event, 400);
        return {
          success: false,
          message: err.message,
        };
      }
      throw err;
    }
  } catch (err: any) {
    console.error("Error in POST /waitlist handler:", err);
    setResponseStatus(event, 500);
    return {
      success: false,
      message: "An internal server error occurred.",
    };
  }
});
