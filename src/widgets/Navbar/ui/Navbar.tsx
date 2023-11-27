import cls from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { useState } from "react";
import logo from "src/shared/assets/icons/logo.png";
export const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [linksVariant, setLinksVariant] = useState(false);
  const handleOpenMenu = () => {
    setLinksVariant((prev) => !prev);
  };
  return (
    <div className={linksVariant ? cls.navbar_open : cls.navbar}>
      <div className={cls.logo}>
        <img src={logo}></img>
        <span>Portfolio Anisina</span>
      </div>
      <div
        className={linksVariant ? cls.links_open : cls.links}
        onClick={() => setLinksVariant(false)}
      >
        {/* <AppLink theme={actualTheme}
              to={'/'} className={cls.mainLink}>{t('main')}
              </AppLink>
              <AppLink theme={actualTheme}
              to={'/about'} className={cls.mainLink}>
                  {t('about')}
              </AppLink>
              <AppLink theme={actualTheme}
              to={'/projects'} className={cls.mainLink}>
                  {t('projects')}
              </AppLink>
              <AppLink theme={actualTheme} to={'/contacts'}>
                  {t('contacts')}
              </AppLink> */}

        <Link
          className={cls.mainLink}
          activeClass="active"
          to="main"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setLinksVariant(false)}
        >
          {t("main")}
        </Link>
        <Link
          to="about"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setLinksVariant(false)}
        >
          {t("about")}
        </Link>
        <Link
          to="projects"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setLinksVariant(false)}
        >
          {t("projects")}
        </Link>
        <Link
          to="contacts"
          className={cls.mainLink}
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={() => setLinksVariant(false)}
        >
          {t("contact")}
        </Link>
      </div>

      <div className={cls.burger} onClick={handleOpenMenu}>
        <div className={cls.btn_line}></div>
        <div className={cls.btn_line}></div>
        <div className={cls.btn_line}></div>
      </div>
    </div>
  );
};
