import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";

interface ButtonDownloadProps {
  className?: string;
  text: string;
}

export const ButtonDownloadСv = ({ className, text }: ButtonDownloadProps) => {
  const { t } = useTranslation("main");
  // создать временно скачивание резюме с gooledisk по способу скачивания тем у кого ссылка есть.
  // позже прикрутить бэк для скачивания по ссылке

  return (
    <Button
      className={classNames("", {}, [className ? className : ""])}
      theme={ThemeButton.CLEAR}
      // onClick={downloadCV}
    >
      {text}
    </Button>
  );
};
