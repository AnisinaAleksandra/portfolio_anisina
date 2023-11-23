import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { type ButtonHTMLAttributes, type FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  FILLED = "filled",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(
        cls.Button,
        { [cls[theme ?? ""]]: true },
        className ? [className] : []
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
