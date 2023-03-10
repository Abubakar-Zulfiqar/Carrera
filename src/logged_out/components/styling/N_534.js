import React, { useEffect, useState } from "react";
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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
    },
  },
});

const N_534 = (props) => {
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
            <Typography variant="h6">Carrera Hair Straightener</Typography>
          </Grid>
          <Grid xs={4}>
            <Typography variant="body2" color="textSecondary">
              Price: <b>£69.99</b> + shipping
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
          <Grid container md={10} direction="row">
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
                HAIR DRYER №534
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
                Your hair, the way you like it.
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
            <Grid xs={12}>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№534 01.jpg`}
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
          </Grid>
        </Grid>

        {/* Section 02 */}
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={5}
          sx={{
            background: theme.palette.secondary.main,
            marginTop: "10rem",
          }}
        >
          <Grid item direction="column">
            <Grid item textAlign="center">
              <Typography
                variant="h6"
                sx={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  color: "#232323",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  fontSize: "25px",
                  lineHeight: "30px",
                  margin: "0 15rem 0 15rem",
                }}
              >
                <strong className="font-weight-400">
                  Fed up with your smooth straight hair and want to go curly?
                </strong>{" "}
                or maybe it's the other way around? whatever your style{" "}
                <strong className="font-weight-400">
                  Carrera have the perfect tool
                </strong>{" "}
                to create what you want. With{" "}
                <strong className="font-weight-400">
                  permanent ionisation, generous spring loaded, ceramic coated
                  plates and a boost mode
                </strong>{" "}
                for faster heating you'll be{" "}
                <strong className="font-weight-400">
                  creating your new look
                </strong>{" "}
                in no time.
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item xs={3}>
              <ul style={{ margin: "10rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Boost-Function</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Patience is a virtue, but who has the time? Just press boost
                    mode and you're good to go.
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
                    <b>Argan Oil & Keratin</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Keratin and Argan oil deliver essential proteins keeping
                    your hair smooth and silky.
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
                    <b>Spring loaded</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Our spring-loaded styling plates spread the pressure evenly
                    for perfect smoothness.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№534 02.jpg`}
                alt=""
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  width: "25rem",
                }}
              />
            </figure>
            <Grid item xs={3}>
              <ul style={{ margin: "10rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    <b>Permanent Ionisation</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Moisture evaporates faster from your damp hair, meaning you
                    spend less time styling.
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
                    <b>Temperature setting</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Stepping in incriments of 10 degrees gives you precise
                    control over temperature.
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
                    <b>Automatic Cut-out</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                  <Typography variant="body1" color="textSecondary">
                    Automatically turns off if you forget to or leave the room
                    unexpectedly.
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>

        {/* Section 03 */}
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "10rem",
          }}
        >
          <Grid xs={6}>
            <Typography
              variant="h4"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Premium features creating perfect results
            </Typography>
            <Typography
              variant="body1"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#6f6f6f",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "26px",
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              With a digital heat display, automatic overheat cutout, permanent
              ionisation, ceramic coated spring-loaded plates and its fast
              heating boost mode for when you're in a hurry, it's got it all
              baby!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "26px",
                marginBottom: "2rem",
                marginTop: "2rem",
              }}
            >
              The wide styling plates are made from refined aluminium coated
              with heat transferring ceramic that helps your hair glide between
              the plates without overheating or damage. And the keratin coating
              enriches your hair with important proteins while an argan oil
              supplement will ensure your hair remains beautifully bouncy and
              extra soft to touch.
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
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№534 03.jpg`}
                alt=""
                style={{
                  maxWidth: "none",
                  height: "auto",
                  verticalAlign: "middle",
                  borderStyle: "none",
                  animationName: "fadeInLeft",
                  animationFillMode: "both",
                  animationDuration: "3s",
                  width: "1000px",
                }}
              />
            </figure>
          </Grid>
        </Grid>

        {/* Section 04 */}
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№534 04.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Quick Boost Mode
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Patience is a virtue, but who's got the time? Just press boost
              mode, and your styling plates are ready to go in a mere 30
              seconds. That’s faster than it takes to wash your hands.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№534 05.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Precise temperature control
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A good hair straightener must almost be as temperature-sensitive
              as human hair. Steps of 10°C are perfect. They allow you to
              approach your ideal temperature carefully.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№534 06.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Spring-mounted styling plates
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Pressure is force, and too much is not a good idea. Carrera's
              spring-loaded styling plates spread the pressure evenly,
              protecting your hair from snagging or too much stress.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№534 07.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              WE LOVE DETAILS
            </Typography>
            <Typography variant="body2" color="textSecondary">
              All products are presented on Carrera yellow background with a
              little text information about the product's key features. All
              packaged up a ready to go with style.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 05 */}
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
          <Grid item xs={12} md={10} sx={{ margin: "5rem" }}>
            <ZoomVideo
              src={`${process.env.PUBLIC_URL}/images/logged_out/№534 08.jpg`}
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
              <ul class="p-0 list-style-3">
                <li>
                  Floating styling plates with a length of 110 mm and a width of
                  25 mm
                </li>
                <li>
                  Rounded styling plates infused with argan oil &amp; keratin
                  for perfectly shiny hair
                </li>
                <li>Permanently ionised by ion generator</li>
                <li>
                  Temperature setting from 140 to 220°C (in steps of 10°C)
                </li>
                <li>Illuminated LED display for digital temperature control</li>
                <li>Protection against overheating</li>
                <li>Automatic switch-off after 30 min</li>
                <li>360° swivel cord</li>
                <li>Colour: CRR Graphite Grey / Titanium</li>
                <li>Accessories: heat-resistant storage pouch</li>
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

export default withStyles(styles, { withTheme: true })(N_534);
