import React, {useState} from "react";

export const Form = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const curatedPrompt = prompt.trim();

    if (!curatedPrompt) return;
    console.log(curatedPrompt);
    // TODO: Make the api call to Dalle to generate the collection
  };

  return (
    <form
      className="grid place-items-center mt-6"
      onSubmit={handleSubmit}
    >
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
