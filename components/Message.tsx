import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#424549]"}`}>
      <div className="flex space-x-5 px-5 sm:px-10 max-w-4xl sm:mx-auto ">
        <Image
          src={message.user.avatar}
          alt="avatar"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <p className="text-sm md:text-base">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
