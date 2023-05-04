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
      <AnimatedCard header="Animated Border Default">
        This is an animated card with default settings
      </AnimatedCard>
    </>
  );
}

export default App;
