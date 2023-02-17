import type {NextPage} from "next";

import {Form, RichText} from "@/components";

const Home: NextPage = () => {
  return (
    <section className="grid place-content-center gap-6">
      <RichText />
      <Form />
    </section>
  );
};

export default Home;
