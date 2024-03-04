import SlideInTransition from "./SlideInTransition";

type TransitionAnimationProps = {
  children: React.ReactNode;
  type?: "slide-in";
};

const TransitionAnimation = ({
  children,
  type = "slide-in",
}: TransitionAnimationProps) => {
  return (
    <>
      {children}
      {type == "slide-in" && <SlideInTransition />}
    </>
  );
};

export default TransitionAnimation;
