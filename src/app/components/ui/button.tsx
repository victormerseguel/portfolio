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
      className={`flex justify-center items-center gap-1.5 min-w-48 h-10 px-6 
        border border-foreground rounded-full cursor-pointer hover:opacity-${
          !dark ? "70" : "90"
        } 
        ${isReversed} ${isDark}`}
    >
      <p className="uppercase font-medium text-sm">{text}</p>
      {image}
    </button>
  );
};

export default Button;
