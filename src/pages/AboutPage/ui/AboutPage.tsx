import cls from "./AboutPage.module.scss";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t } = useTranslation("about");
  const skillsList = [
    "JavaScript/TypeScript",
    "React",
    "Angular",
    "Webpack",
    "HTML",
    "CSS/SASS/LESS",
    "GITHUB/GITLUB",
    "Express",
    "RTK Query",
    "MobX",
    "Redux Saga/Thunk",
    "MongoDB",
  ];
  return (
    <div className={cls.container} id="about">
      <div className={cls.title_of_page} data-aos="fade-down">
        {t("ABOUT_ME")}
      </div>
      <div className={cls.content_page}>
        <div className={cls.description_part}>
          <div className={cls.who_am_i}>{t("WEB_DEVELOPER")}</div>
          <div className={cls.that_is_me}>{t("react_angular")}</div>
          <div className={cls.description_text}>
            {t("I")} <strong>{t("front-end web developer")}</strong>{" "}
            {t("create")}
            <strong>{t("Projects")} </strong>
            {t("description_text")} {t("subscribe")}
            <a href="www.linkedin.com/in/aleksandra-anisina-4024551aa">
              LinkedIn
            </a>
            .{t("end")} <strong>{t("contact")}</strong> {t("me")}
          </div>
        </div>
        <div className={cls.my_skils}>
          <div className={cls.title_of_skills}>{t("SKILLS")}</div>
          <div className={cls.skills_list}>
            {skillsList.map((skill) => (
              <div className={cls.skills_item} key={skill} data-aos="fade-down">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
