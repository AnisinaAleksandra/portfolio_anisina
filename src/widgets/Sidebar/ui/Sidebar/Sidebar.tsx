import { useTranslation } from "react-i18next";
import { classNames } from "src/shared/lib/classNames/classNames";
import { useTheme } from "src/app/providers/ThemeProviders";
import cls from "./Sidebar.module.scss";

export const Sidebar = () => {
  const { toggleTheme } = useTheme();

  const { i18n } = useTranslation();

  const toggle = async () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar)}>
      <div className={cls.switchers}>
        <div className={cls.social_container}>
          <ul className={cls.social_icons}>
            <li>
              <a href="https://wa.me/9133856872">
                <i className="fa fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/anisina_aleksandra">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aleksandra-anisina">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/AnisinaAleksandra#">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggle}>
                <i className="fa fa-language"></i>
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleTheme}>
                <i
                  className="fa fa-lightbulb-o"
                  aria-hidden="true"
                  style={{ left: "14px" }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
