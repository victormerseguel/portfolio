type ButtonProps = {
  text: string;
  image?: React.ReactElement;
  reversed?: boolean;
  dark?: boolean;
};

const Button = ({ text, image, reversed, dark }: ButtonProps) => {
  const isReversed = reversed ? "flex-row-reverse" : "flex-row";
  const isDark = dark ? "bg-foreground text-background" : "";

  return (
    <button
      className={`flex justify-center items-center gap-1.5 min-w-52 h-12 px-6 
        border border-[--foregraound] rounded-full cursor-pointer hover:opacity-70 
        ${isReversed} ${isDark}`}
    >
      <p className="uppercase font-medium">{text}</p>
      {image}
    </button>
  );
};

export default Button;
