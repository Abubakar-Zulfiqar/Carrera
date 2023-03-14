import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Container,
  Divider,
} from "@mui/material";
import classNames from "classnames";
import withStyles from "@mui/styles/withStyles";

import Header from "./Header";
import ShareButton from "../../../shared/components/ShareButton";
import ZoomVideo from "../../../shared/components/ZoomVideo";

import "../../../index.css";

const styles = (theme) => ({
  btn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
    },
  },
});

const N_531 = (props) => {
  const { classes, theme } = props;
  const [isVisible, setIsVisible] = useState(false);

  const data = {
    id: 2,
    name: "Hair Dryer 531",
    price: 59.99,
    image: `${process.env.PUBLIC_URL}/images/logged_out/№531 01.jpg`,
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
        <Grid container spacing={5} sx={{ marginTop: "15rem" }}>
          <Grid container md={10} direction="row">
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
                AC HAIR DRYER №531
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
                Style it like a pro
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
                Let's put the awesome power on the backseat and start with the
                permanent ionisation instead. Ionisation helps dry hair without
                leaving it full of static electricity. And these little ions
                also make your hair smoother, healthier and shinier too.
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
                src={`${process.env.PUBLIC_URL}/images/logged_out/№531 01.jpg`}
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
                }}
              >
                Thousands of watts from one turbine
              </Typography>
            </Grid>
            <Grid item>
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
                A wind turbine that scoops air rather than simply propelling it
                goes to create a powerful stream of hot air. Driven by a
                titanium and ceramic coated 2400 watt direct current motor that
                can supply all the hot air power you need.
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
                    <b>
                      2400 Watt Power Boost, courtesy of a long life DC motor
                    </b>
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
                    <b>AC blower design</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
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
                    <b>Lightweight construction</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
              </ul>
            </Grid>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№531 02.jpg`}
                alt=""
                style={{
                  animationDuration: "2s",
                  animationName: "fadeInUp",
                  animationFillMode: "both",
                  height: "auto",
                  width: "30rem",
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
                    <b>Argan Oil & Keratin infused</b>
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
                    <b>Constant ionisation</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
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
                    <b>Stying nozzle & volume diffuser</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
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
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              For hair that shines
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
              A ceramic coated exit grille ensures that there are no uneven heat
              spots that can dry out and damage hair, plus the styling nozzle is
              coated with argan oil molecules that enhance the airstream
              creating smoother hair and quicker styling.
            </Typography>
          </Grid>
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№531 03.jpg`}
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
        <Grid container direction="row">
          <Grid xs={6}>
            <figure>
              <img
                className={classNames(classes.img)}
                src={`${process.env.PUBLIC_URL}/images/logged_out/№531 04.jpg`}
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
                fontWeight: 500,
                marginBottom: "2rem",
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Style like a pro with Cool Shot
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
              }}
            >
              The best thing about a controlled blast of cold air is that it
              closes the pores on the hair as you style, fixing your style
              faster, producing a lustrous, healthy shine.
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
              Because sometimes size matters
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
              You don't have to get bogged down in airstream physics to know
              that the smaller the nozzle, the faster the airflow and the
              greater degree of precision control you have to work with. And
              precision power means higher accuracy and better styling.
            </Typography>
          </Grid>
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№531 05.jpg`}
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

        {/* Section 06 */}
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№531 06.jpg`}
              alt=""
            />
            <Typography variant="body1">LIGHTWEIGHT</Typography>
            <Typography variant="body2" color="textSecondary">
              Why did Carrera choose a DC motor? Because DC motors are lighter
              than AC motors, and they wanted the best power-to-weight ratio.
              The dryer weighs just 576 grammes with styling nozzle.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№531 07.jpg`}
              alt=""
            />
            <Typography variant="body1">TITANUIM CERAMIC COATING</Typography>
            <Typography variant="body2" color="textSecondary">
              Ceramics have high mechanical rigidity; titanium resists corrosion
              and extreme temperatures really effeciently. Used together, they
              also enable the DC motor to rev much higher and faster.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№531 08.jpg`}
              alt=""
            />
            <Typography variant="body1">CONSTANT IONIZATION</Typography>
            <Typography variant="body2" color="textSecondary">
              You want to dry and style your hair, not charge it with static
              electricity. That’s why it feeds ions into the airstream
              constantly. Ions help by smoothing the hair for a lustrous look.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№531 09.jpg`}
              alt=""
            />
            <Typography variant="body1">WE LOVE DETAILS</Typography>
            <Typography variant="body2" color="textSecondary">
              All products are presented on Carrera yellow background with a
              little text information about the product's key features. All
              packaged up a ready to go with style.
            </Typography>
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
          <Grid item xs={12} md={10} sx={{ margin: "5rem" }}>
            <ZoomVideo
              src={`${process.env.PUBLIC_URL}/images/logged_out/№531 10.jpg`}
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
                <li>2400 W power</li>
                <li>
                  Power boost: durable DC motor with titanium and ceramic
                  coating and AC turbine
                </li>
                <li>
                  Ceramic coated air outlet grille ensures an even heat
                  distribution and eliminates heat spots on the hair
                </li>
                <li>Permanently ionised</li>
                <li>
                  Air flow infused with argan oil &amp; keratin for perfectly
                  shiny hair
                </li>
                <li>3 heating levels / 2 speed levels</li>
                <li>Cool shot</li>
                <li>Cable length: 3m</li>
                <li>Protection against overheating</li>
                <li>
                  Lightweight construction with only 576 gram (with styling
                  nozzle)
                </li>
                <li>Removable air inlet filter</li>
                <li>Colour: CRR Graphite Grey / Titanium</li>
                <li>Accessories: styling nozzle, volume diffuser</li>
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

export default withStyles(styles, { withTheme: true })(N_531);
