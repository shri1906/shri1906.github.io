// import React from 'react';
// import { Box, Flex, IconButton, Image, useBoolean } from "@chakra-ui/react";
// import { HashLink as Link } from "react-router-hash-link";
// import { HamburgerIcon,CloseIcon } from "@chakra-ui/icons";
// import styles from "../styles/Navbar.module.css";
// import logo from "../sources/logo.png";

// const links = [
//     {
//         to:"#",
//         label:"Home"
//     },
//     {
//         to:"#about",
//         label:"About"
//     },
//     {
//         to:"#skills",
//         label:"Skills"
//     },
//     {
//         to:"#projects",
//         label:"Projects"
//     },
//     {
//         to:"#github",
//         label:"GitHub"
//     },
//     {
//         to:"#contact",
//         label:"Contact"
//     },
// ];

// const Navbar = () => {
//     const [flag,setFlag] = useBoolean(false);
//   return (
//     <Box className={styles.main_navbar}>
//         <Box>
//             <Link to="#">
//                 <Image src={logo} width={"12rem"} height={"3.5rem"} ml={"1rem"} alt="Logo" />
//             </Link>
//         </Box>
//         <Box>
//             <Flex className={styles.nav_box2} display={{base:'none',md:'flex'}}>
//                 {links?.map((link)=>(
//                     <Link key={link.to} to={link.to} className={styles.nav_link} smooth>
//                         {link.label}
//                     </Link>
//                 ))}
//             </Flex>
//             <IconButton 
//                 bgColor={"#355e3b"}
//                 onClick={setFlag.on}
//                 display={{base:'block',md:'none'}}
//                 size={'lg'}
//                 fontSize={"1.5rem"}
//                 icon={<HamburgerIcon color={"whitesmoke"} />}>
//             </IconButton>
//         </Box>
//         {flag &&  <Box 
//         className={styles.hamburger_box}
//         display={{base:'block',md:'none'}}>
//         <Flex>
//           <Box pos='fixed' top='2rem' right='1rem'>
//             <IconButton 
//                 bgColor={"#355e3b"}
//                 onClick={setFlag.off}
//                 size={'lg'}
//                 icon={<CloseIcon  color={"whitesmoke"} />}>
//             </IconButton>
//           </Box>
//         </Flex>
//         <Flex 
//           align='center'
//           justify='center'
//           mt='3rem'>
//           <Flex direction={'column'} align='center' gap={'1rem'} fontSize={'1.3rem'}>
//             {links?.map((link)=>(
//               <Link key ={link.to} to={link.to} className={styles.nav_link} smooth>
//                 {link.label}
//               </Link>
//             ))}
//           </Flex>
//         </Flex>
//       </Box> 
//       }
//     </Box>
//   )
// }

// export default Navbar
import React from 'react';
import { Box, Flex, IconButton, Image, useBoolean } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/Navbar.module.css";
import logo from "../sources/logo.png";

const links = [
  {
    to: "#",
    label: "Home"
  },
  {
    to: "#about",
    label: "About"
  },
  {
    to: "#skills",
    label: "Skills"
  },
  {
    to: "#projects",
    label: "Projects"
  },
  {
    to: "#github",
    label: "GitHub"
  },
  {
    to: "#contact",
    label: "Contact"
  },
];

const Navbar = () => {
  const [flag, setFlag] = useBoolean(false);

  const handleNavLinkClick = (to) => {
    setFlag.off();
    setTimeout(() => {
      const element = document.getElementById(to.substring(1));
      if (element) {
        const offset = document.getElementById('NavbarId').offsetHeight;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <Box className={styles.main_navbar} id="NavbarId">
      <Box>
        <Link to="#">
          <Image src={logo} width={"12rem"} height={"3.5rem"} ml={"1rem"} alt="Logo" />
        </Link>
      </Box>
      <Box>
        <Flex className={styles.nav_box2} display={{ base: 'none', md: 'flex' }}>
          {links?.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={styles.nav_link}
              smooth
              onClick={() => handleNavLinkClick(link.to)}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        <IconButton
          bgColor={"#355e3b"}
          onClick={setFlag.on}
          display={{ base: 'block', md: 'none' }}
          size={'lg'}
          fontSize={"1.5rem"}
          icon={<HamburgerIcon color={"whitesmoke"} />}
        />
      </Box>
      {flag && <Box
        className={styles.hamburger_box}
        display={{ base: 'block', md: 'none' }}>
        <Flex>
          <Box pos='fixed' top='2rem' right='1rem'>
            <IconButton
              bgColor={"#355e3b"}
              onClick={setFlag.off}
              size={'lg'}
              icon={<CloseIcon color={"whitesmoke"} />}
            />
          </Box>
        </Flex>
        <Flex
          align='center'
          justify='center'
          mt='3rem'>
          <Flex direction={'column'} align='center' gap={'1rem'} fontSize={'1.3rem'}>
            {links?.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={styles.nav_link}
                smooth
                onClick={() => handleNavLinkClick(link.to)}
              >
                {link.label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Box>
      }
    </Box>
  );
}

export default Navbar;