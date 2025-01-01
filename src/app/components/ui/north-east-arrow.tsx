import React from "react";

const NorthEastArrow = ({ small }: { small?: boolean }) => {
  const size = !small ? "19" : "12";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.27501 15.8333L3.16667 14.725L12.35 5.54165H7.12501V3.95831H15.0417V11.875H13.4583V6.64998L4.27501 15.8333Z"
        fill="#17130F"
      />
    </svg>
  );
};

export default NorthEastArrow;
