import { AboutPage } from "src/pages/AboutPage";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import image from "src/shared/assets/icons/main_image.jpeg";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";
import { ButtonDownloadСv } from "src/shared/ui/ButtonDownload/ButtonDownload";
import { ProjectsPage } from "src/pages/Projects";
import Contact from "src/pages/Contact/ui/Contact";
const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div className={cls.main_page} id="main">
      <div className={cls.main_page_container}>
        <div className={cls.left_side}>
          <div className={cls.head_text}>
            <span className={cls.orange_text}>{t("orange_text")}</span>
            <div className={cls.description_text}>{t("description_text")}</div>
          </div>

          <div className={cls.bottom_text}>{t("bottom_text")}</div>
          <div className={cls.buttons_box}>
            <Button theme={ThemeButton.FILLED}>{t("book_a_call")}</Button>
            <ButtonDownloadСv
              className={"download_cv"}
              text={t("download_C")}
            />
          </div>
        </div>
        <div className={cls.right_side_foto}>
          {/* <div className={cls.part_image}></div> */}
          {/* <div className={cls.part_image}></div> */}
          <img src={image} alt="my_foto" />
          {/* <div className={cls.part_image}></div> */}
        </div>
      </div>

      <AboutPage />
      <ProjectsPage />
      <Contact />
    </div>
  );
};

export default MainPage;
