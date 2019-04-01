import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const GalleryPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        This is about...
      </H1>
      <H3>Two columns achieved with CSS flexbox</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            tempora eaque, officiis perspiciatis hic facilis aperiam ea.
            Laboriosam eum laudantium eos expedita ipsa omnis repudiandae
            repellat quasi, nemo accusantium odit.
          </P>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>
            Elit non anim proident amet id minim. Dolor fugiat adipisicing
            labore sunt sit laborum laboris. Excepteur proident eu do dolore
            commodo laborum dolor. Eiusmod enim esse in proident pariatur
            commodo consequat occaecat amet.
          </P>
        </Box>
      </Flex>
      <Section>
        <H3>Two columns achieved with CSS grid</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Occaecat aliqua excepteur labore anim quis aliquip. Do amet proident
          veniam dolore. Do non esse dolor nostrud in ipsum aliquip velit
          cupidatat esse dolor veniam aliqua. Pariatur enim exercitation eu
          occaecat. Occaecat reprehenderit reprehenderit cupidatat et fugiat
          veniam ea labore occaecat dolor magna.
        </P>
        <P>
          Cillum aliquip exercitation ut culpa sit. In ullamco aliqua occaecat
          pariatur officia qui magna labore aute. Consectetur irure est ex
          exercitation. Elit fugiat irure adipisicing elit tempor fugiat dolor
          esse occaecat. Dolor sint eu mollit et reprehenderit aute sunt dolor
          eu qui aliquip dolore reprehenderit magna.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default GalleryPage
