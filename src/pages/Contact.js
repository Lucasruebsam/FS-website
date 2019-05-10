import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import img1 from "../images/gallery/1.jpg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <H1>Contact</H1>
      <H2>Fabian Saller</H2>
      <H3>booking at: fabiansaller@gmx.de</H3>
      <img src={img1} />
    </Section>
  </Layout>
)

export default ContactPage
