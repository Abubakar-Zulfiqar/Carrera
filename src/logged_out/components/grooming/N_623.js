import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
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

import Header from "../Header";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomVideo from "../../../shared/components/ZoomVideo";

import "../../../index.css";

const styles = (theme) => ({
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

const N_623 = (props) => {
    const { classes } = props;

    const data = {
        id: uuid(),
        name: "Carrera Trimmer",
        price: 79.99,
        image: `${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 01.jpg`,
    };

    return (
        <>
            <Header data={data} />

            {/* Section 01 */}
            <Container>
                <Grid container sx={{ marginTop: "15rem" }}>
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
                                TRIMMER №623
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
                                Blades of speed
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
                                When it comes to unwanted hair there is only one solution: best
                                get rid of it. The Carrera beard trimmer does the perfect job.
                                With a razor-sharp, durable stainless steel blade which is far
                                narrower than the Carrera hair trimmer, it can manoeuvre like a
                                tightly tuned racing car without pulling or tugging. With the
                                Carrera trimmer you'll soon be able to turn your unkempt facial
                                hair into a work of precision groomed wonder, quickly, gently
                                and hygienically.
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 01.jpg`}
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
                    className="background12"
                >
                    <Grid xs={6} sx={{ padding: "0 5rem 0 5rem" }}>
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
                            High tech materials make for a high performance trimmer.
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
                            When it comes to using the best materials for the job, Carrera
                            have not held back in their use of premium grade steel that is not
                            only incredibly sharp but also holds it edge superbly. And with
                            the beard trimmer having a cutting head of just 35mm wide, you can
                            work on those tight corners and awkward curves with total
                            accuracy.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 03 */}
                <Grid container direction="row" sx={{ marginTop: "5rem" }}>
                    <Grid xs={6}>
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 03.jpg`}
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
                    <Grid xs={6} sx={{ marginTop: "20rem" }}>
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
                            Keeping your distance
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
                            With your beard now the perfect length, you'll want it to stay
                            there. The included comb attachments range from 4mm to 14 mm,
                            leaving you always in control.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 04 */}
                <Grid container direction="row" sx={{ marginTop: "10rem" }}>
                    <Grid xs={6} sx={{ marginTop: "10rem" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "0 5rem 0 5rem",
                                fontWeight: 600,
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                        >
                            Beauty in the details
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
                            Millimetres may sound very small, but there's still room for even
                            greater accuracy. The trimmer's precision adjuster is accurate to
                            fractions of a millimetre: 0.8 and 1.2 and 1.6 and 2.0 mm giving
                            you absolute control of the finest details.
                        </Typography>
                        <Box
                            pt={2}
                            sx={{
                                animationDuration: "3s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "2rem 4rem 0 4rem",
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
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 04.jpg`}
                                alt=""
                                style={{
                                    animationName: "fadeInLeft",
                                    animationFillMode: "both",
                                    animationDuration: "3s",
                                    overflow: "hidden",
                                    height: "auto",
                                    width: "75%",
                                }}
                            />
                        </figure>
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 05.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Removable cutting head
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Even the sharpest stainless steel cutting head enjoys a nice clean
                            and a drop of oil now and again. And it will repay you with
                            maximum cutting performance.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 06.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            LED Display
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Check your battery’s charge level or your fine adjustment setting
                            at a glance. Travel lock status? Yes. There’s even a charge prompt
                            for when the charge level gets low.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Lithium battery
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            The powerful, fast-charging battery pack makes you independent of
                            mains power. Your Lithium-Ion battery will even forget there’s
                            such a thing as a memory effect.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 08.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            We love details
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Carrera products come beautifully packaged. All tools are
                            presented on a Carrera yellow background with a little text
                            informing about the key features.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 09.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Protective bag
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            A storage bag is great for all your accessories when travelling,
                            and also protects your appliance from sharp edges, and the
                            attachment combs from loss and misplacing.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 10.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Charging via USB
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Forgotten your mains adapter? Never mind, you can just charge your
                            Carrera tool via USB, for example using your laptop.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 06 */}
                <Grid container direction="row" sx={{ marginTop: "10rem" }}>
                    <Grid xs={6}>
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№526 01.jpg`}
                                alt=""
                                style={{
                                    animationName: "fadeInRight",
                                    animationFillMode: "both",
                                    animationDuration: "3s",
                                }}
                            />
                        </figure>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: "10rem" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "0 5rem 0 5rem",
                                fontWeight: 600,
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                            className="text-yellow text-small"
                        >
                            ACCESSORY
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "0 5rem 0 5rem",
                                fontWeight: 600,
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                        >
                            Because Carrera tools are too beautiful for the drawer
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
                            Even when your appliance isn't in use it should still be nice to
                            look at. That's why Carrera developed a universal charging base
                            for all its grooming tools.
                        </Typography>
                        <Link
                            to="/carrera-charging-base-526"
                            className={classes.noDecoration}
                        >
                            <Button
                                className={classes.btn}
                                variant="contained"
                                sx={{ margin: "2rem 5rem 0 5rem" }}
                            >
                                View Product
                            </Button>
                        </Link>
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№623 11.jpg`}
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
                            <ul className="p-0 list-style-3">
                                <li>
                                    Professional stainless steel cutting system with titanium
                                    coated cutting blade
                                </li>
                                <li>
                                    Removable cutting system for easy cleaning under running water
                                </li>
                                <li>
                                    Variable attachment comb for different cutting lengths: 4–14
                                    mm
                                </li>
                                <li>
                                    Cutting length fine adjustment integrated in the appliance:
                                    0.8 / 1.2 / 1.6 / 2.0 mm
                                </li>
                                <li>Rechargeable/mains-operated for cord and cordless use</li>
                                <li>
                                    High-performance lithium battery with flexible USB charge
                                    possible, on devices with a max. of 5 V/1000 mAh of power
                                </li>
                                <li>Power charge: 90 min</li>
                                <li>Operating time: 60 min</li>
                                <li>
                                    Digital LED display to indicate the cutting length, battery
                                    state in %, travel lock and the request to charge the
                                    appliance
                                </li>
                                <li>Colour: CRR Graphite Grey / Titanium</li>
                                <li>
                                    USB mains adapter, cleaning brush, oil, 1 variable cutting
                                    length attachment, storage pouch
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

export default withStyles(styles, { withTheme: true })(N_623);
