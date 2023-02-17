import type { NextPage } from "next";

import Image from "next/image";
import { useAtom } from "jotai";

import { Form, RichText } from "@/components";

import { imageListAtom } from "./_app";

const Home: NextPage = () => {
  const [imageList] = useAtom(imageListAtom);

  return (
    <>
      <section className="grid place-content-center gap-6 min-h-screen">
        <RichText />
        <Form />
      </section>
      {imageList.length > 0 && (
        <section className="p-40 grid grid-cols-auto min-h-screen">
          {imageList.map((imageURL, index) => (
            <div key={index} className="relative w-full">
              <Image alt="" fill={true} src={imageURL} />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default Home;
