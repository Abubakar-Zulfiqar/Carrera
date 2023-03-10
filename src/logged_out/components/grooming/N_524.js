import React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    Container,
    Divider,
} from "@mui/material";
import classNames from "classnames";
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

const N_524 = (props) => {
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
                        <Typography variant="h6">Cosmetic Trimmer</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Typography variant="body2" color="textSecondary">
                            Price: <b>£24.99</b> + shipping
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
                <Grid container spacing={5} sx={{ marginTop: "15rem" }}>
                    <Grid container direction="row">
                        <Grid xs={6}>
                            <Typography
                                variant="h1"
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInDown",
                                    animationFillMode: "both",
                                    color: "#232323",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontSize: "80px",
                                    fontWeight: 800,
                                    lineHeight: "95px",
                                }}
                            >
                                COSMETIC TRIMMER №524
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
                                    marginBottom: "3rem",
                                    marginTop: "3rem",
                                }}
                            >
                                A beauty salon in your pocket
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
                                Whether you're going on a date or to a career defining
                                interview, nobody wants to look at someone with unsightly hair
                                growing out of every orifice - maybe your dog doesn't notice,
                                but everyone else does. Better that you remove these unwanted
                                attractions gently, safely, hygienically and fast from fingers,
                                toes, ears and nose and anywhere else you fancy.
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№524 01.jpg`}
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
                </Grid>

                {/* Section 02 */}
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
                        marginTop: "7rem",
                    }}
                    className="background10"
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
                            }}
                        >
                            Hair removal that's not to be sniffed at.
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
                            If you want to get rid of unsightly nasal hair, unwanted ear hair
                            or even the stray hairs between your eyebrows the Carrera cosmetic
                            trimmer is your weapon of choice. It will glide through your
                            unwanted tufts, gently, safely and accurately. There's even an
                            included 4mm / 8mm comb attachment for getting the length of your
                            eyebrows just right.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 03 */}
                <Grid container direction="row" sx={{ marginTop: "5rem" }}>
                    <Grid xs={6}>
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№524 03.jpg`}
                                alt=""
                                style={{
                                    animationName: "fadeInRight",
                                    animationFillMode: "both",
                                    animationDuration: "3s",
                                    height: "auto",
                                    width: "85%",
                                }}
                            />
                        </figure>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: "10rem" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontFamily: "'Montserrat', sans-serif",
                                margin: "0 5rem 0 5rem",
                                fontWeight: 600,
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                        >
                            Shining a light on unwanted hair.
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
                                margin: "2rem 5rem 0 5rem",
                            }}
                        >
                            The Carrera trimmer doesn't leave you in the dark when it cones to
                            precision hair removal. The trimmer also sports a powerful
                            spotlight that will make it easy to spot those hidden hairs
                            wherever they are hiding.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 04 */}
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
                    className="background11"
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
                            For perfect brows, you need steel and precision.
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
                            And not any old steel, but stainless steel to be precise. Also
                            forget using your nail scissors for this task, what's called for
                            requires much greater accuracy and hygiene. The Carrera trimmer's
                            grooming blades are made from high quality stainless steel that
                            has a mild antiseptic quality and is also suitable for those with
                            skin allergies.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 05 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming//№524 05.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            We love details
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            All tools are presented on Carrera yellow background with text
                            about the key features. Another great reason to admire Carrera
                            tools... they are beautiful!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№524 06.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Protective bag
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            A protective bag also serving as toiletry bag to be hung up comes
                            in handy. Use it. And the attachable protective cap as well,
                            because cutting blades are very delicate.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№524 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Removable cutting system
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            A good shaving unit works better when it is clean, which is why
                            you can easily remove the complete cutting system and clean the
                            head under warm running water.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 06 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№524 08.jpg`}
                            alt=""
                        />
                    </Grid>
                </Grid>

                {/* Section 07 */}
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
                                <li>Gentle stainless steel cutting system</li>
                                <li>
                                    Removable cutting system for easy cleaning under running water
                                </li>
                                <li>
                                    Cutting length 0.4 mm, eyebrow trimming attachment comb for 4
                                    or 8 mm
                                </li>
                                <li>Integrated spotlight</li>
                                <li>Battery operation 1x 1.5V AA battery</li>
                                <li>Operating time: 90 min</li>
                                <li>Colour: CRR Graphite Grey / Titanium</li>
                                <li>
                                    battery, protective cap, cleaning brush, attachment comb,
                                    storage pouch
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
            </div>
        </Container>
    );
};

export default withStyles(styles, { withTheme: true })(N_524);
