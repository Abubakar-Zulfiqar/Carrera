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

const N_552 = (props) => {
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
                    <Typography variant="h6">Carrera Toaster</Typography>
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
                                TOASTER №552
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
                                High tech for your toast.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 01.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
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
                className="background22"
            >
                <div className="container" style={{ margin: "0 60rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">Quartz ceramic toast anyone?</span>{" "}
                            <span className="text-yellow">Oh yes please!</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            Quartz ceramic elements consistently toast evenly every slice and
                            they will never overheat and fail. Quartz ceramic technology is
                            long lasting, energy efficient and does not give off harmful
                            formaldehyde fumes.
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
                                HIGH-TECH FOR YOUR TOAST
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
                className="background23"
            >
                <div className="container">
                    <Grid item xs={12} paddingRight="15rem">
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
                            <span className="text-yellow">High tech toast:</span>{" "}
                            <span className="text-white">
                                quartz ceramic heating elements.
                            </span>
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
                            Most cheap toasters have outdated wire heating elements. Quartz
                            ceramic heating elements are the modern alternative; they emit no
                            formaldehyde, use less electricity, toast more evenly and are easy
                            to clean.
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
                                Quartz toasters make everything wonderfully crisp
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
                            Your bread is automatically centred by the four glass-coated
                            quartz ceramic heating elements. The mirror finish chambers
                            reflect the heat evenly for perfect toasting. Even during toasting
                            marathons you'll get consistent results, slice after slice.
                            Whether you're toasting bread, rolls, pitas or paninis, you'll get
                            perfect results every time from either fresh or frozen. And with
                            no exposed hot electrical wires a quartz ceramic toaster is a lot
                            safer to use.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 04.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                maxWidth: "none",
                                height: "auto",
                                overflow: "hidden",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 06 */}
            <div
                className="bg-extra-dark-gray w-100"
                style={{ padding: "100px 0", overflow: "hidden" }}
            >
                <Container>
                    <Grid container>
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 05.jpg`}
                                alt=""
                                className="rounded-circle border-color-yellow border-width-7 border-all zoom-in"
                                style={{
                                    width: "70%",
                                    height: "auto",
                                    verticalAlign: "middle",
                                }}
                            />
                        </Grid>
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
                                    className="font-weight-600 alt-font text-yellow"
                                    style={{
                                        fontSize: "40px",
                                        lineHeight: "46px",
                                    }}
                                >
                                    The perfect tan for every slice
                                </h3>
                            </Typography>
                            <Typography
                                variant="body1"
                                className="text-white"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 300,
                                    lineHeight: "26px",
                                    marginBottom: "3rem",
                                    marginTop: "3rem",
                                }}
                            >
                                When it comes to dark or pale toast, everyone has their own
                                personal preferences. The digital control unit has 9 precision
                                settings for the perfect shade, slice after slice. The practical
                                memory feature lets you store your favourite settings easily,
                                and the visual countdown means that you are in total control of
                                your toast's tan.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* Section 07 */}
            <Container>
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 06.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 07.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 08.jpg`}
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

                {/* Section 08 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№552 09.jpg`}
                            alt=""
                        />
                    </Grid>
                </Grid>

                {/* Section 09 */}
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
                                <li>
                                    4 glass-coated quartz ceramic heating elements for even
                                    browning
                                </li>
                                <li>
                                    Digital control unit with 9 shade settings and visual
                                    countdown
                                </li>
                                <li>Stores your preferred toast settings</li>
                                <li>Integrated, dial-operated bun warming rack</li>
                                <li>Zero watt consumption in Eco standby mode</li>
                                <li>
                                    Insulated casing and mirror-finish slots for higher efficiency
                                </li>
                                <li>Reheat function for cold toast</li>
                                <li>Produces no formaldehyde</li>
                                <li>Defrost button with booster for crispier results</li>
                                <li>Toast lift makes even small slices easy to remove</li>
                                <li>Centres bread automatically</li>
                                <li>Crumb tray</li>
                                <li>Cable bay for easy storage</li>
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

export default withStyles(styles, { withTheme: true })(N_552);
