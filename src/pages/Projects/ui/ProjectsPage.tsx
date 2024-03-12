import cls from "./ProjectsPage.module.scss";
import { useTranslation } from "react-i18next";
import laptop from "src/shared/assets/laptop_screen_transparent.png";
import mobile from "src/shared/assets/mobile_screen_transparent.png";
import tenderImageProgect from "src/shared/assets/cardsMobile.jpg";
import tenderImageMobile from "src/shared/assets/cards.jpg";
import lkImageProgect from "src/shared/assets/lk.jpg";
import lkImageMobile from "src/shared/assets/lkMobile.jpeg";
import backgroundImageProgect from "src/shared/assets/backgroundImageProgect.png";
import backgroundImageProgect2 from "src/shared/assets/svarka.png";
import backgroundImageProgect3 from "src/shared/assets/portfolio.png";
import backgroundImageProgect4 from "src/shared/assets/greneo_project_web.png";
import backgroundImageMobile from "src/shared/assets/mobile_btm.png";
import backgroundImageMobile2 from "src/shared/assets/mobile_svarka.png";
import backgroundImageMobile3 from "src/shared/assets/mobile_portfolio.png";
import backgroundImageMobile4 from "src/shared/assets/greneo_project_mobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectsPage = () => {
  const { t } = useTranslation("projects");

  const projectList = [
    {
      id: "Tender_x5Retail",
      image: tenderImageProgect,
      imageMobile: tenderImageMobile,
      site: "#",
      title: "Tender_X5Retail (For internal purposes)",
      text: "X5 Retail Group - One of biggest retails in Russia. Platform for holding tenders. React/TS/Redux/Sass",
    },
    {
      id: "Lk_x5Retail",
      image: lkImageProgect,
      imageMobile: lkImageMobile,
      site: "#",
      title: "Lk_X5Retail (For internal purposes)",
      text: "X5 Retail Group - One of biggest retails in Russia. Personal account for employees. React/TS/Redux/Sass.",
    },
    {
      id: "portfolio_grineo",
      image: backgroundImageProgect4,
      imageMobile: backgroundImageMobile4,
      site: "https://grineo-cripto.vercel.app/",
      title: "Greneo",
      text: "grineo-cripto.vercel.app",
    },
    {
      id: "btm_electronics",
      image: backgroundImageProgect,
      imageMobile: backgroundImageMobile,
      site: "https://btmelectronics.com",
      title: "BTM Electronics",
      text: "description_of_project",
    },
    {
      id: "svarka",
      image: backgroundImageProgect2,
      imageMobile: backgroundImageMobile2,
      site: "https://svarkaraitkin.ru",
      title: "Svarka",
      text: "description_of_project2",
    },
    {
      id: "portfolio_anisina",
      image: backgroundImageProgect3,
      imageMobile: backgroundImageMobile3,
      site: "https://portfolio-anisina.vercel.app/",
      title: "Portfolio Anisina",
      text: "description_of_project3",
    },
  ];

  return (
    <div className={cls.progects_page} id="projects">
      <div className={cls.title_of_page} data-aos="fade-down">
        {t("Projects")}
      </div>
      <div className={cls.container_progects_list}>
        {projectList.length ? (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // style={{ width: "80%" }}
            modules={[Pagination]}
            className={cls.mySwiper}
          >
            {projectList.map((project) => {
              return (
                <SwiperSlide>
                  <div className={cls.progect} key={project.id}>
                    <div className={cls.image_of_project} data-aos="flip-left">
                      <img src={project.image} alt="backgroundImageProgect" />
                      <img src={laptop} alt="laptop_screen_transparent" />
                    </div>
                    <div
                      className={cls.image_of_project_mobile}
                      data-aos="flip-left"
                    >
                      <img
                        src={mobile}
                        alt="laptop_screen_mobile_transparent"
                      />
                      <img
                        src={project.imageMobile}
                        alt="backgroundImageMobileProgect"
                      />
                    </div>
                    <div
                      className={cls.description_of_project}
                      data-aos="flip-right"
                    >
                      <div className={cls.description_of_project_title}>
                        {project.site === "#" ? (
                          <h3>{project.title}</h3>
                        ) : (
                          <h3>
                            <a href={project.site}>{project.title}</a>
                          </h3>
                        )}
                      </div>
                      <div className={cls.description_of_project_text}>
                        {t(project.text)}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
