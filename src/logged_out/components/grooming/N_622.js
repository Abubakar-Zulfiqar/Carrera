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

const N_622 = (props) => {
    const { classes } = props;

    const data = {
        id: uuid(),
        name: "Carrera Hair Clipper",
        price: 69.99,
        image: `${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 01.jpg`,
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
                                HAIR CLIPPER №622
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
                                Hair doesn't stand a chance
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
                                With a titanium-coated ceramic blade, built-in precision
                                adjustment and a high performance battery that lasts an hour on
                                a single charge, when it comes to going up against the Carrera
                                clipper, hair doesn't have a follicle to stand on.
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 01.jpg`}
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
                <Grid container direction="row" sx={{ marginTop: "10rem" }}>
                    <Grid xs={6}>
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 02.jpg`}
                                alt=""
                                style={{
                                    animationName: "fadeInRight",
                                    animationFillMode: "both",
                                    animationDuration: "3s",
                                    height: "auto",
                                    width: "85%",
                                    marginTop: "-5rem",
                                }}
                            />
                        </figure>
                    </Grid>
                    <Grid xs={6} sx={{ marginTop: "15rem" }}>
                        <Typography
                            variant="h4"
                            className="alt-font font-weight-600"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "0 5rem 0 5rem",
                                fontSize: "40px",
                                lineHeight: "46px",
                            }}
                        >
                            Ceramic for cutting. Titanium for strength
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
                            Carrera have combined these two materials to produce the perfect
                            cut. The moving ceramic blade is much lighter and harder than
                            steel, and is also less heat sensitive. While the fixed blade is
                            made of titanium, which is corrosion-resistant and extremely
                            durable. Together, they make an awesome team.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 03 */}
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    textAlign="center"
                    sx={{ marginTop: "15rem" }}
                >
                    <Grid xs={12}>
                        <Typography
                            variant="h4"
                            className="alt-font font-weight-600"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                margin: "0 5rem 0 5rem",
                                fontSize: "40px",
                                lineHeight: "46px",
                                padding: "0 20rem 0 20rem",
                            }}
                        >
                            Short back and long sides? no problem!
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
                                padding: "0 10rem 0 10rem",
                            }}
                        >
                            The Carrera hair clipper is perfect for real close cut, but if you
                            want to leave a little more on top - or at the sides - simply
                            attach either one of the two included comb attachments for lengths
                            between 4mm - 19mm and 21mm - 36mm. Or use the thinning comb to
                            reduce the volume of over-thick hair.
                        </Typography>
                    </Grid>
                    <Grid container justify="center" alignItems="center" marginTop="5rem">
                        <Grid item xs={4}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 03.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "2s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 300,
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    marginBottom: "3rem",
                                    marginTop: "3rem",
                                    marginLeft: "8rem",
                                }}
                            >
                                <ul className="text-lg-left list-style-2">
                                    <li>4 - 19mm</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <figure>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 04.jpg`}
                                    alt=""
                                    style={{
                                        animationDuration: "2s",
                                        animationName: "fadeInUp",
                                        animationFillMode: "both",
                                    }}
                                />
                            </figure>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 300,
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    marginBottom: "3rem",
                                    marginTop: "3rem",
                                    marginLeft: "8rem",
                                }}
                            >
                                <ul className="text-lg-left list-style-2">
                                    <li>21 - 36mm</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <figure>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 05.jpg`}
                                    alt=""
                                    style={{
                                        animationDuration: "2s",
                                        animationName: "fadeInUp",
                                        animationFillMode: "both",
                                    }}
                                />
                            </figure>
                            <Typography
                                variant="body1"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    color: "#626262",
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 300,
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    marginBottom: "3rem",
                                    marginTop: "3rem",
                                    marginLeft: "8rem",
                                }}
                            >
                                <ul className="text-lg-left list-style-2">
                                    <li>
                                        <span>Thinning</span>
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
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
                        height: "40rem",
                        marginTop: "7rem",
                    }}
                    className="background9"
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
                            Precision that's built in.
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
                            Whether it's the hair on your head or the beard on your face, even
                            small changes can make a big difference. To help you choose the
                            exact amount of hair you want to remove, or leave, the precision
                            adjuster is accurate down to the last millimetre or even less.
                            This gives you total control over your designer stubble and close
                            cut hair style, whatever your fashion preference.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Integrated trimmer
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            You will instanly notice that your shaver has a lovely soft touch
                            feel and has been designed to always feel well seated in your hand
                            when shaving in both wet and dry conditions.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 08.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Removable shaving head
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Unfortunately with use shaver's do get a little dirty. The shaving
                            system can be removed for easy cleaning under warm water. Clean
                            blades shave longer and more gently.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 09.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Always ready to go
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            The easy to read digital display indicates your battery charge.
                            But even if you need a shave but your battery is flat – just plug
                            your shaver in and carry on while it recharges.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 10.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Protective bag
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Make sure your shaver wears it well when travelling! Since shaving
                            foils are very delicate, you should not forget the protective cap
                            either. All bagged up and ready to go!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 11.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            We love details
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            All Carrera tools are presented on Carrera yellow background with
                            a little text about the key features. Beautifully packaged and
                            beautifully designed - a sure-fire winning combo!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 12.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Charging via USB
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Went on a trip and forgot your mains adapter? Never mind, you can
                            just charge your Carrera shaver straight from your USB port, for
                            example using your laptop or a USB port in your car.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№622 14.jpg`}
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
                                    Titanium-coated professional cutting unit with ceramic cutting
                                    blade
                                </li>
                                <li>Tool washable under runninng water</li>
                                <li>
                                    2 variable attachment combs for cutting length of 4–19 mm /
                                    21–36 mm
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
                                <li>Operating time: 60 min</li>
                                <li>Power charge: 90 min</li>
                                <li>
                                    Digital LED display to indicate the cutting length, battery
                                    state in %, travel lock and the request to charge the
                                    appliance
                                </li>
                                <li>Colour: CRR Graphite Grey / Titanium</li>
                                <li>
                                    USB mains adapter, cleaning brush, oil, thinning comb, 2
                                    variable cutting length attachments, storage pouch
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

export default withStyles(styles, { withTheme: true })(N_622);
