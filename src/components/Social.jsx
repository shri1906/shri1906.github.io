import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import {ImProfile  } from 'react-icons/im';
import { FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import styles from "../styles/Social.module.css";

export const Social = () => {
  return (
    <Box className={styles.container}>
      <Text>Also visit:</Text>
    <Box className={styles.box}>
        <a href="https://github.com/shivam0626" target="blank" className={styles.socialLogo}><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivam-maurya-5131331b6/" target="blank" className={styles.socialLogo}><FaLinkedin /></a>
        <a href="https://twitter.com/ShivamM96073793" target="blank" className={styles.socialLogo}><FaTwitter /></a>
        <a  href={"https://drive.google.com/file/d/1o3sgND-b0QckNDAedDTbH-CXbEMEkkOQ/view?usp=sharing"} target="blank" className={styles.socialLogo} ><button className={styles.resumeBtn}><ImProfile /></button></a>
    </Box>
    <Box>
      <Text fontSize={"1rem"}>Phone: +91-7310941087</Text>
      <Text fontSize={"1rem"}>E-mail: shivammaurya7310@gmail.com</Text>
    </Box>
</Box>
  )
}
