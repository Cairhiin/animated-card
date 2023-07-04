import { useEffect, useRef } from "react";
import "./style.css";

/*
    TODO: 
      Add box-shadow as a custom property
      Change it so border radius works and can be set as a custom property
*/

const withAnimatedBorder =
    WrappedComponent => ({ children, ...props }) => {
    const {
      animationDuration,
      borderColor1,
      borderColor2,
      borderWidth,
      backgroundColor,
      id,
    } = props;

    const elementRef = useRef();
    
    useEffect(() => {
      elementRef.current.style.setProperty(
          "--animationDuration",
          animationDuration || "5s"
        );
      borderColor1 &&
        elementRef.current.style.setProperty("--borderColor1", borderColor1);
      borderColor2 &&
        elementRef.current.style.setProperty("--borderColor2", borderColor2);
      borderWidth &&
        elementRef.current.style.setProperty("--borderWidth", borderWidth);
      backgroundColor &&
        elementRef.current.style.setProperty("--backgroundColor", backgroundColor);
    }, []);

    return (
      <div className="animated__border" id={id} ref={elementRef}>
        <WrappedComponent>{children}</WrappedComponent>
      </div>
    );
  };

export default withAnimatedBorder;