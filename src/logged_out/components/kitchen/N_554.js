import React from "react";
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

const N_554 = (props) => {
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
                    <Typography variant="h6">Carrera Stick Blender</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" color="textSecondary">
                        Price: <b>£129.99</b> + shipping
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
                                STICK BLENDER №554
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
                                Real power on display
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
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 01.jpg`}
                                alt=""
                                style={{
                                    animationDuration: "3s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    height: "auto",
                                    width: "60%",
                                }}
                            />
                        </Grid>
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
                className="background31"
            >
                <Container>
                    <Grid container>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <Typography
                                variant="h2"
                                className="font-weight-700 alt-font"
                                style={{ fontSize: "55px", lineHeight: "60px" }}
                            >
                                <span className="text-white">Great hand blenders can</span>{" "}
                                <span className="text-yellow">whizz up soups</span>{" "}
                                <span className="text-white">faster than you can imagine.</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                className="alt-font font-weight-300 text-white"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                    marginBottom: "2rem",
                                    marginTop: "2rem",
                                }}
                            >
                                There's no need for oversized countertop gadgets when you're
                                looking to whip up a tasty soup. The stick blender from Carrera
                                is a heavy-duty tool made from premium stainless steel with 800
                                watt motor - more than enough power to instantly liquify pretty
                                much anything you plunge it into.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            {/* Section 03 */}
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
                className="background32"
            >
                <Container>
                    <Grid
                        xs={6}
                        className="alt-font padding-three-left padding-100px-bottom padding-60px-top "
                    >
                        <Typography
                            variant="h4"
                            className="font-weight-600"
                            sx={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                fontSize: "40px",
                                lineHeight: "46px",
                                marginTop: "2rem",
                            }}
                        >
                            800 watts, 5 gears, digital display and a turbo boost - it's got
                            it all.
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
                            The Carrera stick blender has an elegant LED display that shows
                            the exact mix time, as well as what gear you’re using. It also has
                            five speeds and an on-demand turbo. It will never run hot when
                            handling hard to blend or sticky ingredients because at 1.4 kilos,
                            it's no lightweight… It's got it all.
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
                </Container>
            </Grid>

            {/* Section 04 */}
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
                    zIndex: 100,
                }}
                className="background33"
            >
                <Container>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            textAlign="center"
                            justifyContent="center"
                            sx={{ padding: "0 195px 0 195px", marginLeft: "5rem" }}
                        >
                            <Typography
                                variant="h2"
                                className="font-weight-700 alt-font"
                                style={{ fontSize: "55px", lineHeight: "60px" }}
                            >
                                <span className="text-white">
                                    Carving out a reputation as a
                                </span>{" "}
                                <span className="text-yellow">heavyweight ice-breaker.</span>
                            </Typography>
                            <Typography
                                variant="body2"
                                className="alt-font font-weight-300 text-white"
                                sx={{
                                    animationDuration: "1s",
                                    animationName: "fadeInUp",
                                    animationFillMode: "both",
                                    fontSize: "16px",
                                    lineHeight: "20px",
                                    marginBottom: "2rem",
                                    marginTop: "2rem",
                                }}
                            >
                                Crushing ice with other hand blenders can often send them to an
                                early grave - but that's never going to happen using the Carrera
                                stick blender - it's the heavyweight of ice-breakers - strong
                                stainless steel blades make turning solid ice into frozen slush
                                child's play. Whether you're crushing ice for fancy cocktails,
                                frozen berries for a refreshing summer smoothie, or if needed, a
                                big bag of crushed ice to soothe a painful sports injury, you're
                                in safe heavyweight ice-breaking hands.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            {/* Section 05 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 05.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Stainless steel blender base
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            From the motor to the blades, the hand blender uses stainless
                            steel wherever possible throughout the 800 W power chain. It goes
                            through ice cubes, nuts, tough or hot ingredients like butter.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 06.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Smooth, soft starts
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            Hand blenders that start aggressively can redecorate your entire
                            kitchen in seconds. This 800 W hand blender has a Soft Start
                            feature for smooth, gentle power take-up to the rpm you select.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 07.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Detachable blender base
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            Even the hottest blender base needs to be removable for thorough
                            cleaning. We recommend holding it under a tap, better than just
                            shoving them in the dishwasher.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section  06 */}
                <Grid container textAlign="center" sx={{ marginTop: "5rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h6"
                            className="font-weight-600 text-extra-dark-gray alt-font"
                            sx={{ fontSize: "25px", lineHeight: "30px" }}
                        >
                            Accessories
                        </Typography>
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 08.jpg`}
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
                            MEASURING CUP
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            The measuring cup is made of BPA-free plastic and can pour without
                            dripping. Thanks to the aroma-proof lid, you can even use it for
                            storage.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £19.99</b>
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 09.jpg`}
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
                            POTATO MASHER ATTACHMENT
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            className="text-lg-left"
                            style={{ marginTop: "1rem", marginBottom: "6px" }}
                        >
                            The slim stainless steel blender makes fine purees from boiled
                            fruit or vegetables and is ideal for preparing compotes, dips or
                            baby food.
                        </Typography>
                        <Typography variant="body2" className="text-lg-left">
                            <b>Price: £29.99</b>
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

                {/* Section  07 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№554 10.jpg`}
                            alt=""
                        />
                    </Grid>
                </Grid>

                {/* Section  08 */}
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
                                <li>800 Watt power</li>
                                <li>5 speeds plus turbo boost</li>
                                <li>
                                    Digital dial with LCD display indicates runtime and speed
                                    setting accurately
                                </li>
                                <li>RPM start-up control for clean mixing</li>
                                <li>Quality housing with stainless steel applications</li>
                                <li>Ergonomic comfort grip for easy, safe handling</li>
                                <li>
                                    Slim, removable stainless steel mixer base for easy cleaning
                                </li>
                                <li>Illuminated buttons</li>
                                <li>
                                    Durable, high quality stainless steel blades – suitable for
                                    crushed ice
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

export default withStyles(styles, { withTheme: true })(N_554);
