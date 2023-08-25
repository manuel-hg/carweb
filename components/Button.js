"use client";
import Image from "next/image";

export default ({
  title,
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none custom- ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
