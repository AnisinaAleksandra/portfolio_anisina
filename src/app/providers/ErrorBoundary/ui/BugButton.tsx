import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { useEffect, useState } from "react";
import Bug from "@/shared/assets/icons/bug.svg";

export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} theme={ThemeButton.CLEAR}>
      <Bug />
    </Button>
  );
};
