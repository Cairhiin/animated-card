import { ReactNode, useEffect, useRef } from "react";
import "./style.css";

/*
    TODO: 
      Add box-shadow as a custom property
      Change it so border radius works and can be set as a custom property
*/
interface AnimatedProps {
  children: ReactNode;
  animationDuration?: string;
  borderColor1?: string;
  borderColor2?: string;
  borderWidth?: string;
  backgroundColor?: string;
  id: string;
}

// TypeScript solution: https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb
const withAnimatedBorder =
  <P extends object>(
    WrappedComponent: React.ComponentType<P>
  ): React.FC<P & AnimatedProps> =>
  ({ children, ...props }: AnimatedProps) => {
    const {
      animationDuration,
      borderColor1,
      borderColor2,
      borderWidth,
      backgroundColor,
      id,
    } = props;
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      animationDuration &&
        elementRef.current &&
        elementRef.current.style.setProperty(
          "--animationDuration",
          animationDuration || "5s"
        );
      borderColor1 &&
        elementRef.current &&
        elementRef.current.style.setProperty("--borderColor1", borderColor1);
      borderColor2 &&
        elementRef.current &&
        elementRef.current.style.setProperty("--borderColor2", borderColor2);
      borderWidth &&
        elementRef.current &&
        elementRef.current.style.setProperty("--borderWidth", borderWidth);
      backgroundColor &&
        elementRef.current &&
        elementRef.current.style.setProperty(
          "--backgroundColor",
          backgroundColor
        );
    }, []);

    return (
      <div className="animated__border" id={id} ref={elementRef}>
        <WrappedComponent {...(props as P)}>{children}</WrappedComponent>
      </div>
    );
  };

export default withAnimatedBorder;
