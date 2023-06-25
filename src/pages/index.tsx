import Head from "next/head";
// import Link from "next/link";
import { api } from "~/utils/api";
import { SignIn, SignInButton } from "@clerk/nextjs";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {/* <h2>SignIn</h2>
          <SignInButton /> */}
          <SignInButton mode="modal">
            <button className="btn">Sign in</button>
          </SignInButton>
        </div>
      </main>
    </>
  );
}
