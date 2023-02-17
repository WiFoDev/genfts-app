import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <section className="grid place-content-center gap-6">
      <h1 className="text-5xl">
        Generate{" "}
        <span className="text-primary font-semibold">
          AI Powered NFTs
        </span>{" "}
        From 0 To{" "}
        <span className="text-primary font-semibold">Deploy</span>
      </h1>
      <h2 className="text-3xl text-center">
        Never been easier to create your own NFTs collection
      </h2>
      <form action="#" className="grid place-items-center mt-6">
        <textarea
          className="border-2 transition-all p-2 rounded-md max-w-lg outline-none resize-none focus:border-primary focus:shadow-lg focus:shadow-primary/50 placeholder:text-gray-500"
          cols={70}
          placeholder="A catstronaut walking in the moon..."
          rows={7}
        />
        <button
          className="bg-secondary border-2 border-transparent px-6 py-2 rounded-md mt-6 hover:bg-pink-700 hover:text-white focus:border-primary transition-all"
          type="submit"
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Home;
