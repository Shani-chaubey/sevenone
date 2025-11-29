import { cookies } from "next/headers";

export async function isAuthenticated() {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("admin-auth");
    return authCookie && authCookie.value === "authenticated";
  } catch (error) {
    return false;
  }
}

export async function requireAuth() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    throw new Error("Unauthorized");
  }
}
