import { type RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/MainPage";
import { AboutPage } from "src/pages/AboutPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { ProjectsPage } from "src/pages/Projects";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found",
  PROJECTS = "projects",
  // CONTACTS = "contacts",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROJECTS]: "/projects",
  [AppRoutes.NOT_FOUND]: "*",
  // [AppRoutes.CONTACTS]: '/contacts',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [AppRoutes.PROJECTS]: {
    path: RoutePath.projects,
    element: <ProjectsPage />,
  },
  // [AppRoutes.CONTACTS]: {
  //     path: RoutePath.contacts,
  //     element: <ContactsPage />
  // },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage className={""} />,
  },
};
