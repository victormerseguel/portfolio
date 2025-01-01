import NorthEastArrow from "./icons/north-east-arrow-icon";

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
      } justify-center items-center gap-1.5 max-w-52 h-12 border border-[--foregraound] rounded-full cursor-pointer hover:opacity-70`}
    >
      <p className="uppercase">{text}</p>
      {image}
    </div>
  );
};

export default Button;
