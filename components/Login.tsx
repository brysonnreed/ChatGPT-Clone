"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="bg-[#282b30] h-screen flex flex-col items-center justify-center text-center text-white">
      <Image
        src="https://breezebranding.com/wp-content/uploads/2022/12/cropped-Official-logo-favicon.png"
        width={250}
        height={350}
        alt="logo"
        className="drop-shadow-md"
      />{" "}
      <button
        onClick={() => signIn("google")}
        className="drop-shadow-lg font-bold text-xl animate-pulse mt-5 p-4 px-6 hover:bg-white rounded-full hover:text-[#282b30] 
        text-white bg-[#1e2124] border-white border transition-all ease-in duration-200"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
