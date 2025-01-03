import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box,  Text, Spinner } from "@chakra-ui/react";
import styles from "../styles/Email.module.css";

export const Email = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Email Sent Successfully!");
          setLoading(false); 
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Error in sending Email!");
          setLoading(false);
        }
      );
  };

  return (
    <Box className={styles.formMain}>
      <form ref={form} onSubmit={sendEmail}>
        <Box className={styles.formBox}>
          <Text className={styles.label}>Name:</Text>
          <input
            className={styles.input}
            type="text"
            name={"user_name"}
            required
          />
        </Box>
        <Box className={styles.formBox}>
          <Text className={styles.label}>Email:</Text>
          <input
            className={styles.input}
            type="email"
            name={"user_email"}
            required
          />
        </Box>
        <Box className={styles.formBox}>
          <Text className={styles.label}>Message:</Text>
          <textarea
            name={"message"}
            className={styles.textArea}
            required
          />
        </Box>
        <br />
        <button
          className={styles.btn}
          type="submit"
          isDisabled={loading} 
          width={"auto"}
        >
          {loading ? (
            <>
              <Spinner size="sm" marginRight="8px" /> Sending...
            </>
          ) : (
            "Send Mail"
          )}
        </button>
      </form>
      {status && (
        <Text mt={1} color={'whitesmoke'}>
          {status}
        </Text>
      )}
    </Box>
  );
};
