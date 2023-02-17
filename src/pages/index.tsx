import type { NextPage } from "next";

import Image from "next/image";
import { useAtom } from "jotai";

import { Form, RichText } from "@/components";

import { imageListAtom } from "./_app";

const Home: NextPage = () => {
  const [imageList] = useAtom(imageListAtom);

  return (
    <>
      <section className="grid place-content-center gap-6">
        <RichText />
        <Form />
      </section>
      {imageList.length > 0 && (
        <section id="genImgContainer">
          <ul className="p-20 gap-6 grid grid-cols-auto min-h-screen">
            {imageList.map((imageURL, index) => (
              <li
                key={index}
                className="relative w-full rounded-xl overflow-hidden shadow-lg shadow-primary/40"
              >
                <Image
                  alt=""
                  fill={true}
                  src={imageURL}
                  onLoad={() => console.log("Cargadito")}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default Home;
