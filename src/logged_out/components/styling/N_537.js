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

const N_537 = (props) => {
  const { classes, theme } = props;
  const [isVisible, setIsVisible] = useState(false);

  const data = {
    id: 6,
    name: "Carrera Curling Tong",
    price: 69.99,
    image: `${process.env.PUBLIC_URL}/images/logged_out/№537 01.jpg`,
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
                CURLING TONG №537
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
                Your stylist’s magic touch at home
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
                src={`${process.env.PUBLIC_URL}/images/logged_out/№537 01.jpg`}
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
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  animationDuration: "3s",
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
                When you have premium salon features it doesn't have to take all
                day to create the curls you crave. With an extra long, superior
                quality ceramic coated styling area you can produce long-lasting
                lustrous curls up to 25% quicker than other so-called
                'professional' tongs. You also have the truly provessional
                features of a digital LED display, precise temperature control
                settings and a Cool Touch Tip for safe styling.
              </Typography>
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
          <Grid item direction="column" sx={{ margin: "0 15rem 0 15rem" }}>
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
                }}
              >
                When it comes to performance, every detail counts
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                textAlign="center"
                sx={{
                  animationDuration: "3s",
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
                Carrera curling tongs combine a unique range of premium features
                to ensure salon quality curling every time.
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row">
            <Grid item xs={3}>
              <ul style={{ margin: "2rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    Cool Touch Tip heat-insulated tip for safe handling.
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
                    26 mm diameter is ideal for soft curls in any length hair.
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
                    120°C to 210°C in 10 degree steps for precise temperature
                    selection.
                    <Divider sx={{ margin: "1rem 0 1rem 0" }} />
                  </span>
                </li>
              </ul>
            </Grid>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№537 02.jpg`}
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
              <ul style={{ margin: "2rem 0 0 10px", listStyle: "none" }}>
                <li data-aos="zoom-in-up">
                  <span
                    className={`span-text ${isVisible ? "span-text-visible" : ""
                      }`}
                  >
                    25% faster styling with the extra long styling area.
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
                    High quality ceramic coating for perfect heat distribution
                    and the right balance of smoothness and grip.
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
                    Illuminated LED display for ongoing temperature control.
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
                color: "#232323",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "40px",
                lineHeight: "46px",
              }}
            >
              Bigger tongs for better curls
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
              The bigger than average surface area of the Carrera curling tongs
              make short work of long thick hair creating better curls even
              quicker.
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
              And it's not just the length that counts, the premium ceramic
              coating is super important too - ensuring uniform heat
              distribution across every strand of your hair, producing wonderful
              curls with a smooth and even sheen.
            </Typography>
          </Grid>
          <Grid xs={6} data-aos="zoom-in-up">
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/images/logged_out/№537 03.jpg`}
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
              Your curls deserve silicone
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
              For some styling choices it seems you have to be cruel to be kind
              and we all know that creating curls needs heat, but that heat can
              sometimes damage the ends of your hair and that's a problem, but
              when it comes to curling with Carrera, thankfully, it's a problem
              solved. With precise temperature controls and a strip of silicone
              on the heating element you can use less pressure and therefore
              less heat while still getting the prefect results. The Carrera
              curling tong along with its many professional features allows you
              to perform crazy cool curling that is also quick, kind and caring.
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
            <figure>
              <img
                className={classNames(classes.img)}
                src={`${process.env.PUBLIC_URL}/images/logged_out/№537 04.jpg`}
                alt=""
                style={{
                  animationName: "fadeInLeft",
                  animationFillMode: "both",
                  animationDuration: "3s",
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
              src={`${process.env.PUBLIC_URL}/images/logged_out/№537 05.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Digital precision
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Why guess when you can have precision temperature control from
              120°C to 210°C in 10 degree steps instead? When you reach the
              temperature you want, just press ’lock’ and you're ready.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№537 06.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              Unbeatable ceramics
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A curling tong is only as good as its surface material. Treat your
              hair to a high quality ceramic coating that protects it from heat
              spots and is really smooth, yet still grips well.
            </Typography>
          </Grid>
          <Grid item xs={4} style={{ width: "70%" }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logged_out/№537 07.jpg`}
              alt=""
            />
            <Typography variant="body1" sx={{ textTransform: "uppercase" }}>
              The perfect diameter
            </Typography>
            <Typography variant="body2" color="textSecondary">
              The perfect mid-range diameter of 26 cm gives you total design
              freedom for everything from natural-looking curls to gentle waves
              or beautifully flowing tresses.
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
          <Grid item xs={12} md={10} sx={{ margin: "5rem" }}>
            <ZoomVideo
              src={`${process.env.PUBLIC_URL}/images/logged_out/№537 08.jpg`}
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
                <li>Ø 26 mm curling tong for soft curls</li>
                <li>Extra-long styling area for 25 % faster styling</li>
                <li>Silicone protective strip for healthy hair tips</li>
                <li>Styling area with ceramic coating</li>
                <li>
                  Precise temperature settings from 120 to 210°C (in 10 degree
                  steps)
                </li>
                <li>Illuminated LED display for digital temperature control</li>
                <li>Boost function: quick heating in 30 seconds</li>
                <li>Automatic safety shutoff after 30 minutes</li>
                <li>
                  Cool touch tip: heat-insulated curling tong head for safe,
                  precise styling
                </li>
                <li>Lock feature prevents accidental temperature changes</li>
                <li>Extra-long power cord with 360° swivel joint</li>
                <li>Hanging loop</li>
                <li>Accessories: Storage pouch</li>
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

export default withStyles(styles, { withTheme: true })(N_537);
