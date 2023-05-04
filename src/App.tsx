import { ReactNode } from "react";
import withAnimatedBorderCard from "./components/withAnimatedBorderCard";
import "./App.css";

interface Props {
  header?: string;
  children: ReactNode;
}

function App() {
  const Card = ({ children, header }: Props) => (
    <div className="card">
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
  const AnimatedCard = withAnimatedBorderCard(Card);

  return (
    <>
      <h1 className="header">Animated Border Card Examples</h1>
      <div className="examples">
        <AnimatedCard header="Animated Border default settings" id="example1">
          This is an animated card with default settings.
        </AnimatedCard>
        <AnimatedCard
          borderColor1="orange"
          borderColor2="purple"
          header="Animated Border with custom colors"
          id="example2"
        >
          This is an animated card has two custom colors for the animation:{" "}
          <br />
          <pre>
            borderColor1="orange"
            <br />
            borderColor2="purple"
          </pre>
        </AnimatedCard>
        <AnimatedCard
          header="Animated Border with custom animation duration and border width"
          id="example3"
          animationDuration="3s"
          borderWidth="5px"
        >
          This is an animated card has two custom colors for the animation:{" "}
          <br />
          <pre>
            animationDuration="3s" <br />
            borderWidth="5px"
          </pre>
        </AnimatedCard>
        <AnimatedCard
          header="Animated Border with custom animation duration and border width"
          id="example4"
          backgroundColor="hsl(222, 47%, 11%)"
        >
          This is an animated card with a custom background color: <br />
          <pre>
            backgroundColor=
            <br />
            &nbsp;&nbsp;"hsl(222, 47%, 11%)" <br />
            borderRadius="10px"
          </pre>
        </AnimatedCard>
      </div>
    </>
  );
}

export default App;
