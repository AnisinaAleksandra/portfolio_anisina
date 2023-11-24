import cls from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.container}>
        <div className={cls.text}>
          © Copyright 2023. Made by Anisina Aleksandra
        </div>
      </div>
    </div>
  );
};
