"use client";
/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, query, orderBy } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { MoonIcon } from "@heroicons/react/24/solid";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="sm:p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden md:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading chats...</p>
              </div>
            )}
            {/* map through the chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div
          onClick={() => signOut()}
          className="border-gray-700 border chatRow"
        >
          <MoonIcon className="h-4 w-4 " />
          <p>Log out</p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
