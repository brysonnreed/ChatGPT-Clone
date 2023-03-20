"use client";
/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, query, orderBy } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import { Bars3Icon, MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function SideBar() {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  const navView = () => {
    if (showNav === false) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  if (showNav === true) {
    return (
      <Bars3Icon
        onClick={() => navView()}
        className="text-white h-6 w-6 mt-1 ml-1 pr-1"
      />
    );
  } else {
    return (
      <div className="bg-[#282b30] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
        <div
          className={`sm:p-2 flex-col h-screen ${showNav ? "hidden" : "flex"}`}
        >
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
            <div className="space-y-2 sm:space-y-0">
              <div
                onClick={() => navView()}
                className=" sm:hidden border-gray-700 border chatRow"
              >
                <p>Hide</p>
              </div>
              <div
                onClick={() => signOut()}
                className="border-gray-700 border chatRow"
              >
                <MoonIcon className="h-4 w-4 " />
                <p>Log out</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SideBar;
