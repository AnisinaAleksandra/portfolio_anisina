import cls from "./ProjectsPage.module.scss";
import { useTranslation } from "react-i18next";
import laptop from "src/shared/assets/laptop_screen_transparent.png";
import backgroundImageProgect from "src/shared/assets/backgroundImageProgect.png";
import backgroundImageProgect2 from "src/shared/assets/svarka.png";

const ProjectsPage = () => {
  const { t } = useTranslation("projects");

  const projectList = [
    {
      id: "btm_electronics",
      image: backgroundImageProgect,
      title: "BTM Electronics",
      text: "description_of_project",
    },
    {
      id: "svarka",
      image: backgroundImageProgect2,
      title: "Svarka",
      text: "description_of_project",
    },
  ];

  return (
    <div className={cls.progects_page} id="projects">
      <div className={cls.title_of_page}>{t("Projects")}</div>
      <div className={cls.container_progects_list}>
        {projectList.length ? (
          projectList.map(function (project) {
            return (
              <div className={cls.progect} key={project.id}>
                <div className={cls.image_of_project}>
                  <img src={project.image} alt="backgroundImageProgect" />
                  <img src={laptop} alt="laptop_screen_transparent" />
                </div>
                <div className={cls.description_of_project}>
                  <div className={cls.description_of_project_title}>
                    <h1>{project.title}</h1>
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
