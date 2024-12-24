import { Box, Text, Image, SimpleGrid, Container } from "@chakra-ui/react";
import styles from "../styles/About.module.css";
import profile from "../sources/profile.png";
const About = () => {
  return (
    <Container maxW={"7xl"} className={styles.mainBox} id="about">
      <Text size={"xl"} className={styles.head}>
        About Me
      </Text>
      <SimpleGrid columns={[1, null, 1, 2]} spacing="1rem" pt={"3rem"}>
        <Box className={styles.headingBox}>
          <Text size={"md"} className={styles.para}>
            I am a dedicated and versatile web developer with a strong
            background in designing and building dynamic, feature-rich websites
            and applications. Proficient in both the MERN stack (MongoDB,
            Express.js, React.js, Node.js) and PHP with MySQL, I specialize in
            developing scalable, high-performance solutions tailored to meet
            unique business requirements.
          </Text>
          <br />
          <Text size={"md"} className={styles.para}>
            With an M.Sc. in Information Technology, I have cultivated a robust
            understanding of software development principles and best practices.
            My expertise spans across front-end and back-end development,
            enabling me to create seamless user experiences and efficient
            server-side functionalities.
          </Text>
          <br />
          <Text size={"md"} className={styles.para}>
            Beyond coding, I’m passionate about staying updated with the latest
            industry trends and continuously improving my skills to deliver
            innovative solutions. I thrive in collaborative environments,
            embracing challenges, and turning ideas into reality.
          </Text>
        </Box>
        <Box className={styles.imageBox} h={["auto", "auto", "auto", "25rem"]}>
          <Image className={styles.img} src={profile} alt="avatar" />
        </Box>
      </SimpleGrid>
    </Container>
  );
};
export default About;
