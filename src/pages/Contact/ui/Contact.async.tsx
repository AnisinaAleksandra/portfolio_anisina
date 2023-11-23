import { lazy } from "react";
export const ContactAsync = lazy(async () => await import("./Contact"));
