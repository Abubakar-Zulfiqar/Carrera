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
import BoltIcon from "@mui/icons-material/Bolt";

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

const N_421 = (props) => {
    const { classes } = props;

    const data = {
        id: uuid(),
        name: "Carrera Shaver 421",
        price: 99.99,
        image: `${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 01.jpg`,
    };

    return (
        <>
            <Header data={data} />

            {/* Section 01 */}
            <Container>
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
                                SHAVER №421
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
                                Little big man
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
                                Although this may be the 521's little brother - don't let its
                                size fool you - This shaver still packs a mighty punch, showing
                                rough stubble no mercy with its two precision shaving foils and
                                cutting equally clean edges with its integrated trimmer.
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 01.jpg`}
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
                    className="background7"
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
                            A digital display that works for you
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
                            From letting you know the shaver is in travel mode, to letting you
                            know when it's time for a re-charge or informing you that the
                            battery is flat, the bright and informative digital display is
                            there to help. And even if you are alerted to a flat battery,
                            simply plug your shaver in to the mains and continue your shave
                            while it charges.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section 03 */}
                <Grid container direction="row" sx={{ marginTop: "10rem" }}>
                    <Grid xs={6}>
                        <figure>
                            <img
                                className={classNames(classes.img)}
                                src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 03.jpg`}
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
                            When it comes to blades, you can't have too many.
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
                            The secret of efficient shaving lies in the application of
                            numerous sharp blades over a large area, all at the same time. The
                            Carrera shaver uses a 4-Track system over 3 shaver foils. It also
                            sports an integrated trimmer that serves as a preparatory
                            pre-shave boundary that precedes the main cutting edges, ensuring
                            the shaver glides smoothly and gently as you shave. And with an
                            integrated trimmer for sharp contours and clean-cut edges, there's
                            no need to switch tools for those finishing touches.
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
                        backgroundPosition: "-15rem 58.7016px",
                        position: "relative",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundAttachment: "fixed",
                        height: "40rem",
                    }}
                    className="background8"
                >
                    <Grid item xs={6}></Grid>
                    <Grid xs={6}>
                        <div className="d-inline-block margin-20px-bottom bolt-icon">
                            <BoltIcon sx={{ fontSize: "4rem" }} />
                        </div>
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
                            Quick recharging with no memory effect.
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
                            Old style lithium batteries can soon become confused and loose
                            their ability to recharge fully due to their annoying 'memory
                            effect' tendencies - Carrera tools use only high-performance
                            lithium-ion batteries that can store an impressive 800mAh and most
                            importantly they have no memory effect. Now you can shave for a
                            full hour on a single charge and even when totally flat, the 5
                            minute Power Boost quick recharge feature is all you need for a
                            single shave.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 05.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 06.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 07.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 08.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 09.jpg`}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 10.jpg`}
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

                {/* Section 07 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/grooming/№421 11.jpg`}
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
                                    3-track cutting system with integrated long hair trimmer and 2
                                    spring-loaded cutting blades
                                </li>
                                <li>Wet &amp; Dry shaver</li>
                                <li>Tool completely washable under runninng water</li>
                                <li>Rechargeable/mains-operated for cord and cordless use</li>
                                <li>High-performance lithium battery</li>
                                <li>
                                    Flexible USB charge possible, on devices with a max. of 5
                                    V/1000 mAh of power
                                </li>
                                <li>Integrated precision trimmer</li>
                                <li>
                                    Digital LED display to indicate the battery state, travel
                                    lock, request to charge the appliance
                                </li>
                                <li>Full power charge: 90 min</li>
                                <li>
                                    Boost charge function: 5 min charge for one single shave
                                </li>
                                <li>Operating time: 45 min</li>
                                <li>
                                    USB mains adapter, storage pouch, cleaning brush, protective
                                    cap
                                </li>
                                <li>Colour: CRR Graphite Grey / Titanium</li>
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

export default withStyles(styles, { withTheme: true })(N_421);
