import AOS from "aos";
import "aos/dist/aos.css";
import { AboutPage } from "src/pages/AboutPage";
import cls from "./MainPage.module.scss";
import { useTranslation } from "react-i18next";
import image from "src/shared/assets/icons/main_image.jpeg";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";
import { ButtonDownloadСv } from "src/shared/ui/ButtonDownload/ButtonDownload";
import { ProjectsPage } from "src/pages/Projects";
import Contact from "src/pages/Contact/ui/Contact";
import { useEffect } from "react";

const MainPage = () => {
  const { t } = useTranslation("main");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={cls.main_page} id="main">
      <div className={cls.main_page_container}>
        <div className={cls.left_side}>
          <div className={cls.head_text} data-aos="fade-right">
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
          <img src={image} alt="my_foto" />
        </div>
      </div>

      <AboutPage />
      <ProjectsPage />
      <Contact />
    </div>
  );
};

export default MainPage;
