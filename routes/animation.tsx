import { Head } from "$fresh/runtime.ts";
import Animation from "../islands/Animation.tsx";

export default function animation() {
  return (
    <>
      <Head>
        <link href="/animation.css" rel="stylesheet" />
      </Head>
      <Animation />
    </>
  );
}
