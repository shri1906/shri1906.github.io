import { Box, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "../styles/Projects.module.css";
import jcrew from "../sources/Jcrew.PNG";
import kimaye from "../sources/kimaye.PNG";
import sephora from "../sources/sephora.PNG";
import fundamental from "../sources/fundamental.PNG";
import timecamp from "../sources/time-camp.png";
import weather from "../sources/weather.PNG";
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";

const Projects =()=>{
    const data = [
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
        {
            p_name: "JCrew Clone",
            details: "An E-commerce website for clothings, footwears and accessories.",
            techs: "Tech-stacks: HTML, CSS, JavaScript",
            type: "Group Project",
            responsibity: "Area of Responsibilty: Signin & Signup Page",
            duration: "Duration: 05 days",
            image: jcrew,
            project_link: "https://jcrew-clone-0626.netlify.app",
            git_link: "https://github.com/Raghav435/J.Crew_Clone"
        },
        {
            p_name: "Fundamental.in Clone",
            details: "An E-commerce website for electronics and gadgets.",
            techs: "Tech-stacks: HTML, CSS, JavaScript",
            type: "Group Project",
            responsibity: "Area of Responsibilty: Products Page",
            duration: "Duration: 05 days",
            image: fundamental,
            project_link: "https://fundamnetal-in.netlify.app/",
            git_link: "https://github.com/VishalBhuse/Fundamental.in"
        },
        {
            p_name: "Weather-app",
            details: "This website can be use for fetch real-time weather information.",
            techs: "Tech-stacks: ReactJs, Tailwind CSS",
            type: "Individaul Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 03 days",
            image: weather,
            project_link: "https://weather-app-drab-omega-45.vercel.app/",
            git_link: "https://github.com/shivam0626/weather-app"
        },
        {
            p_name: "Kimaye.com Clone",
            details: "A Grocery website where fresh fruits are available.",
            techs: "Tech-stacks: HTML, CSS, JavaScript",
            type: "Individaul Project",
            responsibity: "Area of Responsibilty: All functionalities",
            duration: "Duration: 05 days",
            image: kimaye,
            project_link: "https://shivam0626.github.io/Kimaye.com-Clone/",
            git_link: "https://github.com/shivam0626/Kimaye.com-Clone"
        },
    ]
    
    return(
        <Container maxW={'7xl'} className={styles.p_main} id="projects">
            <Text className={styles.header} size={"xl"}>PROJECTS</Text>
            <Text className={styles.toptext}>Here are some interesting projects, in which I have contributed.</Text>
            <SimpleGrid m="0rem" columns={[1,null,2,3]} spacing={6} >
                {
                data.map((d)=>(
                    <Box className={styles.p_box}>
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