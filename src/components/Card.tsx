import {
  HStack,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Separator,
  Stack,
  Tag,
  Text,
  Wrap,
} from "@chakra-ui/react";
import type React from "react";
import {
  FaArrowUpRightFromSquare,
  FaBootstrap,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaGithub,
  FaJs,
  FaMagnifyingGlassChart,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import {
  SiChakraui,
  SiDjango,
  SiFastify,
  SiFirebase,
  SiFlask,
  SiGooglesheets,
  SiHugo,
  SiJetpackcompose,
  SiJitsi,
  SiJupyter,
  SiKotlin,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiOpenai,
  SiPlotly,
  SiProducthunt,
  SiSqlite,
  SiTensorflow,
} from "react-icons/si";
import type { CardProps } from "@/types";

export function Cards({
  imageUrl,
  title,
  description,
  githubLink,
  deployLink,
  tags,
}: CardProps) {
  const getTag = (tag: string): [string, React.ElementType] => {
    let values: [string, React.ElementType] = ["gray", FaCode];
    switch (tag) {
      case "React":
        values = ["blue", FaReact];
        break;
      case "Python":
        values = ["orange", FaPython];
        break;
      case "Javascript":
        values = ["yellow", FaJs];
        break;
      case "Product":
        values = ["pink", SiProducthunt];
        break;
      case "Flask":
        values = ["teal", SiFlask];
        break;
      case "gspread":
        values = ["teal", SiGooglesheets];
        break;
      case "OpenAI":
        values = ["blue", SiOpenai];
        break;
      case "MongoDB":
        values = ["green", SiMongodb];
        break;
      case "Node.js":
        values = ["teal", FaNodeJs];
        break;
      case "React Native":
        values = ["blue", FaReact];
        break;
      case "Django":
        values = ["red", SiDjango];
        break;
      case "Firebase":
        values = ["yellow", SiFirebase];
        break;
      case "Kotlin":
        values = ["red", SiKotlin];
        break;
      case "Jetpack":
        values = ["orange", SiJetpackcompose];
        break;
      case "Tensorflow":
        values = ["red", SiTensorflow];
        break;
      case "Jupyter":
        values = ["orange", SiJupyter];
        break;
      case "Bootstrap":
        values = ["purple", FaBootstrap];
        break;
      case "Hugo":
        values = ["purple", SiHugo];
        break;
      case "Jitsi":
        values = ["blue", SiJitsi];
        break;
      case "Growth":
        values = ["red", FaChartLine];
        break;
      case "Analysis":
        values = ["purple", FaMagnifyingGlassChart];
        break;
      case "SQL":
        values = ["blue", FaDatabase];
        break;
      case "SQLite":
        values = ["blue", SiSqlite];
        break;
      case "Fastify":
        values = ["gray", SiFastify];
        break;
      case "Next.js":
        values = ["gray", SiNextdotjs];
        break;
      case "Markdown":
        values = ["gray", SiMarkdown];
        break;
      case "Chakra UI":
        values = ["teal", SiChakraui];
        break;
      default:
        if (["Linear Regression", "OpenCV", "LSTM"].includes(tag)) {
          values = ["blue", GiArtificialIntelligence];
        } else if (["Matplotlib", "Analysis", "Chart.js"].includes(tag)) {
          values = ["pink", SiPlotly];
        }
        break;
    }
    return values;
  };

  const Tags = tags.map((item) => {
    const [color, IconComponent] = getTag(item);
    return (
      <Tag.Root
        key={item}
        colorPalette={color}
        size={{ base: "sm", md: "md" }}
        variant="subtle"
      >
        <Tag.StartElement>
          <IconComponent />
        </Tag.StartElement>
        <Tag.Label>{item}</Tag.Label>
      </Tag.Root>
    );
  });

  return (
    <LinkBox
      as={Stack}
      bg="secondary"
      borderRadius="lg"
      border="1px solid"
      borderColor={{ base: "gray.700", md: "borderColor" }}
      overflow="hidden"
    >
      <Image
        w="100%"
        src={imageUrl}
        transition="0.3s"
        alt={title || "project image"}
        display="inline-block"
      />
      <Stack px={4} py={2} gap={2}>
        <HStack justifyContent="space-between" alignItems="center">
          <LinkOverlay
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text fontSize="2xl" color="displayColor" fontWeight="bold">
              {title}
            </Text>
          </LinkOverlay>
          <HStack justifyContent="flex-end" alignItems="center" gap={4}>
            {githubLink && (
              <Link
                href={githubLink}
                color="white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-label="GitHub Link" size={23} />
              </Link>
            )}
            {deployLink && (
              <Link
                href={deployLink}
                color="white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowUpRightFromSquare
                  aria-label="Deployment Link"
                  size={20}
                />
              </Link>
            )}
          </HStack>
        </HStack>
        <Wrap>{Tags}</Wrap>
        <Separator />
        <Text color="textSecondary" fontSize={{ base: "sm", md: "md" }}>
          {description}
        </Text>
      </Stack>
    </LinkBox>
  );
}
