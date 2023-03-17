import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <main className="text-white flex flex-col lg:justify-center items-center py-5 h-screen px-2 overflow-y-auto ">
      <h1 className=" text-2xl sm:text-5xl font-bold mb-5 xs:mb-20">
        Chat GPT
      </h1>

      <div className="flex space-x-2 text-center flex-col sm:flex-row space-y-5 sm:space-y-0">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              &quot;Explain something to me in baby terms&quot;
            </p>
            <p className="infoText">
              &quot;What is the difference between a dog and a cat?&quot;
            </p>
            <p className="infoText">
              &quot;How can I get better at coding in React?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
