import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirectTo: "/admin/dashboard"
    });
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          console.error("Authentication error details:", error);
          return `Auth Error: ${error.type || "Unknown"}`;
      }
    }
    
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Unexpected authentication error:", errorMessage);
    return `Server Error: ${errorMessage}`;
  }
}
