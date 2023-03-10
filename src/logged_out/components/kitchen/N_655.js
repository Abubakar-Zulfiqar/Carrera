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

const N_655 = (props) => {
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
                    <Typography variant="h6">Carrera Blender</Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body2" color="textSecondary">
                        Price: <b>£499.99</b> + shipping
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
                                BLENDER №655
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
                                A real multi-tasker:
                                <br />
                                Mix, Crush, Steam & Cook.
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
                            The Carrera blender is your perfect secret helper in the kitchen.
                            At up to 20,000 rpm it is perfect for a cooling summer smoothie or
                            a heart warming creamy winter soup. With its unrivalled footprint
                            to power ratio it is the perfect tool for your countertop, giving
                            you the ability to mix, crush, steam and even cook the perfect
                            meal with just the touch of a button. Let your creative culinary
                            mind explore the endless vitamin filled and delicious
                            possibilities.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 01.jpg`}
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
                    zIndex: 100,
                }}
                className="background24"
            >
                <div className="container" style={{ margin: "0 60rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">
                                1,000 watts of soup blending power at your fingertips.
                            </span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            When it comes to super-foods, nothing beats a vitamin filled soup.
                            The Carrera blender not only has automatic presets for smooth or
                            chunky but it can also heat your soup to the perfect temperature
                            in just a few minutes.
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
                    spacing={5}
                    sx={{
                        position: "relative",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "30rem",
                        zIndex: 0,
                    }}
                    className="background25"
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
                            All on one dial
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
                            The designers at Carrera didn't just concentrate on their
                            blender's astonishing good looks and outstanding performance, they
                            also made sure that, unlike other blenders, all the controls are
                            clear, simple, intuitive and available on one easy to use dial.
                            All you need to do is hit the start button and relax while the
                            Carrera blender does the rest. Or switch to manual control and set
                            the time, speed and cooking temperature yourself and get creative.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Section 04 */}
            <div
                className="bg-black w-100"
                style={{ padding: "50px 0", overflow: "hidden" }}
            >
                <Container>
                    <Grid container>
                        <Grid
                            xs={12}
                            className="text-white-2 margin-20px-bottom"
                            sx={{ textAlign: "center" }}
                        >
                            <Typography
                                sx={{
                                    animationDuration: "2s",
                                    animationName: "fadeInRight",
                                    animationFillMode: "both",
                                }}
                                className="text-small font-weight-700 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top "
                            >
                                Finger ready? Time to dial deliciousness
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        className="align-items-center justify-content-center"
                        direction="row"
                    >
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 04.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Textured
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 05.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Creamy
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 06.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Sauce
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 07.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Manual
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 08.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Steam
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 09.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Ice
                            </p>
                        </Grid>
                        <Grid item className="padding-80px-right">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 10.jpg`}
                                alt=""
                            />
                            <p className="margin-10px-top alt-font text-white mb-0 text-center">
                                Cleaning
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            {/* Section 05 */}
            <Container>
                <Grid container sx={{ marginTop: "5rem" }}>
                    <Grid xs={6}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 11.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                width: "80%",
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
                                marginBottom: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            <h5
                                className="alt-font font-weight-600"
                                style={{
                                    fontSize: "32px",
                                    lineHeight: "40px",
                                    paddingRight: "8rem",
                                }}
                            >
                                Less hassle, more vitamins.
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
                            Nowadays taking the healthy option isn't just for top athletes and
                            relying on fussy to make shop-bought protein shakes can be a real
                            hassle. With the Carrera blender you can make the perfect vitamin
                            filled power shake in seconds and steam organic vegetables without
                            boiling away all the vitamins, ensuring that your chosen healthy
                            ingredients remain healthy from the farmers market to the fork.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* Section 06 */}
            <Grid
                container
                justify="center"
                alignItems="center"
                spacing={5}
                sx={{
                    marginTop: "5rem",
                    backgroundPosition: "0px 39.7438px",
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    width: "auto",
                    height: "100vh",
                }}
                className="background26"
            >
                <div className="container" style={{ margin: "0 60rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "40px", lineHeight: "40px" }}
                        >
                            <span className="text-yellow">I've got a crush on you… why?</span>{" "}
                            <span className="text-white">
                                because you're fine for drinks and cocktails.
                            </span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            With its strong glass jug, designed to easily withstand the
                            rigours of crushing ice, berries and frozen vegetables at speeds
                            of up to 20,000 rpm, the Carrera blender makes short work of
                            preparing the coolest of tall tasty drinks and expertly blending
                            exciting fruity cocktails. And you'll always be able to see what's
                            going on inside due to the Carrera blender's high quality
                            glassware, that won't become cloudy with use, like other inferior
                            quality plastic jug blenders often do.
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 07 */}
            <Grid
                container
                className="padding-40px-tb bg-extra-dark-gray action-section"
            >
                <Grid item xs={12}>
                    <div className="justify-content-center">
                        <div className="position-relative text-center">
                            <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                                CRUSH, MIX, COOK & STEAM
                            </span>
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* Section 08 */}
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
                className="background27"
            >
                <div className="container">
                    <Grid item xs={12} padding="0 0 0 35rem">
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{
                                fontSize: "50px",
                                lineHeight: "50px",
                                animationDuration: "2s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                            }}
                        >
                            <span className="text-yellow">A blender that cooks pasta?</span>{" "}
                            <span className="text-white">It's a kind of magic!</span>
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
                            When it comes to having a few tricks up its sleeve, the Carrera
                            blender is the perfect culinary magician's assistant. You've
                            already relaxed with a cool drink, made a healthy smoothie and
                            tucked into a hearty soup, so what's next? guess it's time to make
                            a delicious pasta meal appear... Ta-dah
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 09 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 14.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            20,000 rpm
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            The Carrera blender has a powerful 1,000 watt motor that produces
                            speeds of up to 20,000 rpm - that's more power that a Formula One
                            racing car - now that's truly impressive!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 15.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Heating plate
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            No need to stand there for hours stirring away to stop your food
                            burning or sticking - The Carrera blender provides the perfect
                            temperature and nothing will stick to the bottom.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 16.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Automatic cleaning
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            With just a drop of washing-up liquid, a little water and the
                            flick of a switch, your Carrera blender will clean itself - pity
                            the kids can't be washed in the same way!
                        </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 17.jpg`}
                            alt=""
                        />
                        <Typography variant="body1" className="text-uppercase">
                            Kitchen helper
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ padding: "0 2rem 0 2rem" }}
                        >
                            The included accessory tools make easy work of all tasks. A
                            steamer tray for perfect vegetables, meat and fish. A stirrer for
                            the tastiest of soups and a cleaning brush for afters.
                        </Typography>
                    </Grid>
                </Grid>

                {/* Section  10 */}
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№655 18.jpg`}
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
                                <li>Intuitive controls with automated program presets</li>
                                <li>
                                    20,000 rpm for smoother, more flavourful desserts and
                                    smoothies
                                </li>
                                <li>
                                    Heating surface with long-life 2-layer non-stick coating for
                                    fi ne soups, sauces and jams
                                </li>
                                <li>
                                    Steamer mode and steamer insert (BPA free) for healthier
                                    cooking
                                </li>
                                <li>
                                    Digital dial with LED display for time, temperature and rpm
                                </li>
                                <li>Create your own recipes in manual mode</li>
                                <li>Compact design suits any kitchen</li>
                                <li>
                                    4 stainless steel butterfly blades – perfect for everything
                                    from crushed ice to smooth, creamy purees
                                </li>
                                <li>1.75 litre thermal glass jug</li>
                                <li>Automatic cleaning program</li>
                                <li>Dual safety lock in base and lid</li>
                                <li>Overheat protection and safety cutout</li>
                                <li>Integrated cable coil</li>
                                <li>1,000 watt power</li>
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

export default withStyles(styles, { withTheme: true })(N_655);
