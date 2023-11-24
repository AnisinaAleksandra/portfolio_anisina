import { classNames } from "src/shared/lib/classNames/classNames";
import { Loader } from "src/shared/ui/Loader/Loader";
import cls from "./PageLoader.module.scss";

export const PageLoader = () => (
  <div className={classNames(cls.PageLoader, {}, [""])}>
    <Loader />
  </div>
);
