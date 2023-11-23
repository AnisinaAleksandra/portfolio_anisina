import { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProviders";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { Footer } from "../widgets/Footer";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
