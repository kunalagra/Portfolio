import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/CV")({
  beforeLoad: () => {
    throw redirect({
      href: "https://drive.google.com/file/d/1xSuVUMK4WzzzA088TGtvc_zGQbBhhwHe/view",
      code: 301,
    });
  },
});
