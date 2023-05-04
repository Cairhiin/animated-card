import { ReactNode, useEffect } from "react";
import "./style.css";

/*
    animationDuration: string formatted with time in seconds followed by an 's' fe: '10s'
    borderWidth: string formatted with width in pixels followed by 'px' fe: '2px'
*/
interface AnimatedCardProps {
  children: ReactNode;
  animationDuration?: string;
  borderColor1?: string;
  borderColor2?: string;
  borderWidth?: string;
  backgroundColor?: string;
}

// TypeScript solution: https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
const withAnimatedBorderCard =
  <P extends object>(
    WrappedComponent: React.ComponentType<P>
  ): React.FC<P & AnimatedCardProps> =>
  ({ children, ...props }: AnimatedCardProps) => {
    const {
      animationDuration,
      borderColor1,
      borderColor2,
      borderWidth,
      backgroundColor,
    } = props;

    useEffect(() => {
      const animatedCard = document.getElementById("animated-card");
      animationDuration &&
        animatedCard &&
        animatedCard.style.setProperty(
          "--animationDuration",
          animationDuration
        );
      borderColor1 &&
        animatedCard &&
        animatedCard.style.setProperty("--borderColor1", borderColor1);
      borderColor2 &&
        animatedCard &&
        animatedCard.style.setProperty("--borderColor2", borderColor2);
      borderWidth &&
        animatedCard &&
        animatedCard.style.setProperty("--borderWidth", borderWidth);
      backgroundColor &&
        animatedCard &&
        animatedCard.style.setProperty("--backgroundColor", backgroundColor);

      console.log(animatedCard);
    }, []);

    return (
      <div className="animated__border" id="animated-card">
        <WrappedComponent {...(props as P)}>{children}</WrappedComponent>
      </div>
    );
  };

export default withAnimatedBorderCard;
