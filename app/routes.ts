import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
    route("/executives", "routes/executives.tsx"),
    route("/gallery", "routes/gallery.tsx"),
    route("/news", "routes/news.tsx"),
    route("/contact", "routes/contact.tsx"),
  ])
] satisfies RouteConfig;
