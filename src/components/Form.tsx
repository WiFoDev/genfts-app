import { useAtom } from "jotai";
import React, { useState } from "react";

import { imageListAtom } from "@/pages/_app";

export const Form = () => {
  const [prompt, setPrompt] = useState("");
  const [_, setImageList] = useAtom(imageListAtom);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const curatedPrompt = prompt.trim();

    if (!curatedPrompt) return;
    fetch("/api/fakegen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: curatedPrompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        setImageList(data);
      });
  };

  return (
    <form className="grid place-items-center mt-6" onSubmit={handleSubmit}>
      <textarea
        className="border-2 transition-all p-2 rounded-md max-w-lg outline-none resize-none focus:border-primary focus:shadow-lg focus:shadow-primary/50 placeholder:text-gray-500"
        cols={70}
        placeholder="A catstronaut walking in the moon..."
        rows={7}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-secondary border-2 border-transparent px-6 py-2 rounded-md mt-6 hover:bg-pink-700 hover:text-white focus:border-primary transition-all"
        type="submit"
      >
        Generate
      </button>
    </form>
  );
};
