import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Input, Text } from '@chakra-ui/react';
import styles from "../styles/Email.module.css";


export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(
        'service_81lqksr',
        'template_ggv390v',
        form.current, 
        'p4F-g1ScE3LCTgfLp')
        .then((result) => {
            console.log(result.text);
            alert("mail sent!");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Box className={styles.formMain}>
        <form ref={form} onSubmit={sendEmail}>
            <Box className={styles.formBox}>
                <Text className={styles.label}>Name:</Text>
                <input bg='white' className={styles.input} width={"auto"} type="text" name={"user_name"} />
            </Box>
            <Box className={styles.formBox}>
                <Text className={styles.label}>Email:</Text>
                <input bg='white' className={styles.input} width={"auto"} type="email" name={"user_email"} />
            </Box>
            <Box className={styles.formBox}>
                <Text className={styles.label}>Message:</Text>
                <textarea bg='white' width={"auto"} name={"message"} className={styles.textArea} />
            </Box>
            <br />
            <Input className={styles.btn} width={"auto"} type="submit" value="Send Mail" />
        </form>
    </Box>
  )
}
