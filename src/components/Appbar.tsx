import { useRouter } from "next/router";
import { Searchbar } from "./Searchbar";
import { useState } from "react";

export function Appbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex justify-start">
        <div className="flex items-center pl-4">
          <div className="p-2 rounded-full hover:bg-[#222222] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        <div
          className="flex w-40 h-20 items-center hover:cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <img src="data:image/png;base64,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" />
        </div>
      </div>
      <div className="flex items-center sm:w-2/6 justify-center">
        <Searchbar />
      </div>
      <div className="flex items-center sm:w-1/6 justify-end pr-5">
        <div className="flex items-center pl-4">
          <div className="p-2 rounded-full hover:bg-[#222222] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center pl-4 pr-4">
          <div className="p-2 rounded-full hover:bg-[#222222] hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>
        </div>

        {isLoggedIn ? (
          <div
            className="h-10 w-10 rounded-full bg-lime-800 flex items-center justify-center hover:cursor-pointer"
            onClick={handleSignIn}
          >
            S
          </div>
        ) : (
          <button
            className="p-2 flex items-center border border-solid border-neutral-200 rounded-3xl pr-5 text-blue-300 font-semibold hover:bg-blue-300 hover:bg-opacity-50 hover:cursor-pointer"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}
