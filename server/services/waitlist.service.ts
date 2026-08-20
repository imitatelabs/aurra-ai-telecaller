import { AppDataSource } from "../config/database";
import { Waitlist } from "../entities/waitlist.entity";

export class WaitlistService {
  private get waitlistRepository() {
    return AppDataSource.getRepository(Waitlist);
  }

  async checkExistingEmail(email: string): Promise<boolean> {
    const existing = await this.waitlistRepository.findOne({ where: { email } });
    return !!existing;
  }

  async createWaitlistEntry(data: Partial<Waitlist>): Promise<Waitlist> {
    const newEntry = this.waitlistRepository.create({
      ...data,
      contact: data.email, // using email as contact
    });
    return this.waitlistRepository.save(newEntry);
  }
}
