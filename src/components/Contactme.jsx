import { Box, Container, Text, SimpleGrid, Divider, useColorMode } from "@chakra-ui/react"
import { Email } from "./Email"
import { Social } from "./Social"
import styles from "../styles/Contactme.module.css"

export const Contactme = () => {
const { colorMode } = useColorMode();

  return (
    <Box className={ colorMode === 'light' ? styles.mainBox1 : styles.mainBox2 } id="contact">
    <Container maxW={"7xl"}>
        <Text className={styles.contact}>CONTACT ME</Text>
        <SimpleGrid columns={[1,null,2]}>
            <Social />
            <Email />
        </SimpleGrid>
    </Container>
    <Divider mt="1rem" />
    <Text pt="10px" fontSize='1rem' color={"white"}>&copy; {new Date().getFullYear()} | All rights reserved.</Text>
    </Box>
  )
}
