import { WaitlistService } from "../services/waitlist.service";

export class WaitlistController {
  private waitlistService = new WaitlistService();

  async handleWaitlistSubmission(data: { name: string; email: string; phone: string; company?: string }) {
    const isDuplicate = await this.waitlistService.checkExistingEmail(data.email);
    if (isDuplicate) {
      throw new Error("This email is already registered.");
    }

    try {
      await this.waitlistService.createWaitlistEntry({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || "",
      });
      return {
        success: true,
        message: "Successfully added to the waitlist",
      };
    } catch (error: any) {
      if (error.code === "23505") { // Unique constraint violation
        throw new Error("This email is already registered.");
      }
      throw error;
    }
  }
}
