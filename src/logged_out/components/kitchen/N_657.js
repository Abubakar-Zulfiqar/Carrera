import React, { useEffect, useState } from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Container,
    Divider,
    Card,
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

const N_657 = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const onScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const { classes, theme } = props;

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
                    <Typography variant="h6">Carrera Stand Mixer</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" color="textSecondary">
                        Price: <b>£399.99</b> + shipping
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
                            <h2
                                className="font-weight-800 alt-font text-extra-dark-gray"
                                style={{
                                    fontSize: "55px",
                                    lineHeight: "60px",
                                }}
                            >
                                STAND MIXER №657
                            </h2>
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
                                The power of culinary love
                            </h5>
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
                            Everyone loves the smell of freshly baked bread, especially when
                            it's homemade - and if you love to bake, you'll love the power of
                            the Carrera stand mixer - it's your must have ingredient in the
                            pursuit of creative, culinary love, allowing you to create your
                            very own recipe for freshly baked happiness.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 01.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "5rem",
                                width: "90%",
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
                    zIndex: 100,
                }}
                className="background28"
            >
                <div className="container">
                    <Grid item xs={6} marginLeft="-5rem">
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">Stirs the heart</span>
                            <br />
                            <span className="text-yellow">and kneads the dough.</span>
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 03 */}
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    marginTop={10}
                    marginBottom={10}
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
                            Mix like a boss
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
                                marginRight: "10rem",
                            }}
                        >
                            The Carrera stand mixer sports one of the most powerful motors for
                            its class plus a high quality planetary drive. This combination
                            can easily power through as much as 1.5 Kg of thick dough creating
                            a consistent oven ready mix every time. And like a stealthy tiger,
                            your Carrera mixer unleashes its supreme power quietly and
                            smoothly giving you 800 Watts of planetary prowess at the flick of
                            a switch. When it comes to cooking you're the boss… time to start
                            mixing like one.
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 03.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "5rem",
                                width: "70%",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 04 */}
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "110vh",
                    zIndex: 0,
                }}
                className="background29"
            >
                <div
                    className="container"
                    style={{ display: "flex", flexDirection: "column", height: "100vh" }}
                >
                    <Grid container style={{ flex: 1 }}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h1"
                                textAlign="center"
                                className="font-weight-700 alt-font margin-20px-bottom"
                                style={{ fontSize: "55px", lineHeight: "60px" }}
                            >
                                <span className="text-white">Clear & simple.</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                style={{ alignSelf: "center", margin: "0 15rem" }}
                                className="font-weight-500 alt-font text-medium"
                            >
                                <span className="text-white">
                                    Forget complicated hard to understand manuals - the Carrera
                                    stand mixer has clear and simple, intuitive controls that make
                                    it extremely easy to use. With a digital dial and an
                                    integrated LED display that gives you fingertip control over
                                    selecting the right settings for this powerful kitchen
                                    partner, it even lets you know which attachments are best for
                                    any of its 8 speeds.
                                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            {/* Section 05 */}
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    background: theme.palette.secondary.main,
                }}
            >
                <Grid item xs={12} direction="column" textAlign="center">
                    <Typography
                        variant="h4"
                        sx={{
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            color: "#232323",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: "40px",
                            fontWeight: 600,
                            lineHeight: "66px",
                            marginTop: "5rem",
                        }}
                    >
                        The highest safety features. Built in.
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            animationDuration: "1s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            color: "#232323",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "14px",
                            fontWeight: 300,
                            lineHeight: "20px",
                            margin: "0 120px 0 120px",
                        }}
                    >
                        The Carrera stand mixer not only performs well at all its tasks but
                        also has you covered with a host of well configured safety features.
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={3}>
                        <ul style={{ margin: "0 0 0 10px", listStyle: "none" }}>
                            <li data-aos="zoom-in-up">
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Front drive with auto-stop sensor</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                                <Typography variant="body1" color="textSecondary">
                                    A special sensor keeps you safe if you get too creative. The
                                    motor stops immediately if you remove an attachment during
                                    operation.
                                </Typography>
                            </li>
                            <li
                                style={{ marginTop: "5rem" }}
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                            >
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Auto stop</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                                <Typography variant="body1" color="textSecondary">
                                    Safety first: Your food processor stops the moment you raise
                                    the stirring arm or do anything else unusual.
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <figure>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 05.jpg`}
                            alt=""
                            style={{
                                animationDuration: "2s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                height: "auto",
                                width: "35rem",
                            }}
                        />
                    </figure>
                    <Grid item xs={3}>
                        <ul style={{ margin: "10rem 0 10rem 10px", listStyle: "none" }}>
                            <li data-aos="zoom-in-up">
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Overheat protection</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                                <Typography variant="body1" color="textSecondary">
                                    If you ever manage to overwork your CARRERA stand mixer, it
                                    will shut off before it can overheat.
                                </Typography>
                            </li>
                            <li
                                style={{ marginTop: "5rem" }}
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                            >
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Soft drop</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                                <Typography variant="body1" color="textSecondary">
                                    To protect your fingers, the machine head lowers slowly and
                                    gradually every time.
                                </Typography>
                            </li>
                            <li
                                style={{ marginTop: "5rem" }}
                                data-aos="zoom-in-up"
                                data-aos-delay="400"
                            >
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>2-handed unlocking</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                                <Typography variant="body1" color="textSecondary">
                                    You need two hands to raise and lower the machine head. That
                                    keeps them both out of harm’s way.
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>

            {/* Section 06 */}
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    backgroundPosition: "0px 39.7438px",
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    width: "auto",
                    height: "100vh",
                }}
                className="background30"
            >
                <div className="container" style={{ margin: "0 60rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "60px", lineHeight: "66px" }}
                        >
                            <span className="text-white">As stubborn</span>{" "}
                            <span className="text-yellow">as a mule.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            Your Carrera food processor rests its hefty 10 kg weight on top of
                            a generous aluminium non-slip base, meaning that however chaotic
                            things get in your kitchen, the Carrera mixer will stand its
                            ground and won't budge an inch.
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 07 */}
            <Container>
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    marginTop={10}
                    marginBottom={10}
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
                            So much more
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
                                marginRight: "10rem",
                            }}
                        >
                            With a front drive shaft that accepts a selection of optional
                            attachments, you are ready to experiment in so many new ways.
                            Simply lock, load and go!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "22px",
                                marginTop: "2rem",
                            }}
                        >
                            Meat grinder
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 300,
                                fontSize: "14px",
                                lineHeight: "18px",
                                marginTop: "10px",
                                marginRight: "10rem",
                            }}
                        >
                            It doesn't always have to be meat with this attachment, it will
                            happily grind its way through almost anything, meat or vegetable.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "22px",
                                marginTop: "2rem",
                            }}
                        >
                            3 pasta tools
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 300,
                                fontSize: "14px",
                                lineHeight: "18px",
                                marginTop: "10px",
                                marginRight: "10rem",
                            }}
                        >
                            Fresh pasta anyone? rolling and cutting for lasagne, fettuccini,
                            ravioli and spaghetti to name a few - let's go Italiano!
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "22px",
                                marginTop: "2rem",
                            }}
                        >
                            Slicer/Grater
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 300,
                                fontSize: "14px",
                                lineHeight: "18px",
                                marginTop: "10px",
                                marginRight: "10rem",
                            }}
                        >
                            Endless grating and slicing can make even the most enthusiastic
                            chef lose the will to live. Breathe new life into your kitchen
                            prep with this handy time saving accessory
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 07.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "5rem",
                                width: "70%",
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Section 08 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 08.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            The ideal attachments
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            With stainless steel dough hooks, stirrers and whisk, your
                            planetary drive can mix ingredients in next to no time. All you do
                            is watch.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 09.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Splash guard
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            The Carrera stand mixer is designed to make batter without the
                            splatter. It even has an opening so you can add ingredients while
                            it’s running.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 10.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            5L stainless steel bowl
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            However big or small your plans, the sturdy 5L stainless steel
                            mixing bowl can cope. Cleaning is easy too.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 11.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Teflon
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            Nobody likes dough or batter that sticks. That’s why Carrera
                            coated the beater and dough hooks in high-quality Chemours
                            non-stick Teflon®. For easier working – and effortless cleaning.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 12.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Safety cap
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            A safety cap protects the front drive shaft when it’s not in use.
                            If you remove the safety cap (or an attachment) during operation,
                            your stand mixer shuts off immediately.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 13.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Overheat protection
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            The best stand mixer is the one you want to use every day. And if
                            for any reason you accidentally overload it, don’t worry: the
                            thermal cut-off is smart enough to cope with that too.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section  09 */}
                <Grid container textAlign="center" sx={{ marginTop: "5rem", }}>
                    <Grid item xs={12}>
                        <Typography variant="h6" className="font-weight-600 text-extra-dark-gray alt-font" sx={{ fontSize: '25px', lineHeight: '30px' }}>Accessories</Typography>
                    </Grid>
                </Grid>

                <Grid
                    container
                    sx={{
                        marginTop: "2rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                >
                    <Card
                        style={{
                            position: "relative",
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            width: "85%",
                        }}
                        className="bg-white box-shadow-light margin-half-all padding-fourteen-all"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 14.jpg`}
                            alt=""
                            style={{
                                height: "auto",
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                            }}
                        />
                        <Typography
                            variant="body1"
                            className="text-uppercase text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            VEGETABLE SLICER/GRATER
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            With 3 different stainless-steel drums for cutting, grating and
                            rasping fresh vegetables, fruits, cheese, nuts, chocolate and much
                            more.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £89.99</b>
                        </Typography>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ marginTop: "1rem" }}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Card>
                    <Card
                        style={{
                            position: "relative",
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            width: "85%",
                        }}
                        className="bg-white box-shadow-light margin-half-all padding-fourteen-all"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 15.jpg`}
                            alt=""
                            style={{
                                height: "auto",
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                            }}
                        />
                        <Typography
                            variant="body1"
                            className="text-uppercase text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            MEAT GRINDER
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            With 4-wing stainless steel blade and various accessories for
                            making your own minced meat, sausages, pasta and even shortbread
                            biscuits.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £99.99</b>
                        </Typography>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ marginTop: "1rem" }}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Card>
                </Grid>

                <Grid
                    container
                    sx={{
                        marginTop: "5rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                    }}
                >
                    <Card
                        style={{
                            position: "relative",
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            width: "85%",
                        }}
                        className="bg-white box-shadow-light margin-half-all padding-fourteen-all"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 16.jpg`}
                            alt=""
                            style={{
                                height: "auto",
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                            }}
                        />
                        <Typography
                            variant="body1"
                            className="text-uppercase text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            PASTA ROLLER
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            Easily selectable settings for up to 8 different dough thickness
                            for making pasta sheets in widths of up to 140mm.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £89.99</b>
                        </Typography>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ marginTop: "1rem" }}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Card>
                    <Card
                        style={{
                            position: "relative",
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            width: "85%",
                        }}
                        className="bg-white box-shadow-light margin-half-all padding-fourteen-all"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 17.jpg`}
                            alt=""
                            style={{
                                height: "auto",
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                            }}
                        />
                        <Typography
                            variant="body1"
                            className="text-uppercase text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            SPAGHETTI CUTTER
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            For cutting the pasta sheets pre-shaped with the Pasta roller into
                            1.5 mm wide, long and uniform strands of spaghetti.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £89.99</b>
                        </Typography>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ marginTop: "1rem" }}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Card>
                    <Card
                        style={{
                            position: "relative",
                            animationDuration: "2s",
                            animationName: "fadeInUp",
                            animationFillMode: "both",
                            width: "85%",
                        }}
                        className="bg-white box-shadow-light margin-half-all padding-fourteen-all"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№657 18.jpg`}
                            alt=""
                            style={{
                                height: "auto",
                                maxWidth: "100%",
                                verticalAlign: "middle",
                                borderStyle: "none",
                            }}
                        />
                        <Typography
                            variant="body1"
                            className="text-uppercase text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            FETTUCCINE CUTTER
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            For cutting the pasta sheets pre-shaped with the Pasta roller into
                            6 mm wide, long and uniform strands of fettuccine.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £89.99</b>
                        </Typography>
                        <div style={{ textAlign: "center" }}>
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ marginTop: "1rem" }}
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </Card>
                </Grid>

                {/* Section  10 */}
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
                                <li>Stable, high-quality base made from cast aluminium</li>
                                <li>
                                    Planetary drive blends ingredients efficiently and evenly
                                </li>
                                <li>8 speed levels</li>
                                <li>
                                    800 W power for optimal results, even with large amounts of
                                    dough (up to 1.5 kg
                                </li>
                                <li>
                                    Digital dial with LED display, speed and time indication and
                                    mixer-attachment recommendation
                                </li>
                                <li>
                                    Front drive with quick coupling for easy attachment of
                                    optional accessories
                                </li>
                                <li>2-handed unlocking</li>
                                <li>Gentle lowering with finger guard</li>
                                <li>Mixing arm stops automatically when lifted</li>
                                <li>Front drive with auto-stop sensor</li>
                                <li>Overheat protection</li>
                                <li>Non-slip feet</li>
                                <li>
                                    Splash guard with funnel through which further ingredients can
                                    be easily added while the appliance is running
                                </li>
                                <li>
                                    Dough hook and flat beaker with Teflon non-stick coating,
                                    durable stainless steel whisk
                                </li>
                                <li>
                                    Stainless steel mixing bowl (5 l), splash guard with funnel
                                </li>
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

export default withStyles(styles, { withTheme: true })(N_657);
