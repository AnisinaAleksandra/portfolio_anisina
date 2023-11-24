import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProviders";
import { Navbar } from "../widgets/Navbar";
import { Sidebar } from "../widgets/Sidebar";
import { AppRouter } from "./providers/router";
import { Footer } from "../widgets/Footer";
import { classNames } from "../shared/lib/classNames/classNames";
import "./styles/index.scss";
// import { classNames } from "src/shared/lib/classNames/classNames";

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
