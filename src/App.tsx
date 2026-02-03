"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 20 + 16, 60);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ne mogu 🙈",
      "Ma stvarno ne mogu 😅",
      "Ajde molim te 🙉",
      "Ni slučajno 🙊",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            Woohoo! Veselim se malici s tobom! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">
            Hoćeš li ići sa mnom na malicu? 🥐☕
          </h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Naravno
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Ne mogu" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
