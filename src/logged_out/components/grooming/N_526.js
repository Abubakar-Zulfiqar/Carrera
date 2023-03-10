import React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Container,
    Divider,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";

import ShareButton from "../../../shared/components/ShareButton";

import "../../../index.css";

const styles = (theme) => ({
    blogContentWrapper: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
        },
        maxWidth: 1280,
        width: "100%",
    },
    img: {
        width: "100%",
        height: "auto",
    },
    card: {
        boxShadow: theme.shadows[4],
    },
    btn: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
        },
    },
});

const N_526 = (props) => {
    const { classes } = props;

    return (
        <Container>
            <div className={classes.blogContentWrapper}>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{
                        top: "104px",
                        position: "fixed",
                        height: "54px",
                        width: "100%",
                        background: "#f8f8f8",
                        zIndex: 1000,
                    }}
                    direction="row"
                >
                    <Grid xs={4}>
                        <Typography variant="h6">Carrera Charging Base</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="body2" color="textSecondary">
                            Price: <b>£29.99</b> + shipping
                        </Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasWithBothOptions"
                            aria-controls="offcanvasWithBothOptions"
                        >
                            ADD TO CART
                        </Button>

                        <div
                            className="offcanvas offcanvas-end"
                            data-bs-scroll="true"
                            tabindex="-1"
                            id="offcanvasWithBothOptions"
                            aria-labelledby="offcanvasWithBothOptionsLabel"
                            style={{ marginTop: '4rem' }}
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                    Cart
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <p style={{ textAlign: 'center' }}>
                                    Your cart is empty.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Divider sx={{ margin: "1rem 0 1rem 0" }} />

                {/* Section 01 */}
                <Grid
                    container
                    spacing={5}
                    sx={{
                        marginTop: "15rem",
                        textAlign: "center",
                    }}
                >
                    <Grid container direction="row">
                        <Grid xs={12}>
                            <Typography
                                variant="h2"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#232323",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "80px",
                                    fontWeight: 700,
                                    lineHeight: "95px",
                                }}
                            >
                                CHARGING BASE №526
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "32px",
                                    fontWeight: 500,
                                    lineHeight: "40px",
                                    marginBottom: "1rem",
                                    marginTop: "1rem",
                                }}
                            >
                                One power charger for all Carrera grooming tools
                            </Typography>
                            <div
                                style={{
                                    display: "grid",
                                    justifyItems: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    pt={2}
                                    sx={{
                                        animationDuration: "3s",
                                        animationName: "fadeInUp",
                                        animationFillMode: "both",
                                    }}
                                >
                                    <Grid spacing={1} container>
                                        {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                                            (type, index) => (
                                                <Grid item key={index}>
                                                    <ShareButton
                                                        type={type}
                                                        title="CARRERA"
                                                        description="High-tech for you and your home"
                                                        disableElevation
                                                        variant="contained"
                                                        className="text-white"
                                                        classes={{
                                                            label: "text-white",
                                                        }}
                                                    />
                                                </Grid>
                                            )
                                        )}
                                    </Grid>
                                </Box>
                            </div>
                        </Grid>
                        <Grid xs={12} mt={3}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№526 01.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "3s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    height: "auto",
                                    maxWidth: "100%",
                                    width: "100%!important",
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 02 */}
                <div
                    id="carouselExampleRide"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                spacing={5}
                                sx={{
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    position: "relative",
                                    backgroundSize: "cover",
                                    overflow: "hidden",
                                    height: "40rem",
                                }}
                                className="background13"
                            >
                                <div className="carousel-caption slider-text-middle">
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        sx={{ textAlign: "left", marginLeft: "5rem" }}
                                    >
                                        <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                                            <Typography
                                                variant="h4"
                                                className="font-weight-600 alt-font"
                                                style={{
                                                    fontSize: "40px",
                                                    lineHeight: "46px",
                                                    marginTop: "-30rem",
                                                }}
                                            >
                                                <span className="text-white">Even the most</span>{" "}
                                                <span className="text-yellow">powerful tools</span>{" "}
                                                <span className="text-white">have to</span>{" "}
                                                <span className="text-white">
                                                    refuel from time to time.
                                                </span>{" "}
                                            </Typography>
                                            <br />
                                            <Typography
                                                variant="body1"
                                                className="font-weight-500 alt-font text-white"
                                                style={{ fontSize: "16px", lineHeight: "23px" }}
                                            >
                                                Carrera grooming tools are at their best when out on the
                                                job, the second best place to find them is displayed for
                                                all their glory in their elegant universal power
                                                charger. Just park your tool in the base for a full
                                                recharge or quick top-up, stand back and admire the
                                                supreme design feature now on show in your bathroom.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}></Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                        <div className="carousel-item">
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                spacing={5}
                                sx={{
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    position: "relative",
                                    backgroundSize: "cover",
                                    overflow: "hidden",
                                    height: "40rem",
                                }}
                                className="background14"
                            >
                                <div className="carousel-caption slider-text-middle">
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        sx={{ textAlign: "left", marginLeft: "5rem" }}
                                    >
                                        <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                                            <Typography
                                                variant="h4"
                                                className="font-weight-600 alt-font"
                                                style={{
                                                    fontSize: "40px",
                                                    lineHeight: "46px",
                                                    marginTop: "-30rem",
                                                }}
                                            >
                                                <span className="text-white">Even the most</span>{" "}
                                                <span className="text-yellow">powerful tools</span>{" "}
                                                <span className="text-white">have to</span>{" "}
                                                <span className="text-white">
                                                    refuel from time to time.
                                                </span>{" "}
                                            </Typography>
                                            <br />
                                            <Typography
                                                variant="body1"
                                                className="font-weight-500 alt-font text-white"
                                                style={{ fontSize: "16px", lineHeight: "23px" }}
                                            >
                                                Carrera grooming tools are at their best when out on the
                                                job, the second best place to find them is displayed for
                                                all their glory in their elegant universal power
                                                charger. Just park your tool in the base for a full
                                                recharge or quick top-up, stand back and admire the
                                                supreme design feature now on show in your bathroom.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}></Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                        <div className="carousel-item">
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                spacing={5}
                                sx={{
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    position: "relative",
                                    backgroundSize: "cover",
                                    overflow: "hidden",
                                    height: "40rem",
                                }}
                                className="background15"
                            >
                                <div className="carousel-caption slider-text-middle">
                                    <Grid
                                        container
                                        justify="center"
                                        alignItems="center"
                                        sx={{ textAlign: "left", marginLeft: "5rem" }}
                                    >
                                        <Grid item xs={6} sx={{ paddingRight: "40px" }}>
                                            <Typography
                                                variant="h4"
                                                className="font-weight-600 alt-font"
                                                style={{
                                                    fontSize: "40px",
                                                    lineHeight: "46px",
                                                    marginTop: "-30rem",
                                                }}
                                            >
                                                <span className="text-white">Even the most</span>{" "}
                                                <span className="text-yellow">powerful tools</span>{" "}
                                                <span className="text-white">have to</span>{" "}
                                                <span className="text-white">
                                                    refuel from time to time.
                                                </span>{" "}
                                            </Typography>
                                            <br />
                                            <Typography
                                                variant="body1"
                                                className="font-weight-500 alt-font text-white"
                                                style={{ fontSize: "16px", lineHeight: "23px" }}
                                            >
                                                Carrera grooming tools are at their best when out on the
                                                job, the second best place to find them is displayed for
                                                all their glory in their elegant universal power
                                                charger. Just park your tool in the base for a full
                                                recharge or quick top-up, stand back and admire the
                                                supreme design feature now on show in your bathroom.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}></Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleRide"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Section 03 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{
                        backgroundPosition: "100px 58.7016px",
                        backgroundRepeat: "no-repeat",
                        position: "relative",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        height: "50rem",
                        marginLeft: "2rem",
                    }}
                    className="background16"
                >
                    <Grid xs={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600,
                                fontSize: "40px",
                                lineHeight: "46px",
                                marginTop: "2rem",
                            }}
                        >
                            This device sucks. But in a good way.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "18px",
                                fontWeight: 300,
                                lineHeight: "26px",
                                marginBottom: "2rem",
                                marginTop: "2rem",
                            }}
                        >
                            If you're looking for stability, there's no budging the Carrera
                            power charger however hectic it gets in your bathroom. This
                            high-tech docking station not only looks super cool, it will
                            remain super stable due to it's innovative suction pad - simply
                            set it down and twist to lock it in place.
                        </Typography>
                        <Box
                            pt={2}
                            sx={{
                                animationDuration: "3s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                            }}
                        >
                            <Grid spacing={1} container>
                                {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                                    (type, index) => (
                                        <Grid item key={index}>
                                            <ShareButton
                                                type={type}
                                                title="CARRERA"
                                                description="High-tech for you and your home"
                                                disableElevation
                                                variant="contained"
                                                className="text-white"
                                                classes={{
                                                    label: "text-white",
                                                }}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                {/* Section 04 */}
                <Grid
                    container
                    sx={{
                        textAlign: "center",
                        marginTop: "10rem",
                        padding: "0 10rem 0 10rem",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h5">Even more cool features</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№526 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            USB Charging
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 5rem 0 5rem" }}
                        >
                            The universal Power Charger works with mains outlets, and also
                            with every USB power source that offers not more than 5V and
                            1000mAh - at home or on the road.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№526 08.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Flexible silicon insert
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 5rem 0 5rem" }}
                        >
                            A toothed silicon crown adapts perfectly to the back of every
                            Carrera grooming tool. It provides a firm hold that’s flexible
                            enough for all models.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 05 */}
                <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                <Grid
                    container
                    md={10}
                    sx={{
                        marginTop: "5rem",
                        margin: "5rem",
                    }}
                >
                    <Grid item xs={5}>
                        <Typography variant="h5">Product specs</Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{
                                animationDuration: "3s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontSize: "16px",
                                lineHeight: "43px",
                            }}
                        >
                            <ul className="p-0 list-style-3">
                                <li>Universal charging station</li>
                                <li>
                                    Compatible with these CARRERA grooming tools Shaver №421,
                                    Shaver №521, Hair clipper №622, Beard trimmer №623
                                </li>
                                <li>
                                    Flexible silicone input adapts easily to the size of each
                                    product
                                </li>
                                <li>Stable standing by easily fixable suction mechanism</li>
                                <li>USB cable</li>
                            </ul>
                        </Typography>
                        <Box
                            pt={2}
                            sx={{
                                animationDuration: "3s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                            }}
                        >
                            <Grid spacing={1} container>
                                {["Facebook", "Twitter", "LinkedIn", "E-Mail"].map(
                                    (type, index) => (
                                        <Grid item key={index}>
                                            <ShareButton
                                                type={type}
                                                title="CARRERA"
                                                description="High-tech for you and your home"
                                                disableElevation
                                                variant="contained"
                                                className="text-white"
                                                classes={{
                                                    label: "text-white",
                                                }}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ margin: "1rem 0 1rem 0" }} />
            </div>
        </Container>
    );
};

export default withStyles(styles, { withTheme: true })(N_526);
