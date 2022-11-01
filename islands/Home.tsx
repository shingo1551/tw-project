import { useEffect, useState } from "preact/hooks";
import Counter from "../components/Counter2.tsx";
import { tw } from "twind";
import { btn, btn1 } from "../shared/styles.ts";

export default function Home() {
  const [trans, setTrans] = useState({ step: 0, style: "transition-none" });
  const [tgl1, setTgl1] = useState(false);
  const [tgl2, setTgl2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trans.step < 5) {
        setTrans({
          step: trans.step + 1,
          style: `transition-duration: 500ms; transform: translateX(${trans.step * 5
            }rem);`,
        });
      } else {
        setTrans({ step: 1, style: "transition-property: none;" });
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div class={`p-4 mx-auto max-w-screen-md>`} style={trans.style}>
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6 text-xs">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <button class={tw`${tgl1 ? btn : null}`} onClick={() => setTgl1(!tgl1)}>
        bg-blue-200
      </button>
      <button class={tw`${tgl1 && btn}`} onClick={() => setTgl1(!tgl1)}>
        bg-blue-200
      </button>
      <button
        class={tw({ "bg-gray-200": tgl2 })}
        onClick={() => setTgl2(!tgl2)}
      >
        bg-gray-200
      </button>
      <button class={tw(btn1)}>red</button>
      <button class="text-daichi">brown</button>
    </div>
  );
}
