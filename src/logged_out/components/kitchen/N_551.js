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
import ZoomVideo from "../../../shared/components/ZoomVideo";

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
        textTranform: "uppercase",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "#ffffff",
        },
    },
    noDecoration: {
        textDecoration: "none !important",
    },
});

const N_551 = (props) => {
    const { classes } = props;

    return (
        <>
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
                    marginLeft: "0px",
                    textAlign: "center",
                }}
                direction="row"
            >
                <Grid xs={4}>
                    <Typography variant="h6">Carrera Steel Kettle</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" color="textSecondary">
                        Price: <b>£159.99</b> + shipping
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
                        class="offcanvas offcanvas-end"
                        data-bs-scroll="true"
                        tabindex="-1"
                        id="offcanvasWithBothOptions"
                        aria-labelledby="offcanvasWithBothOptionsLabel"
                        style={{ marginTop: '4rem' }}
                    >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                                Cart
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="offcanvas-body">
                            <p style={{ textAlign: 'center' }}>
                                Your cart is empty.
                            </p>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Divider sx={{ margin: "1rem 0 1rem 0" }} />

            {/* Section 01 */}
            <Container>
                <Grid container sx={{ marginTop: "15rem" }}>
                    <Grid
                        xs={6}
                        className="padding-five-right padding-60px-top text-lg-left"
                    >
                        <Typography
                            sx={{
                                animationDuration: "2s",
                                animationName: "fadeInDown",
                                animationFillMode: "both",
                            }}
                        >
                            <h1
                                className="font-weight-800 alt-font text-extra-dark-gray"
                                style={{
                                    fontSize: "70px",
                                    lineHeight: "70px",
                                }}
                            >
                                WATER KETTLE №551
                            </h1>
                        </Typography>
                        <Typography
                            sx={{
                                animationDuration: "2s",
                                animationName: "fadeInDown",
                                animationFillMode: "both",
                                marginBottom: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            <h5
                                className="text-dark-gray alt-font font-weight-500"
                                style={{
                                    fontSize: "32px",
                                    lineHeight: "40px",
                                    paddingRight: "8rem",
                                }}
                            >
                                The perfect temperature every time.
                            </h5>
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
                    <Grid xs={6}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 01.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "-5rem",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 02 */}
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    marginTop: "10rem",
                    backgroundPosition: "0px 39.7438px",
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    width: "auto",
                    height: "100vh",
                }}
                className="background18"
            >
                <div className="container" style={{ margin: "0 45rem 0 35rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">Subtle teas</span>{" "}
                            <span className="text-yellow">need a kettle</span>{" "}
                            <span className="text-white">that cares.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            With its variable temperature settings, the Carrera electric
                            kettle is a perfect choice for the discerning tea lover. Simply
                            choose your preferred temperature at the press of a button to
                            select 100, 90, 80, 60 or 40 degrees Celsius and enjoy a delicate
                            cup of your favourite tea.
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 03 */}
            <Grid
                container
                className="padding-40px-tb bg-extra-dark-gray action-section"
            >
                <Grid item xs={12}>
                    <div className="justify-content-center">
                        <div className="position-relative text-center">
                            <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                                HIGH-TECH FOR YOUR TEA
                            </span>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* Section 04 */}
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
                    width: "auto",
                    height: "100vh",
                }}
                className="background19"
            >
                <div className="container" style={{ margin: "0 20rem 0 20rem" }}>
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{
                                fontSize: "70px",
                                lineHeight: "70px",
                                animationDuration: "2s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                            }}
                        >
                            <span className="text-white">As sensitive as</span>{" "}
                            <span className="text-yellow">a baby,</span>{" "}
                            <span className="text-white">in every degree.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{
                                fontSize: "16px",
                                lineHeight: "23px",
                                animationDuration: "2s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                            }}
                        >
                            The Carrera kettle doesn't just reach the preset temperature fast
                            – it holds it for a long time after, maintaining the selected
                            temperature, keeping it faithful to a single degree. And when it
                            comes to caring for baby, every degree counts, so the
                            ultra-sensitive sensor never takes its eye off the temperature for
                            a full thirty minutes.
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 05 */}
            <Container>
                <Grid container sx={{ marginTop: "15rem" }}>
                    <Grid
                        xs={6}
                        className="padding-five-right padding-60px-top text-lg-left"
                    >
                        <Typography
                            sx={{
                                animationDuration: "2s",
                                animationName: "fadeInDown",
                                animationFillMode: "both",
                            }}
                        >
                            <h3
                                className="font-weight-600 alt-font text-extra-dark-gray"
                                style={{
                                    fontSize: "50px",
                                    lineHeight: "50px",
                                }}
                            >
                                Stainless steel Vs glass kettle
                            </h3>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#626262",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "18px",
                                fontWeight: 300,
                                lineHeight: "26px",
                                marginBottom: "3rem",
                                marginTop: "3rem",
                            }}
                        >
                            When it comes to features, both of the Carrera electric kettles
                            are nearly identical. They both have a powerful 2200 Watt rating,
                            multiple temperature select, a taste-neutral 1.7L thermal jug and
                            a full 30 minute simmer setting. The only real difference between
                            the two comes from their looks - stainless steel for those who
                            like more industrial style and glass for those who like to watch
                            the water boil.
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
                    <Grid xs={6}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 04.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "-5rem",
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Section 06 */}
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
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 05.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            LED-lit buttons
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            With love for our elegant smart phones, fingers now expect the
                            same feeling when they interact with a kettle too. The quality LED
                            buttons are touch-sensitive – no need to press.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 06.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Push-button opening
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            The lid opens a full 90 degrees for easy access cleaning. And
                            slowly, to stop hot condensed water from splashing.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            2200 W power
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            Carrera chose that rating carefully. On the one hand, it boils 1.7
                            litres of water in just few seconds. On the other, it won’t blow a
                            fuse every time you use it in older kitchens.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 07 */}
                <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                <Grid
                    container
                    md={10}
                    sx={{
                        textAlign: "center",
                        alignItems: "center",
                        marginTop: "5rem",
                    }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            You're good to go, straight out of the box
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ margin: "5rem" }}>
                        <ZoomVideo
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№551 08.jpg`}
                            alt=""
                        />
                    </Grid>
                </Grid>

                {/* Section 08 */}
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
                            <ul class="p-0 list-style-3">
                                <li>2,200 Watt Power</li>
                                <li>
                                    Push-button temperature setting (40°/ 60°/ 80°/ 90°/ boiling /
                                    temp control) – perfect for baby food or delicate green tea
                                </li>
                                <li>Illuminated LED buttons</li>
                                <li>
                                    Stainless steel housing for natural, unadulterated taste
                                </li>
                                <li>BPA free</li>
                                <li>Capacity 1.7 l</li>
                                <li>Temp control for 30 minutes</li>
                                <li>Push-button lid opens 90° for easy cleaning</li>
                                <li>
                                    360° swivel base and water level indicator on both sides for
                                    right-handed and left-handed users
                                </li>
                                <li>Concealed heating element</li>
                                <li>Detachable lime-scale filter</li>
                                <li>Overheat safety protection</li>
                                <li>Boil dry protection</li>
                                <li>
                                    Auto shut-off after 30 minutes temp control, or when lifted
                                    off base
                                </li>
                                <li>Anti-slip feet</li>
                                <li>Precision spout for non-drip pouring</li>
                                <li>Integrated cable coil in base</li>
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
            </Container>
        </>
    );
};

export default withStyles(styles, { withTheme: true })(N_551);
