"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LoginPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // Ensure Clerk is fully loaded

    if (isSignedIn) {
      const role = user?.publicMetadata?.role;

      if (role) {
        console.log("Redirecting to role page:", role);
        router.push(`/${role}`);
      } else {
        console.error("Role is undefined for signed-in user.");
        router.push("/error.jsx"); // أو صفحة افتراضية في حالة الخطأ
      }
    } else {
      console.log("User not signed in. Redirecting to login.");
      router.push("/");
    }
  }, [isLoaded, isSignedIn, user, router]);

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="flex h-screen w-full justify-center items-center bg-skyight">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full justify-center items-center bg-skyight">
      <div className="relative grid w-full flex-grow items-center  px-4 sm:justify-center">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="relative isolate w-full space-y-8 rounded-2xl bg-white px-4 py-10 shadow-md ring-1 ring-inset ring-white/10 before:absolute before:inset-0 before:-z-10 before:rounded-2xl  sm:w-96 sm:px-8"
          >
            <header className="text-center flex justify-center items-center gap-3">
              <Image src="/logo.png" width={50} height={50} alt="logo" />
              <h1 className="mt-4 text-xl font-medium tracking-tight text-teal-950">
                Sign in to <span className="text-emerald-400 "> Y - S</span>{" "}
                School
              </h1>
            </header>
            <Clerk.GlobalError className="block text-sm text-red-600" />
            <Clerk.Field name="identifier" className="group/field relative">
              <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white px-2 font-mono text-xs/4 text-black before:absolute before:inset-0 before:-z-10  group-focus-within/field:text-emerald-300 group-data-[invalid]/field:text-rose-400">
                Username
              </Clerk.Label>
              <Clerk.Input
                type="text"
                required
                className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-black outline-none ring-1 ring-inset ring-black/20 hover:ring-black/30 focus:shadow-[0_0_6px_0] focus:shadow-emerald-500/20 focus:ring-[1.5px] focus:ring-emerald-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
            </Clerk.Field>
            <Clerk.Field name="password" className="group/field relative">
              <Clerk.Label className="absolute left-2 top-0 -translate-y-1/2 bg-white   px-2 font-mono text-xs/4 text-black before:absolute before:inset-0 before:-z-10  group-focus-within/field:text-emerald-300 group-data-[invalid]/field:text-rose-400">
                Password
              </Clerk.Label>
              <Clerk.Input
                type="password"
                required
                className="w-full rounded-lg bg-transparent px-4 py-2.5 text-sm text-black outline-none ring-1 ring-inset ring-black/20 hover:ring-black/30 focus:shadow-[0_0_6px_0] focus:shadow-emerald-500/20 focus:ring-[1.5px] focus:ring-emerald-300 data-[invalid]:shadow-rose-400/20 data-[invalid]:ring-rose-400"
              />
              <Clerk.FieldError className="mt-2 block text-xs text-red-600" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="relative isolate w-full rounded-lg bg-gradient-to-b from-emerald-400 to-emerald-500 px-3.5 py-2.5 text-center text-sm font-medium text-emerald-950 shadow-[0_1px_0_0_theme(colors.white/30%)_inset,0_-1px_1px_0_theme(colors.black/5%)_inset] outline-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-white/10 before:opacity-0 hover:before:opacity-100 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-black active:text-emerald-950/80 active:before:bg-black/10"
            >
              Sign In
            </SignIn.Action>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
}

export default LoginPage;
