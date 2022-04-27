import { Card, CardContent, Grid, IconButton, Stack, Typography, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import "./FlashCard.css";
const FlashCardPlayer = ({ cards, card, setCard }) => {
    const [showQuestion, setShowQuestion] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            console.log("Time out question changed");
            if (card < cards.length) { setCard(card + 1); }
            else {
                setCard(0);
            }
        }, 30000);
    }, [card]);

    return (
        <>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={(theme) => ({
                        [theme.breakpoints.up('xs')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('sm')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('md')]: {
                            height: "500px"
                        },
                        [theme.breakpoints.up('lg')]: {
                            height: "700px"
                        },
                        [theme.breakpoints.up('xl')]: {
                            height: "700px"
                        }
                    })}
                >
                    <IconButton size="large" onClick={() => { setCard(card - 1); setShowQuestion(true); }} disabled={card == 0 ? true : false}>
                        <ChevronLeft fontSize="large" />
                    </IconButton>
                </Stack>
            </Grid>
            <Grid item xs={10}>
                {showQuestion && (<Fade in={showQuestion}>
                    <Card raised onClick={() => setShowQuestion(!showQuestion)} sx={(theme) => ({
                        borerRadius: "25px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.up('xs')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('sm')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('md')]: {
                            height: "500px"
                        },
                        [theme.breakpoints.up('lg')]: {
                            height: "700px"
                        },
                        [theme.breakpoints.up('xl')]: {
                            height: "700px"
                        }
                    })}>
                        <CardContent>
                            <Typography variant="h3">{showQuestion && cards[card].question}</Typography>
                        </CardContent>
                    </Card>
                </Fade>)}
                {!showQuestion && (<Fade in={!showQuestion}>
                    <Card raised onClick={() => setShowQuestion(!showQuestion)} sx={(theme) => ({
                        borerRadius: "25px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        [theme.breakpoints.up('xs')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('sm')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('md')]: {
                            height: "500px"
                        },
                        [theme.breakpoints.up('lg')]: {
                            height: "700px"
                        },
                        [theme.breakpoints.up('xl')]: {
                            height: "700px"
                        }
                    })}>
                        <CardContent>
                            <Typography variant="h3">{!showQuestion && cards[card].answer}</Typography>
                        </CardContent>
                    </Card>
                </Fade>)}
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={(theme) => ({
                        [theme.breakpoints.up('xs')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('sm')]: {
                            height: "300px"
                        },
                        [theme.breakpoints.up('md')]: {
                            height: "500px"
                        },
                        [theme.breakpoints.up('lg')]: {
                            height: "700px"
                        },
                        [theme.breakpoints.up('xl')]: {
                            height: "700px"
                        }
                    })}
                >
                    <IconButton size="large" onClick={() => { setCard(card + 1); setShowQuestion(true); }} disabled={card == cards.length - 1 ? true : false}>
                        <ChevronRight fontSize="large" />
                    </IconButton>
                </Stack>
            </Grid></>);
}

export default FlashCardPlayer;