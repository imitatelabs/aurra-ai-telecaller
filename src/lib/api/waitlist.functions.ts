import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "../integrations/supabase/client.server";

const waitlistSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  phone: z.string().trim().min(3, "Phone number is required").max(50),
  company: z.string().trim().max(160).optional().default(""),
});

export const submitWaitlistFn = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => waitlistSchema.parse(data))
  .handler(async ({ data }) => {
    const { name, email, phone, company } = data;

    const { data: existing } = await supabaseAdmin
      .from("waitlist")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return {
        success: false,
        message: "This email is already registered.",
      };
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({
      name,
      email,
      phone,
      company: company || "",
      contact: email,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    if (error) {
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already registered.",
        };
      }
      return {
        success: false,
        message: "A database error occurred. Please try again.",
      };
    }

    return {
      success: true,
      message: "Successfully added to the waitlist",
    };
  });
