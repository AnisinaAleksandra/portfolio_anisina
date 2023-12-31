import { useTranslation } from "react-i18next";
import cls from "./ErrorPage.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";

export const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [""])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage} theme={ThemeButton.CLEAR}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};
