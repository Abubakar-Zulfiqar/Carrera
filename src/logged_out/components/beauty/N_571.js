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

const N_571 = (props) => {
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
                        <Typography variant="h6">Carrera Cleansing Brush</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="body2" color="textSecondary">
                            Price: <b>£99.99</b> + shipping
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
                                FACIAL CLEANSING BRUSH №571
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
                                True equality in pore deep cleansing
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 01.jpg`}
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
                        <Grid item xs={12}>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "3s",
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
                                Both male and female skin requires daily care to maintain a
                                healthy balance. But often times using a simple wash-cloth and
                                soap barely touches the surface. The Carrera electric facial
                                cleansing brush goes deeper - pore deep in fact - complementing
                                your daily routine with an invigorating facial spa treatment
                                that is fast and effective, whatever your gender.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 02 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{
                        marginTop: "10rem",
                        backgroundPosition: "0px 58.7016px",
                        position: "relative",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundAttachment: "fixed",
                        height: "40rem",
                    }}
                    className="background1"
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span style={{ color: "#fff871" }}>Deep clean</span>
                            <br />
                            <span className="text-white">your skin.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            Apart from the usual suspects such as sun, wind and dry winter
                            air, your skin is also under attack from other airborne dirt
                            caused by air pollution and day-to-day urban living as well as
                            yesterday's makeup residue. The Carrera electric facial cleanser
                            works pore deep across all skin types to clean your skin and leave
                            it ready to absorb all the enriching essential oils and treatments
                            you then choose to apply. With specialist attachments to suit all
                            skin types, 3 rotational speeds and even a skin zone timer to
                            remind you when to move from area onto the next.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 03 */}
                <Grid container textAlign="center" sx={{ marginTop: "5rem" }}>
                    <Grid item>
                        <Typography
                            variant="h4"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontWeight: 500,
                                marginBottom: "2rem",
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                        >
                            Hygiene gets a high-tech boost
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                color: "#6f6f6f",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: "18px",
                                fontWeight: 300,
                                lineHeight: "26px",
                                margin: "0 15rem 0 15rem",
                            }}
                        >
                            Let's face it, you want your facial brush to clean your skin, not
                            re-coat it with yesterdays dirt and dead skin cells. Many inferior
                            brushes can end up full of harmful germs that can cause rashes and
                            inflammations. But the Carrera facial cleansing brush has a
                            built-in high-tech solution that adds antimicrobial ions to every
                            single bristle. Every time the brush gets moist, special ions are
                            released that seek out and destroy those harmful micro-organisms,
                            ensuring your complexion remains clean, healthy and truly fresh.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 04 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{ marginTop: "2rem" }}
                >
                    <Grid container md={10} direction="row">
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 03.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    height: "auto",
                                    maxWidth: "100%",
                                    width: "100%!important",
                                }}
                            />
                        </Grid>
                        <Grid xs={6} className="text-lg-left">
                            <Typography
                                variant="h4"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "black",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "26px",
                                    marginTop: "5rem",
                                }}
                            >
                                Antimicrobial brush head
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginTop: "1rem",
                                    marginBottom: "3rem",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                }}
                            >
                                Use this antimicrobial brush head to cleanse normal facial skin
                                every day. Like all our brush heads, it’s easy to clean under
                                running water.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 05 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{ marginTop: "2rem" }}
                >
                    <Grid container md={10} direction="row">
                        <Grid xs={6} className="text-lg-right">
                            <Typography
                                variant="h4"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "black",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "26px",
                                    marginTop: "5rem",
                                }}
                            >
                                Perfect for beginners
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginTop: "1rem",
                                    marginBottom: "3rem",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                }}
                            >
                                Delicate skin prefers a softer brush for daily care. The brush
                                head is antimicrobial, and is perfect for beginners who want to
                                get used to facial brushing.
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 04.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "1s",
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

                {/* Section 06 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{ marginTop: "2rem" }}
                >
                    <Grid container md={10} direction="row">
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 05.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    height: "auto",
                                    maxWidth: "100%",
                                    width: "100%!important",
                                }}
                            />
                        </Grid>
                        <Grid xs={6} className="text-lg-left">
                            <Typography
                                variant="h4"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "black",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "26px",
                                    marginTop: "5rem",
                                }}
                            >
                                Massages and revitialises
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginTop: "1rem",
                                    marginBottom: "3rem",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                }}
                            >
                                The gentle rotation pampers, massages and revitialises tired and
                                drawn skin by stimulating the blood flow and helping facial
                                muscles relax. Also recommended for use with lotions or facial
                                masks.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 07 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{ marginTop: "2rem" }}
                >
                    <Grid container md={10} direction="row">
                        <Grid xs={6} className="text-lg-right">
                            <Typography
                                variant="h4"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "black",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "26px",
                                    marginTop: "5rem",
                                }}
                            >
                                Pore-deep cleansing
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginTop: "1rem",
                                    marginBottom: "3rem",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                }}
                            >
                                Use this once a week for pore-deep cleansing, and to remove dead
                                skin cells. Antimicrobial? Check.
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 06.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "1s",
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

                {/* Section 08 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{ marginTop: "2rem" }}
                >
                    <Grid container md={10} direction="row">
                        <Grid xs={6}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 07.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    height: "auto",
                                    maxWidth: "100%",
                                    width: "100%!important",
                                }}
                            />
                        </Grid>
                        <Grid xs={6} className="text-lg-left">
                            <Typography
                                variant="h4"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "black",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "26px",
                                    marginTop: "5rem",
                                }}
                            >
                                Apply make-up evenly
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    marginTop: "1rem",
                                    marginBottom: "3rem",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                }}
                            >
                                This attachment applies make-up evenly and economically every
                                day. It’s incredibly gentle to skin, and easy to clean under
                                running water.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Section 09 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    sx={{
                        marginTop: "10rem",
                        backgroundPosition: "0px 58.7016px",
                        position: "relative",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundAttachment: "fixed",
                        height: "40rem",
                    }}
                    className="background2"
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">An in-shower</span>
                            <br />
                            <span className="text-yellow">facial spa.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            The best thing about many workouts is looking forward to the shower session afterwards. Relaxing while the warm water runs down over your aching body can only be made better by enjoying a stimulating facial spa at the same time. The Carrera facial cleansing brush is waterproof to IPX6 standards. The heat and steam of the shower helps your skin relax and loosens pores while your cleansing brush goes to work. Just another good reason to spend more time in the shower and less time scrubbing your face by the sink.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 10 */}
                <Grid container className="padding-40px-tb bg-extra-dark-gray action-section">
                    <Grid item xs={12}>
                        <div className="justify-content-center">
                            <div className="position-relative text-center">
                                <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">beauty buzzing in your hand</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* Section 11 */}
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
                        height: "40rem",
                    }}
                    className="background3"
                >
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-yellow">Preparing man</span>
                            <br />
                            <span className="text-white">for the main</span>
                            <br />
                            <span className="text-white">event.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            Although we'd like all the things to be equal across the sexes, a man's need to shave can often become the main event in many facial routines. Using a facial brush before you shave can help fine hairs stand on end, ready for the chop but also aid in maintaining that manly stubble without the discomfort caused by ingrowing hairs. So is a facial brush just something for the girls? absolutely not.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 12 */}
                <Grid container className="padding-40px-tb bg-extra-dark-gray action-section">
                    <Grid item xs={12}>
                        <div className="justify-content-center">
                            <div className="position-relative text-center">
                                <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">beauty buzzing in your hand</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* Section 13 */}
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
                        height: "40rem",
                    }}
                    className="background4"
                >
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-yellow">Applying</span>{" "}
                            <span className="text-white">even make-up</span>{" "}
                            <span className="text-yellow">was never easier.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            If you dream of applying make-up like a professional then cumbersome pads and sticky fingers rarely do a good job. Using our included make-up applicator you can spread a thin, even layer over your face quickly and effortlessly, every time, with no hard edges or noticeable outlines. And with all the other salon quality attachments at your disposal, removing your make-up becomes as easy as putting it on.
                        </Typography>
                    </Grid>
                </Grid>


                {/* Section 14 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 11.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Lithium battery
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Few competitors can match the staying power of Carrera's facial cleansing brush. The Lithium-Ion battery runs for a full 60 minutes on a 90-minute charge. That’s about 60 applications!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 12.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Power Charge
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Flat battery? In just three minutes, the Boost feature gives you the power you need for a single (thorough) cleanse. That’s about the same as it takes for a boiled egg.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 13.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            USB Charge
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Travelling light? Leave your charger at home and charge your facial cleansing brush on your laptop or in-car port instead.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/beauty/№571 14.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Storage pouch
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Use this practical storage pouch to keep all your attachments in one safe place, together with your facial cleansing brush.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 15 */}
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
                                <li>Antimicrobial brush heads</li>
                                <li>3 rotation levels for gentle, deep cleansing</li>
                                <li>4 attachments for all skin types, peeling and massage</li>
                                <li>Applicator attachment for even application of make-up</li>
                                <li>Skin zone timer with 20-second interval</li>
                                <li>Works wet and dry in the shower, too</li>
                                <li>High-performance lithium battery: 60 min.</li>
                                <li>Power Charge: 90 min.</li>
                                <li>Quick Charge: 3 min. for 3 one-minute treatments</li>
                                <li>Includes: charging station, protective caps, bag, power adaptor, 5 attachmentsQuick Charge: 3 min. for 3 one-minute treatments</li>
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

export default withStyles(styles, { withTheme: true })(N_571);
