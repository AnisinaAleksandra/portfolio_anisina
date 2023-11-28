import cls from "./ProjectsPage.module.scss";
import { useTranslation } from "react-i18next";
import laptop from "src/shared/assets/laptop_screen_transparent.png";
import mobile from "src/shared/assets/mobile_screen_transparent.png";
import backgroundImageProgect from "src/shared/assets/backgroundImageProgect.png";
import backgroundImageProgect2 from "src/shared/assets/svarka.png";
import backgroundImageMobile from "src/shared/assets/mobile_btm.png";
import backgroundImageMobile2 from "src/shared/assets/mobile_svarka.png";

const ProjectsPage = () => {
  const { t } = useTranslation("projects");

  const projectList = [
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
  ];

  return (
    <div className={cls.progects_page} id="projects">
      <div className={cls.title_of_page} data-aos="fade-down">
        {t("Projects")}
      </div>
      <div className={cls.container_progects_list}>
        {projectList.length ? (
          projectList.map(function (project) {
            return (
              <div className={cls.progect} key={project.id}>
                <div className={cls.image_of_project} data-aos="flip-left">
                  <img src={project.image} alt="backgroundImageProgect" />
                  <img src={laptop} alt="laptop_screen_transparent" />
                </div>
                <div
                  className={cls.image_of_project_mobile}
                  data-aos="flip-left"
                >
                  <img src={mobile} alt="laptop_screen_mobile_transparent" />
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
                    <a href={project.site}>
                      <h1>{project.title}</h1>
                    </a>
                  </div>
                  <div className={cls.description_of_project_text}>
                    {t(project.text)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
