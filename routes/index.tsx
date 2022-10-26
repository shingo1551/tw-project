import { Head } from "$fresh/runtime.ts";
import H from "../islands/Home.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <H />
    </>
  );
}
