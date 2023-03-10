import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import withStyles from "@mui/styles/withStyles";
import { Typography, Card, Grid } from "@mui/material";

const styles = (theme) => ({
    img: {
        width: "70%",
        maxWidth: 400,
        height: "auto",
        marginBottom: 8,
        transition: "all 500ms ease-in-out",
        cursor: "pointer",
    },
    noDecoration: {
        textDecoration: "none !important",
    },
    title: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        cursor: "pointer",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.secondary.dark,
        },
        "&:active": {
            color: theme.palette.primary.dark,
        },
    },
    link: {
        transition: theme.transitions.create(["background-color"], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        cursor: "pointer",
        color: theme.palette.primary.main,
        "&:hover": {
            color: theme.palette.primary.dark,
        },
    },
    showFocus: {
        "&:focus span": {
            color: theme.palette.secondary.dark,
        },
    },
});

const Beauty = (props) => {
    const [isHovered1, setIsHovered1] = useState(false);
    const { classes } = props;

    return (
        <Container>
            <Grid
                container
                spacing={5}
                sx={{
                    marginTop: "15rem",
                    textAlign: "center",
                }}
            >
                <Grid container>
                    <Grid xs={12}>
                        <Typography
                            variant="h2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInDown",
                                animationFillMode: "both",
                                color: "#232323",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "80px",
                                fontWeight: 700,
                                lineHeight: "95px",
                            }}
                        >
                            BEAUTY
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                xs={12}
                sx={{
                    marginTop: "5rem",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "2s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                >
                    <Link to="/carrera-facial-cleansing-brush-571">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/beauty 01.jpg`}
                            className={classes.img}
                            alt=""
                        />
                        {isHovered1 && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: "white",
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                data-aos="zoom-in-up"
                                data-aos-delay="100"
                            >
                                <Typography className="alt-font title-large font-weight-800 text-extra-dark-gray">
                                    <span className="font-weight-600">№</span>571
                                </Typography>
                                <Typography className="text-dark-gray alt-font font-weight-600 text-small">
                                    <span
                                        style={{
                                            backgroundColor: "#fff871",
                                            color: "black",
                                            padding: "0.2em",
                                        }}
                                    >
                                        more about this product
                                    </span>
                                </Typography>
                            </div>
                        )}
                    </Link>
                </Card>
            </Grid>
        </Container>
    );
};

export default withStyles(styles, { withTheme: true })(Beauty);
