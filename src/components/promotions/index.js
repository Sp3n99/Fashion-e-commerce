import { Box, Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";


const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "You have 30 days to live :)"
];

export default function Promotions(){
    const containerRef = useRef();
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(()=>{
        
        setTimeout(()=>{
            setShow(false);
        }, 3000);

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length);
            setShow(true);

            setTimeout(()=>{
                setShow(false);
            }, 3000);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return(
        <PromotionsContainer ref={containerRef}>
            <Box display={"flex"} justifyContent="center" alignItems="center">
                <Slide
                    container={containerRef.current}
                    direction={show? "left" : "right"}
                    in={show}
                    timeout={{
                        enter: 500,
                        exit: 100
                    }}
                >
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Slide>
            </Box>
        </PromotionsContainer>
    );
}