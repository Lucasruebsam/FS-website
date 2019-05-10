import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import Figure from "../components/Figure"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
//import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

import img1 from "../images/gallery/1.jpg"
import img2 from "../images/gallery/2.jpg"
import img3 from "../images/gallery/3.jpg"
import img4 from "../images/gallery/4.jpg"
import img5 from "../images/gallery/5.jpg"
import breakpoints from "../theme/breakpoints"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Section>
      <H1>Welcome to my Gallery</H1>
      <H3>Check out my latest content on Youtube down below!</H3>
      <Carousel autoPlay stopOnHover infiniteLoop>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
      </Carousel>
      <H3>Here are my newest Videos on Youtube!</H3>
      <RespGrid min={"240px"}>
        <Box>
          <iframe
            width="500"
            height="281"
            src="https://www.youtube.com/embed/J2AYK_ueqr0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Box>
        <Box>
          <iframe
            width="500"
            height="281"
            src="https://www.youtube.com/embed/TRDN9dw0h0Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default GalleryPage
