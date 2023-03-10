import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/system";
import withStyles from "@mui/styles/withStyles";
import { Typography, Card, Grid } from "@mui/material";

const styles = (theme) => ({
    img: {
        width: "100%",
        maxWidth: 400,
        height: "auto",
        marginBottom: 8,
        transition: "all 500ms ease-in-out",
        cursor: "pointer",
    },
    card: {
        boxShadow: theme.shadows[2],
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

const Grooming = (props) => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
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
                            Grooming <span className="text-yellow">_</span>
                        </Typography>
                        <Typography className="text-small font-weight-700 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top ">
                            all Carrera grooming tools
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInDown",
                                animationFillMode: "both",
                                color: "#232323",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "30px",
                                lineHeight: "30px",
                                margin: "1rem 15rem 1rem 15rem"
                            }}
                        >
                            <h6 className="font-weight-300 text-extra-dark-gray">
                                Carrera make tools that{" "}
                                <strong className="font-weight-600">deal with unwanted hair</strong>{" "}
                                on any part of your body. For{" "}
                                <strong className="font-weight-600">supersmooth skin,</strong> or to{" "}
                                <strong className="font-weight-600">keep hair in check.</strong> Not
                                designed for just men or just women but{" "}
                                <strong className="font-weight-600">made for everyone</strong> that
                                demands performance, utility and aesthetics, however they
                                identify.
                            </h6>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={5}
                sx={{
                    marginTop: "5rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.5rem",
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
                    <Link to="/carrera-shaver-521">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 01.jpg`}
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
                                    <span className="font-weight-600">№</span>521
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
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "2s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <Link to="/carrera-shaver-421">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 02.jpg`}
                            className={classes.img}
                            alt=""
                        />
                        {isHovered2 && (
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
                                    <span className="font-weight-600">№</span>421
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
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "2s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}
                >
                    <Link to="/carrera-trimmer-623">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 03.jpg`}
                            className={classes.img}
                            alt=""
                        />
                        {isHovered3 && (
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
                                    <span className="font-weight-600">№</span>623
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
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "4s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered4(true)}
                    onMouseLeave={() => setIsHovered4(false)}
                >
                    <Link to="/carrera-cosmetic-trimmer-524">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 04.jpg`}
                            className={classes.img}
                            alt=""
                        />
                        {isHovered4 && (
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
                                    <span className="font-weight-600">№</span>524
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
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "4s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered5(true)}
                    onMouseLeave={() => setIsHovered5(false)}
                >
                    <Link to="/carrera-hair-clipper-622">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 05.jpg`}
                            className={classes.img}
                            alt=""
                        />
                        {isHovered5 && (
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
                                    <span className="font-weight-600">№</span>622
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
                <Card
                    style={{
                        position: "relative",
                        animationDuration: "4s",
                        animationName: "fadeInUp",
                        animationFillMode: "both",
                    }}
                    onMouseEnter={() => setIsHovered6(true)}
                    onMouseLeave={() => setIsHovered6(false)}
                >
                    <Link to="/carrera-charging-base-526">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/grooming 06.jpg`}
                            className={classes.img}
                            alt=""
                            style={{ alignContent: "center", justifyContent: "center" }}
                        />
                        {isHovered6 && (
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
                                    <span className="font-weight-600">№</span>526
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

export default withStyles(styles, { withTheme: true })(Grooming);
