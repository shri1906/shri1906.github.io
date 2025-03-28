import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "../styles/Projects.module.css";
import sephora from "../sources/sephora.PNG";
import timecamp from "../sources/time-camp.png";
import cors from "../sources/cors.PNG"
import ems from "../sources/ems.PNG"
import art from "../sources/art-gallery.PNG"
import ramit from "../sources/ramIT.PNG"

import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";

const Projects =()=>{
    const data = [
        {
            p_name: "CORS Registration Portal",
            details: "A Registration portal of user of Survey of India where users can buy subscriptions of real-time survey data.",
            techs: "Tech-stacks: HTML, CSS, JavaScript, PHP, MySql",
            type: "Collaborative Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 2 months",
            image: cors,
            project_link: "https://cors.surveyofindia.gov.in/",
            git_link: ""
        },
        {
            p_name: "Employee Management System",
            details: "A web application to manage employee data, including CRUD operations.", 
            techs: "Tech-stacks: ReactJs, ExpressJs, NodeJs, MongoDB, Tailwind CSS",
            type: "Individual Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 1 month",
            image: ems,
            project_link: "https://ems-shri1906.vercel.app/login",
            git_link: "https://github.com/shri1906/EMS-MERN"
        },
        {
            p_name: "Art Gallery",
            details: "An Art Gallery website to showcase various art pieces and their details.",
            techs: "Tech-stacks: ReactJs, Tailwind CSS",
            type: "Individual Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 1 week",
            image: art,
            project_link: "https://brush-and-beyond.vercel.app/",
            git_link: "https://github.com/shri1906/art-gallery"
        },
        {
            p_name: "IT Solution",
            details: "An IT Solution website to provide various IT services.",
            techs: "Tech-stacks: ReactJs, Bootstrap CSS",
            type: "Individual Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 1 week",
            image: ramit,
            project_link: "https://ram-it-solutions.vercel.app/",
            git_link: "https://github.com/shri1906/ram-it-solutions"
        },
        {
            p_name: "Sephora Clone",
            details: "Sephora is a global beuty chain that offers a wide range of classic and emerging brands.",
            techs: "Tech-stacks: ReactJs, CSS, Redux, Chakra UI, Firebase, MongoDB",
            type: "Group Project",
            responsibity: "Area of Responsibilty: Cart & Checkout Page",
            duration: "Duration: 05 days",
            image: sephora,
            project_link: "https://sephora-pink.vercel.app/",
            git_link: "https://github.com/Ankur982/dull-letter-5131"
        },
        {
            p_name: "TimeCamp Clone",
            details: "TimeCamp is a simple,feature-rich time tracking app to track tasks.",
            techs: "Tech-stacks: ReactJs, CSS, Redux, Chakra UI, Firebase",
            type: "Group Project",
            responsibity: "Area of Responsibilty: Dashboard Page",
            duration: "Duration: 05 days",
            image: timecamp,
            project_link: "https://timecampclone-cw.netlify.app/",
            git_link: "https://github.com/ssksds/Time-Camp-Clone"
        },   
    ]
    
    return(
        <Container maxW={'7xl'} className={styles.p_main} id="projects">
            <Text className={styles.header} size={"xl"}>Projects</Text>
            <Text className={styles.toptext}>Here are some interesting projects, in which I have contributed.</Text>
            <SimpleGrid m="0rem" columns={[1,null,2,3]} spacing={6} >
                {
                data.map((d,idx)=>(
                    <Box className={styles.p_box} key={idx}>
                        <Image className={styles.p_img} src={d.image} alt="p_img" />
                        <Text className={styles.project_title} size={"md"}>{d.p_name}</Text>
                        <Text className={styles.text}>{d.details}</Text>
                        <Text className={styles.text}>{d.techs}</Text>
                        <Text className={styles.text}>{d.type}</Text>
                        <Text className={styles.text}>{d.duration}</Text>
                        <Box p="1rem">
                            <a href={d.project_link} target="blank" rel="noreferrer"><button className={styles.btn}><FaExternalLinkAlt fontSize={"1.5rem"} /></button></a>
                            <a href={d.git_link} target="blank" rel="noreferrer"><button className={styles.btn}><FaGithub fontSize={"1.5rem"} /></button></a>
                        </Box>
                    </Box>
                ))}
                
            </SimpleGrid>
        </Container>
    )

}
export default Projects;