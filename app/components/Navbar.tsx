import { auth, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="bg-gray-600 shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            className=" "
            src="/STARTUPX_LOGO.png"
            alt="logo"
            width={40}
            height={10}
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button onClick={async () => { await signOut(); }}>
                <span>Logout</span>
              </button>
            <Link href={`user/${session?.user?.id}`}>
            <span>{session?.user?.name}</span>
            </Link>

            </>
          ) :(
            <form action="/api/auth/signin" method="POST">
              <button type="submit">
              <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;