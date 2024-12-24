import React from 'react'
import { Box, Text, Image, SimpleGrid, Container } from "@chakra-ui/react"
import styles from "../styles/Home.module.css";
import avatar from "../sources/avatar.png";
import resume from "../sources/Shivam_Maurya_Resume.pdf";
import { GoDesktopDownload } from "react-icons/go";
import { VscPreview } from "react-icons/vsc"

export const Home = () => {
  return (
    <Container maxW={'7xl'} className={styles.mainBox} id="home">
        <SimpleGrid columns={[1,null,1,1]} spacing={1}>
            <Box className={styles.imageBox}>
                <Image className={styles.img} src={avatar} alt="avatar"/>
            </Box>
            <Box className={styles.headingBox}>
                <Text  className={styles.welcome}>Hey, I am Shivam Maurya</Text>
                <Text fontSize="1.7rem" >( Full-Stack Web Developer )</Text>
                <Text fontSize={'1.2rem'}>A computer enthusiast who loves creating websites and exploring emerging web technologies.</Text>
                <Box className={styles.btn_box}>
                <a  href={"https://drive.google.com/file/d/1o3sgND-b0QckNDAedDTbH-CXbEMEkkOQ/view?usp=sharing"} target ="blank" >
                    <button className={styles.prevBtn}><VscPreview />Preview</button>
                </a>
                <a  href={resume} download={resume}>
                    <button className={styles.resumeBtn}><GoDesktopDownload />Download</button>
                </a>
                </Box>
            </Box>
        </SimpleGrid>
    </Container>
  )
}
