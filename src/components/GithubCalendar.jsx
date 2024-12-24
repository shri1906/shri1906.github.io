import { Box, Text, Image, SimpleGrid, Container} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import styles from "../styles/GithubCalendar.module.css"

const GithubCalendar =()=>{
    // const selectLastHalfYear = contributions => {
    //     const currentYear = new Date().getFullYear();
    //     const currentMonth = new Date().getMonth();
    //     const shownMonths = 9;
      
    //     return contributions.filter(day => {
    //       const date = new Date(day.date);
    //       const monthOfDay = date.getMonth();
      
    //       return (
    //         date.getFullYear() === currentYear &&
    //         monthOfDay > currentMonth - shownMonths &&
    //         monthOfDay <= currentMonth
    //       );
    //     });
    //   };
    return (
    <Container maxW={'7xl'} className={styles.githubMain} id="github"  >
        <Text className={styles.para}>GitHub Calendar</Text>
        <Box className={styles.mainBox} ml={[null,null,null,'2rem']}>
            <GitHubCalendar 
                username="shri1906" 
                // transformData={selectLastHalfYear}
                blockSize={16}
                fontSize={16}
                showWeekdayLabels
                color={"green"} 
            >
            <Tooltip delayShow={20} />
            </GitHubCalendar>
        </Box> 
        <Box>
            <SimpleGrid columns={[1,null,2,2]} spacing={12} ml={[null,null,null,'3rem']} className={styles.stats}>
                <Image src="https://github-readme-streak-stats.herokuapp.com/?user=shri1906&" alt="shri1906" className={styles.statsImg} />
                <Image  src="https://github-readme-stats.vercel.app/api?username=shri1906&show_icons=true&locale=en" alt="shri1906" className={styles.statsImg} />
            </SimpleGrid>
        </Box>
    </Container>
    )
}

export default GithubCalendar;
