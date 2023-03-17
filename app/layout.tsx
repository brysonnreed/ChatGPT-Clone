import ClientProvider from "../components/ClientProvider";
import Login from "../components/Login";
import { SessionProvider } from "../components/SessionProvide";
import SideBar from "../components/SideBar";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "./globals.css";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Chat GPT Messenger Mock-up",
  description: "Created by Bryson Reed",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#282b30] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* Client Provide - Notification */}
              <ClientProvider />
              <div className="bg-[#36393e] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
