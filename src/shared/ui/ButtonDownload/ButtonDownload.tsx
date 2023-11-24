import { classNames } from "src/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";

interface ButtonDownloadProps {
  className?: string;
  text: string;
}

export const ButtonDownloadСv = ({ className, text }: ButtonDownloadProps) => {
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
