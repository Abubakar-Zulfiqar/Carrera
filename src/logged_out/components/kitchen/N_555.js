import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
    Grid,
    Typography,
    Box,
    Container,
    Divider,
} from "@mui/material";
import withStyles from "@mui/styles/withStyles";

import Header from "../Header";
import ShareButton from "../../../shared/components/ShareButton";
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

const N_555 = (props) => {
    const { theme } = props;
    const [isVisible, setIsVisible] = useState(false);

    const data = {
        id: uuid(),
        name: "Carrera Hand Mixer",
        price: 79.99,
        image: `${process.env.PUBLIC_URL}/images/logged_out/kitchen/№555 01.jpg`,
    };

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


    return (
        <>
            <Header data={data} />

            {/* Section 01 */}
            <Container>
                <Grid container sx={{ marginTop: "6rem" }}>
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
                                HAND MIXER №555
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
                                Deliciousness: It's all in the mix.
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
                                marginTop: "1rem",
                            }}
                        >
                            Whether you're a budding baker, pizza perfectionist or master of the sweet and tasty, the Carrera hand mixer is your go to tool when it comes to creativity in the kitchen. It's stainless steel dough hooks and whisks will do the hard work leaving you free to create to your hearts content. With its powerful 300 watt motor, 4 speed settings and even a turbo-boost for when you're in a hurry, the Carrera hand mixer is your very own secret sous chef, assisting you in the creation of delicious cupcakes, crepes and crumbles along with savoury breads, buns and baguettes.
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
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№555 01.jpg`}
                            alt=""
                            style={{
                                animationDuration: "1s",
                                animationName: "fadeInUp",
                                animationFillMode: "both",
                                marginTop: "5rem",
                                width: "80%",
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
                className="background34"
            >
                <div className="container" style={{ margin: "-15rem 50rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "70px", lineHeight: "70px" }}
                        >
                            <span className="text-white">Whisks and kneads</span>{" "}
                            <span className="text-yellow">through thick and thin</span>
                        </Typography>
                    </Grid>
                </div>
            </Grid>

            {/* Section 03 */}
            <Grid
                container
                className="padding-40px-tb bg-black action-section"
            >
                <Grid item xs={12}>
                    <div className="justify-content-center">
                        <div className="position-relative text-center">
                            <span className="text-medium text-white-2 alt-font letter-spacing-8 text-uppercase d-inline-block margin-5px-top sm-width-100">
                                DELICIOUSNESS: IT'S ALL IN THE MIX
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
                    backgroundPosition: "0px 39.7438px",
                    position: "relative",
                    backgroundSize: "cover",
                    overflow: "hidden",
                    backgroundAttachment: "fixed",
                    width: "auto",
                    height: "100vh",
                }}
                className="background35"
            >
                <div className="container" style={{ margin: "-15rem 50rem 0 25rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            className="font-weight-700 alt-font"
                            style={{ fontSize: "55px", lineHeight: "60px" }}
                        >
                            <span className="text-white">Open ended handle -</span>{" "}
                            <span className="text-yellow">You'll easily grasp</span>{" "}
                            <span className="text-white">the benefits.</span>
                        </Typography>
                        <br />
                        <br />
                        <Typography
                            variant="body1"
                            className="font-weight-500 alt-font text-white"
                            style={{ fontSize: "16px", lineHeight: "23px" }}
                        >
                            With an elegantly designed open ended handle you can choose to hold your mixer in the way that feels most comfortable for you. Just another cool design feature of the Carrera hand mixer, giving you easy to grasp benefits from start to finish.
                        </Typography>
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
                        The power to perform.
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
                            margin: "0 40rem 5rem 40rem",
                        }}
                    >
                        The Carrera hand mixer boasts a raft of well designed features and impressive power that will allow you to enjoy countless hours of effortless beating, whisking and kneading.
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
                                    <b>4 speed levels, plus turbo boost</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
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
                                    <b>Powerful, longlived AC motor with 300 Watts</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
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
                                    <b>stainless steel beater and dough hook</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                            </li>
                        </ul>
                    </Grid>
                    <figure>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№555 04.jpg`}
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
                            <li data-aos="zoom-in-up" className="text-lg-right">
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Spiral cord for safe working</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                            </li>
                            <li
                                style={{ marginTop: "5rem" }}
                                data-aos="zoom-in-up"
                                data-aos-delay="200"
                                className="text-lg-right"
                            >
                                <span
                                    className={`span-text ${isVisible ? "span-text-visible" : ""
                                        }`}
                                >
                                    <b>Rear with silicone grip for safe standing</b>
                                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                                </span>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>


            {/* Section 06 */}
            <Grid
                container
                className="padding-40px-tb bg-black action-section"
            >
                <Container>
                    <Grid item xs={12}>
                        <div className="justify-content-center">
                            <div className="position-relative text-center" style={{ padding: '0 130px 0 130px' }}>
                                <Typography variant="h4" className="text-yellow alt-font margin-5px-top font-weight-600" sx={{ fontSize: '40px', lineHeight: "46px" }}>
                                    The deliciousness is in the detail.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    className="font-weight-500 alt-font text-white text-center"
                                    style={{ fontSize: "16px", lineHeight: "23px", marginTop: '10px' }}
                                >
                                    When it comes to baking and making delicious desserts power and stamina are good things to have, but often it's the subtle details that set one product far out in front of the others. So along with the innovative, ergonomic open ended handle Carrera gave its hand mixer a practical spiral power cord for tangle-free use and compact storage. Plus they included a non-slip silicon pad on its base for handy stable countertop standing, whether wet, dry or covered in flour!
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                </Container>
            </Grid>

            {/* Section 07 */}
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
                className="background36"
            >
            </Grid>

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
                    <Grid item xs={6} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№555 06.jpg`}
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
                    <Grid item xs={6} style={{ width: "70%" }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/logged_out/kitchen/№555 07.jpg`}
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
                </Grid>

                {/* Section  09 */}
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
                                <li>Power: 300 W</li>
                                <li>Eject button</li>
                                <li>Powerful, durable AC motor</li>
                                <li>4 speed settings plus turbo boost function</li>
                                <li>High-quality stainless steel beater and dough hooks – dishwasher safe</li>
                                <li>Rear with silicone supporting surface for setting the unit aside</li>
                                <li>Coiled cord for safe operation and easy storage in the kitchen</li>
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

export default withStyles(styles, { withTheme: true })(N_555);
