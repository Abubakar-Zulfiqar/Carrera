import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Grid,
  Typography,
  Box,
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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
    },
  },
});

const N_631 = (props) => {
  const { classes, theme } = props;
  const [isVisible, setIsVisible] = useState(false);

  const data =
  {
    id: uuid(),
    name: "Hair Dryer 631",
    price: 99.99,
    image: `${process.env.PUBLIC_URL}/images/logged_out/№631 01.jpg`,
  }

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
                AC HAIR DRYER №631
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
                Salon style every time
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
                To get professional styling and drying results at home, you need
                the right tool: a Carrera hairdryer with a powerful AC motor.
                That’s what’s at the heart of every professional salon tool.
                With 2,400 watts, the Carrera AC Hairdryer can accelerate the
                controlled airstream to speeds faster than a hurricane! Plus it
                has all the features you'd expect from a salon quality styling
                tool.
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
                src={data.image}
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
                AC motors – for true salon power that lasts
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
                They may weigh a little more, but with that slight extra weight
                comes a whole heap of extra power. And this power to weight
                ratio is exactly what a professional stylist is looking for in a
                quality styling tool. That comes in at 2,400 watts for those who
                are counting. And with a perfectly balanced weight of only 984g
                the ergonomic rubber accented handle makes it easy to keep a
                firm and controlled grip on all that power.
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
                    <b>Argan oil and keratin for silky tangle free hair</b>
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
                    <b>190 km/h air stream speed for fast drying</b>
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
                    <b>Cool shot styles with air alone, no heat</b>
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
              </ul>
            </Grid>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№631 02.jpg`}
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
                    <b>AC motor lasts 4 x longer than other motors</b>
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
                    <b>24,000 watts of pure drying power</b>
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
                    <b>Ioniser switch for healthy looking hair</b>
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
            backgroundColor: "#f8f8f8",
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
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Power and precision
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
              Why do professional salon stylists use narrower nozzles than your
              home hairdryer? Because they want precision power.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "26px",
              }}
            >
              It's easier to style precisely and creatively when you use a
              narrower nozzle, particularly when using a round brush. And the
              narrower the nozzle the more powerful the air flow. It's these
              sort of differences that make the Carrera hairdryer the choice of
              professionals.
            </Typography>
          </Grid>
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№631 03.jpg`}
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
        <Grid container direction="row" sx={{ marginTop: "10rem" }}>
          <Grid xs={6}>
            <figure>
              <img
                className={classNames(classes.img)}
                src={`${process.env.PUBLIC_URL}/images/logged_out/№631 04.jpg`}
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
              Millions of ions at your fingertips - Invisible particles that
              have a visible effect
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
              You can't actually see an ion, but you'll be really happy that
              these little negatively charged atoms are there. The ions mix into
              the airstream as they flow from the ion generator, wrapping
              themselves around your hair follicles creating a smooth,
              fizz-free, lustrous result. Also your hair dries much quicker,
              which is a welcome bonus. The ioniser can be switched on and off
              to suit your styling requirements.
            </Typography>
          </Grid>
        </Grid>

        {/* Section 05 */}
        <Grid
          container
          direction="row"
          sx={{
            marginTop: "10rem",
            backgroundColor: "#f8f8f8",
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
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Blow dry with argan oil & keratin - otherwise it's just hot air
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
              Both these ingredients are fantastic for your hair. And the air
              nozzle exit grille is coated with argan oil and keratin molecules,
              enhancing the warm airstream and creating a true spa experience at
              home.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                animationDuration: "1s",
                animationName: "fadeInUp",
                animationFillMode: "both",
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "26px",
              }}
            >
              When it comes to desired products that enhance the health of your
              hair you cannot do better than argan oil and Keratin - a very
              powerful combination. Argan oil is one of the most valued
              plant-based hair treatment oils and provides essential moisture
              while strengthening roots and helping prevent split ends. Keratin
              helps your hair remain tangle and frizz free while boosting
              elasticity and adding volume.
            </Typography>
          </Grid>
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№631 05.jpg`}
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№631 06.jpg`}
              alt=""
            />
            <Typography variant="body1">POWER BOOST</Typography>
            <Typography variant="body2" color="textSecondary">
              When a 2,400 watt turbine sucks in air and presses it through an
              extra-narrow styling nozzle, the result is an airstream of 190
              km/h. That’s a bit like sticking your head out of the car window.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№631 07.jpg`}
              alt=""
            />
            <Typography variant="body1">LONG LIFE</Typography>
            <Typography variant="body2" color="textSecondary">
              AC motors built like ours withstand much higher thermal and
              mechanical loads and outlast four generations of conventional DC
              motors. So to save money and protect the environment, it pays to
              buy an AC hairdryer as soon as possible.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№631 08.jpg`}
              alt=""
            />
            <Typography variant="body1">CERAMIC COATED GRILLE</Typography>
            <Typography variant="body2" color="textSecondary">
              More physics: grilles with simple surfaces disturb the airstream
              and create heat spots that can harm hair. Ceramics are different;
              they ensure a homogeneous airstream with smooth, even heat
              distribution.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№631 09.jpg`}
              alt=""
            />
            <Typography variant="body1">POWERFUL AIR STREAM</Typography>
            <Typography variant="body2" color="textSecondary">
              Power in and speed out: the airstream hits damp hair at 190 km/h
              to open up new possibilities for faster drying and better styling.
              It also means you’re finished styling quicker.
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№631 10.jpg`}
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
                  AC motor lasts four times longer than conventional DC motor
                </li>
                <li>Power boost: 2400 W for airstream speeds up to 190 km/h</li>
                <li>Ultra-slim styling nozzle for precision results</li>
                <li>
                  Ceramic coated air outlet grille ensures an even heat
                  distribution and prevents heat spots on hair
                </li>
                <li>Separate on/off switch for ionizer</li>
                <li>
                  Airstream enhanced with argan oil and keratin for perfectly
                  shiny hair
                </li>
                <li>3 heat / 2 speed settings</li>
                <li>Cool shot</li>
                <li>Cable length: 3m</li>
                <li>Protection against overheating</li>
                <li>Detachable air inlet grille for easy cleaning</li>
                <li>Runs on 220 to 240 V mains power</li>
                <li>Ergonomic professional grip</li>
                <li>Hanging loop</li>
                <li>
                  Accessories: volume diffusor, professional styling nozzle
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

export default withStyles(styles, { withTheme: true })(N_631);
