import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "src/app/App";
import { ErrorBoundary } from "src/app/providers/ErrorBoundary";
import { ThemeProvider } from "src/app/providers/ThemeProviders";

import "src/shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
