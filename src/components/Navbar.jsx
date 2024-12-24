// export default Navbar
import React from 'react';
import { Box, Flex, FormLabel, Icon, IconButton, Image, Switch, useBoolean, useColorMode } from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../styles/Navbar.module.css";
import logo from "../sources/logo.png";
import { FaMoon, FaSun } from 'react-icons/fa';

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
  const {colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

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
//
  return (
    <Box className={colorMode === 'light' ? styles.main_navbar1 : styles.main_navbar2 } id="NavbarId">
      <Box>
        <Link to="#">
          <Image src={logo} width={"12rem"} height={"3.5rem"} ml={"1rem"} alt="Logo" />
        </Link>
      </Box>
      <Box>
        <Flex className={styles.nav_box2} display={{ base: 'none', md: 'none', lg:'flex' }}>
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
            <Switch
              isChecked={colorMode === 'dark'}
              onChange={handleToggle}
              colorScheme='red'
            >
            <Icon as={colorMode === 'dark' ? FaMoon : FaSun} boxSize={5} />
            </Switch>
        </Flex>
        <IconButton
          onClick={setFlag.on}
          bg={colorMode === 'light' ? "#447a4c" : "#091f26"}
          display={{ base: 'block', md: 'block',lg:'none' }}
          size={'lg'}
          fontSize={"1.5rem"}
          icon={<HamburgerIcon color={"whitesmoke"} />}
        />
      </Box>
      {flag && <Box
         className={colorMode === 'light' ? styles.hamburger_box1 : styles.hamburger_box2 }
        display={{ base: 'block', md: 'block',lg:'none' }}>
        <Flex>
          <Box pos='fixed' top='2rem' right='1rem'>
            <IconButton
              bg={colorMode === 'light' ? "#447a4c" : "#091f26"}
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
            <Flex>
              <FormLabel  mt='2'>
                Change Theme:
              </FormLabel>
              <Switch
                isChecked={colorMode === 'dark'}
                onChange={handleToggle}
              >
              <Icon as={colorMode === 'dark' ? FaMoon : FaSun} boxSize={5} />
              </Switch>
            </Flex>
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
