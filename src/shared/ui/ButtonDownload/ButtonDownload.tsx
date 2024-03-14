import { classNames } from "src/shared/lib/classNames/classNames";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";
import pdfFilePath from "./Aleksandra_Anisina_CV.pdf";
import pdfFilePathEng from "./AnisinaAAFrontend_CV.pdf";

interface ButtonDownloadProps {
  className?: string;
  text: string;
}

export const ButtonDownloadСv = ({ className, text }: ButtonDownloadProps) => {
  const handleDownload = () => {
    const pdfFilePathV =
      localStorage.getItem("i18nextLng") === "ru"
        ? pdfFilePath
        : pdfFilePathEng;

    fetch(pdfFilePathV)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Aleksandra_Anisina_CV.pdf");
        document.body.appendChild(link);
        link.click();
        if (link.parentNode) link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error fetching the PDF file:", error);
      });
  };
  return (
    <>
      <Button
        className={classNames("", {}, [className ? className : ""])}
        theme={ThemeButton.FILLED}
        onClick={handleDownload}
      >
        {text}
      </Button>
    </>
  );
};
