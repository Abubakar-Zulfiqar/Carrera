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

const Kitchen = (props) => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [isHovered6, setIsHovered6] = useState(false);
    const { classes } = props;

    return (
        <>
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    backgroundPosition: "0px 58.7016px",
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    height: "25rem",
                    marginTop: "4rem",
                }}
                className="background17"
            >
                <Grid xs={12} className="text-white-2" sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h2"
                        sx={{
                            animationDuration: "2s",
                            animationName: "fadeInLeft",
                            animationFillMode: "both",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "80px",
                            fontWeight: 700,
                            lineHeight: "95px",
                        }}
                    >
                        Kitchen <span className="text-yellow">_</span>
                    </Typography>
                    <Typography
                        sx={{
                            animationDuration: "2s",
                            animationName: "fadeInRight",
                            animationFillMode: "both",
                        }}
                        className="text-small font-weight-700 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top "
                    >
                        ALL CARRERA KITCHEN TOOLS
                    </Typography>
                </Grid>
            </Grid>

            <Container>
                <Grid
                    container
                    spacing={5}
                    sx={{
                        marginTop: '8rem',
                        textAlign: "center",
                    }}
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#232323",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "30px",
                                    lineHeight: "30px",
                                    margin: "1rem 15rem 1rem 15rem",
                                }}
                            >
                                <h5 class="font-weight-300 text-extra-dark-gray">
                                    More goodness on your plate, less mess in the kitchen... These
                                    Carrera{" "}
                                    <strong class="font-weight-600">kitchen athletes</strong>{" "}
                                    deliver{" "}
                                    <strong class="font-weight-600">
                                        outstanding performance
                                    </strong>{" "}
                                    across a wide range of disciplines.
                                </h5>
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
                        <Link to="/carrera-glass-water-kettle-651">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 02.jpg`}
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
                                        <span className="font-weight-600">№</span>651
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
                        <Link to="/carrera-stand-mixer-657">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 03.jpg`}
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
                                        <span className="font-weight-600">№</span>657
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
                        <Link to="/carrera-toaster-552">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 04.jpg`}
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
                                        <span className="font-weight-600">№</span>552
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
                        <Link to="/carrera-water-kettle-551">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 05.jpg`}
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
                                        <span className="font-weight-600">№</span>551
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
                        <Link to="/carrera-stick-blender-554">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 06.jpg`}
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
                                        <span className="font-weight-600">№</span>554
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
                        <Link to="/carrera-hand-mixer-555">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 07.jpg`}
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
                                        <span className="font-weight-600">№</span>555
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
                            animationDuration: "5s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                        }}
                        onMouseEnter={() => setIsHovered6(true)}
                        onMouseLeave={() => setIsHovered6(false)}
                    >
                        <Link to="/carrera-blender-655">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/kitchen 08.jpg`}
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
                                        <span className="font-weight-600">№</span>655
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
        </>
    );
};

export default withStyles(styles, { withTheme: true })(Kitchen);
