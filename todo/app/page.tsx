import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>Welcome to todo application</h2>
      <Link className="border" href="/signin">Go to signin page</Link>
      <Link className="border" href="/signup">Go to signup page</Link>
    </div>
  );
}
