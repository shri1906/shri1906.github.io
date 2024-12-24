import { Text, Image, SimpleGrid, Box, Container } from "@chakra-ui/react";
import html5 from "../sources/html.png";
import css3 from "../sources/CSS3_logo.svg.png";
import rct from "../sources/React-icon.svg.png";
import jsl from "../sources/JavaScript-logo.png";
import mdb from "../sources/mongodb.png";
import nodel from "../sources/nodejs-logo.png";
import express from "../sources/express.png";
import dsa from "../sources/dsa.png";
import redux from "../sources/redux.png";
import github from "../sources/GitHub-Mark.png";
import styles from "../styles/Skills.module.css";
import chakra from "../sources/chakra.webp";
import vscode from "../sources/vs code.png";
import postman from "../sources/postman.png";
import json from "../sources/json.png";
import typescript from "../sources/typescript-1174965.webp";
import php from "../sources/php.png";
import mysql from "../sources/mysql.png";
import bootstrap from "../sources/bootstrap5.jpg";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: html5,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: css3,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: jsl,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "BootStrap5",
      icon: bootstrap,
      link: "https://getbootstrap.com/",
    },
    {
      name: "TypeScript",
      icon: typescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "ReactJs",
      icon: rct,
      link: "https://react.dev/",
    },
    {
      name: "MongoDB",
      icon: mdb,
      link: "https://www.mongodb.com/",
    },
    {
      name: "NodeJs",
      icon: nodel,
      link: "https://nodejs.org/en",
    },
    {
      name: "Redux",
      icon: redux,
      link: "https://redux.js.org/",
    },
    {
      name: "ExpressJs",
      icon: express,
      link: "https://expressjs.com/",
    },
    {
      name: "Chakra UI",
      icon: chakra,
      link: "https://www.chakra-ui.com/",
    },
    {
      name: "JSON Server",
      icon: json,
      link: "https://json-server.dev/",
    },
    {
      name: "Data Structure",
      icon: dsa,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/",
    },
    {
      name: "VS Code",
      icon: vscode,
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Postman",
      icon: postman,
      link: "https://www.postman.com/",
    },
    {
      name: "PHP",
      icon: php,
      link: "https://www.php.net/",
    },
    {
      name: "MySql",
      icon: mysql,
      link: "https://www.mysql.com/",
    },
  ];

  return (
    <Container maxW={"7xl"} id="skills" className={styles.skillMain}>
      <Text size={"xl"} className={styles.head}>
        Technical Skills
      </Text>
      <Text className={styles.para}>
        These are some tech stacks and tools, which I have utilized in my
        projects.
      </Text>
      <SimpleGrid
        p={["auto", "auto", "auto", "3rem"]}
        columns={[2, null, 3, 6]}
        spacing={15}
      >
        {skills.map((s) => (
          <Box
            as="a"
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logo_img_box}
            key={s.name}
          >
            <Image className={styles.img} src={s.icon} alt={s.name} />
            <Text mt="0.5rem" fontSize={"1.2rem"}>
              {s.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default Skills;
