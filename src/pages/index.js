import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import img02_4x1 from "../images/1920/4x1/02.jpg"
import img02_21x9 from "../images/1440/21x9/02.jpg"
import img02_16x9 from "../images/1200/16x9/02.jpg"
import img02_3x2 from "../images/0800/3x2/02.jpg"
import img02_4x3 from "../images/0480/4x3/02.jpg"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Fabian Saller`, `Music`, `Singer`]} />
    <Figure caption="Photo from Patrick Temp">
      <picture>
        <source srcSet={img02_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img02_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img02_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img02_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img02_4x3} alt="Cologne" />
      </picture>
    </Figure>
    <Section>
      <H1>Hi people</H1>
      <P>Welcome to this new Gatsby site.</P>
      <P>Now you have the basis to build something great.</P>
      <P>
        Of course, you can also use icons, e.g.{" "}
        <FontAwesomeIcon icon="coffee" />, <FontAwesomeIcon icon="yin-yang" />,{" "}
        <FontAwesomeIcon icon="peace" />.
      </P>
    </Section>
  </Layout>
)

export default IndexPage
