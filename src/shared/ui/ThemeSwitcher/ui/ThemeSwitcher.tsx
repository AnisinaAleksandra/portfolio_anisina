import { classNames } from "src/shared/lib/classNames/classNames";
import { Theme, useTheme } from "src/app/providers/ThemeProviders";
import LightIcon from "src/shared/assets/icons/theme-light.svg";
import DarkIcon from "src/shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "src/shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames("", {}, className ? [className] : [])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
