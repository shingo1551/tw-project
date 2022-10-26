import { Component } from "preact";
import { Button } from "../components/Button.tsx";
import { tw } from "twind";
import { btn, btn1 } from "../shared/styles.ts";

interface Props {
  start: number;
}

interface State {
  count: number;
}

export default class Counter extends Component<Props, State> {
  componentWillMount() {
    this.setCount(this.props.start);
  }

  setCount = (count: number) => this.state = { count: count };

  render() {
    return (
      <>
        <div class="flex gap-2 w-full">
          <p class={`flex-grow-1 font-bold text-xl`}>{this.state.count}</p>
          <Button onClick={() => this.setCount(this.state.count - 1)}>
            -1
          </Button>
          <Button onClick={() => this.setCount(this.state.count + 1)}>
            +1
          </Button>
        </div>
        <button class={tw(btn)}>ここ</button>
        <button class={tw(btn1)}>ここ</button>
      </>
    );
  }
}
