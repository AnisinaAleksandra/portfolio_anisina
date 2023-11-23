import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Footer.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation("footer");
  const actualTheme =
    localStorage.getItem("theme") === "dark"
      ? AppLinkTheme.PRIMARY
      : AppLinkTheme.SECONDARY;
  return (
    <div className={classNames(cls.footer, {}, className ? [className] : [])}>
      <div className={cls.container}>
        <div className={cls.text}>
          © Copyright 2023. Made by Anisina Aleksandra
        </div>
      </div>
    </div>
  );
};
