import React from "react";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from '@mui/material';
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "@react-spring/web";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resume from "../../static/files/resume.pdf";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Qualification from "../components/Experience";
import Certificate from "../components/Certificate";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      //title={` ${siteConfig.title}`}
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Grid container style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Hello! I am</Translate>
              <span className="intro__name"> Lewis</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
              <Translate>
              Experienced Solution Architect specializing in Data Platforms with over 9 years of expertise in designing scalable solutions.
              </Translate>{" "}
              <br></br>
              <Translate>
              Combines a background in Finance and Banking with technical expertise in Data Lakehouse design, Apache Spark, data governance, and cloud computing. Skilled in building data pipelines, ensuring data quality, and delivering production-ready solutions aligned with regulatory standards.
              </Translate>{" "}
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>My Tech Stack:</Translate>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Azure, Terraform, Docker, Kubernetes, Python, Java, Airflow, Microsoft Fabrics, Power BI
              etc.
            </Typography>
          </animated.div>
          &nbsp;
          <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="small"
              href={resume}
            >
              <Translate>My Resume</Translate>
            </Button>
          </animated.p>
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/programming.svg")}
            style={animatedHero}
          />
        </Grid>
      </Grid>
      {/* Certificate */}
      <Grid>
        <Certificate />
      </Grid>
      {/* Experiences */}
      <Grid>
        <Qualification />
      </Grid>
      {/* Projects */}
      <Grid>
        <Projects />
      </Grid>
      {/* Contact form */}
      <Grid>
        <Contact />
      </Grid>
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/trinh-quoc-quang/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/QuangTrinh1612">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

export default Home;