import ProjectsClient from "./ProjectsClient";
import { site } from "@/data/site";

export const metadata = {
  title: `Our Projects & Gallery | ${site.name}`,
  description:
    "Explore our portfolio of completed projects in Hyderabad, featuring industrial sheds, warehouses, automatic gates, railings, structural steel work, and custom fabrication.",
  keywords: [
    "fabrication projects hyderabad",
    "industrial shed gallery hyderabad",
    "automatic gates portfolio",
    "steel fabrication photos",
    "fancy engineering works gallery",
  ],
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
