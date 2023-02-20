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
          
        </section>
      )}
    </>
  );
};

export default Home;
