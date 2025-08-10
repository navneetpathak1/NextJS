// /app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (err) {
    console.error("Session decryption failed:", err);
  }

  return <pre>{JSON.stringify(session)}</pre>;
}
