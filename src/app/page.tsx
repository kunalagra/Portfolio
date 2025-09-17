import { Stack } from "@chakra-ui/react";
import { bioData, certificates, milestones, projects } from "@/assets/data";
import {
  AboutMe,
  Certificates,
  ContactMe,
  FeaturedProjects,
  Introduction,
  Milestones,
} from "@/components";

export default async function Page() {
  return (
    <Stack
      as="main"
      gap="144px"
      justifyContent="center"
      alignItems="flex-start"
      px={{ base: "5vw", md: "10vw" }}
      mt={{ base: "15vh", md: "22.5vh" }}
    >
      <Introduction introduction={bioData} />
      <AboutMe />
      <Milestones milestones={milestones} />
      <FeaturedProjects projects={projects} />
      <Certificates certificates={certificates} />
      <ContactMe introduction={bioData} />
    </Stack>
  );
}
