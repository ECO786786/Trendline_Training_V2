import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  AUTH_SECRET: z.string().min(1, "AUTH_SECRET is required"),
  AUTH_TRUST_HOST: z.string().optional().transform((val) => val === "true" || val === "1"),
  NEXT_PUBLIC_WHATSAPPNUMBER: z.string().min(1, "NEXT_PUBLIC_WHATSAPPNUMBER is required"),
});

const parsedEnv = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
  NEXT_PUBLIC_WHATSAPPNUMBER: process.env.NEXT_PUBLIC_WHATSAPPNUMBER,
});

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.flatten().fieldErrors);
  if (process.env.NODE_ENV === "production") {
    throw new Error("Missing or invalid environment variables. Check the server logs for details.");
  }
}

export const env = parsedEnv.success ? parsedEnv.data : ({} as z.infer<typeof envSchema>);
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPPNUMBER;
