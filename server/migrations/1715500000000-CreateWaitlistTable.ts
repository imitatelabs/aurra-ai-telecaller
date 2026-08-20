import { QueryRunner } from "typeorm";
import type { MigrationInterface } from "typeorm";

export class CreateWaitlistTable1715500000000 implements MigrationInterface {
    name = 'CreateWaitlistTable1715500000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "waitlist" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" text NOT NULL,
                "email" text NOT NULL,
                "phone" text,
                "company" text,
                "contact" text,
                "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
                CONSTRAINT "PK_waitlist_id" PRIMARY KEY ("id")
            )
        `);
        // Add unique constraint on email
        await queryRunner.query(`
            CREATE UNIQUE INDEX "waitlist_email_unique_idx" ON "waitlist" ("email")
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "waitlist_email_unique_idx"`);
        await queryRunner.query(`DROP TABLE "waitlist"`);
    }
}
