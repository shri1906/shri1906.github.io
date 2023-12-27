import { Box, Container, Text, SimpleGrid, Divider } from "@chakra-ui/react"
import { Email } from "./Email"
import { Social } from "./Social"
import styles from "../styles/Contactme.module.css"

export const Contactme = () => {
  return (
    <Box className={styles.mainBox} id="contact">
    <Container maxW={"7xl"}>
        <Text className={styles.contact}>Contact me</Text>
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
