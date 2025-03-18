import { type RouteConfig, route } from "@react-router/dev/routes";
import type { LoaderFunction } from "react-router";

export default [
    route("/", "routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/docs", "routes/docs.tsx"),
    route("/contacts", "routes/contacts.tsx"),
    route("/vacancies", "routes/vacancies.tsx"),
    
] satisfies RouteConfig;
