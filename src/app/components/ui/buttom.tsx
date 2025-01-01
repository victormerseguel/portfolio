import NorthEastArrow from "./north-east-arrow";

type ButtonProps = {
  text: string;
  image?: React.ReactElement;
  reversed?: boolean;
};

const Button = ({ text, image, reversed }: ButtonProps) => {
  return (
    <div
      className={`flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } justify-center items-center gap-1.5 max-w-52 h-12 border border-[--foregraound] rounded-full`}
    >
      <p className="uppercase">{text}</p>
      {image}
    </div>
  );
};

export default Button;
