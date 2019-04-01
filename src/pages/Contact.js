import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Section>
      <H1>Contact</H1>
    </Section>
    <Section>
      <H2>Contact</H2>
      <Ol>
        <li>Building website components with JavaScript.</li>
        <ul>
          <li>
            React:{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://reactjs.org/
            </a>
          </li>
          <li>
            Gatsby:{" "}
            <a
              href="http://gatsbyjs.org/"
              target="_blank"
              rel="nofollow noopener"
            >
              http://gatsbyjs.org/
            </a>
          </li>
          <li>
            GraphQL:{" "}
            <a
              href="https://graphql.org/learn/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://graphql.org/learn/
            </a>
          </li>
          <li>
            React Helmet:{" "}
            <a
              href="https://github.com/nfl/react-helmet"
              target="_blank"
              rel="nofollow noopener"
            >
              https://github.com/nfl/react-helmet
            </a>
          </li>
          <li>
            react-cookie-consent:{" "}
            <a
              href="https://github.com/Mastermindzh/react-cookie-consent"
              target="_blank"
              rel="nofollow noopener"
            >
              https://github.com/Mastermindzh/react-cookie-consent
            </a>
          </li>
        </ul>
        <li>Styling components with JavaScript.</li>
        <ul>
          <li>
            styled components:{" "}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.styled-components.com/
            </a>
          </li>
          <li>
            Rebass:{" "}
            <a
              href="https://rebassjs.org/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://rebassjs.org/
            </a>
          </li>
        </ul>
        <li>Use underlying CSS techniques.</li>
        <ul>
          <li>
            normalize.css:{" "}
            <a
              href="https://necolas.github.io/normalize.css/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://necolas.github.io/normalize.css/
            </a>
          </li>
          <li>
            CSS Grid Layouts:{" "}
            <a
              href="https://css-tricks.com/snippets/css/complete-guide-grid/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://css-tricks.com/snippets/css/complete-guide-grid/
            </a>
          </li>
          <li>
            CSS Flexbox Layouts:{" "}
            <a
              href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://css-tricks.com/snippets/css/a-guide-to-flexbox/
            </a>
          </li>
        </ul>
        <li>
          Choose fonts or icons. Determine sizes, line-heights and margins.
        </li>
        <ul>
          <li>
            Google fonts:{" "}
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://fonts.google.com/
            </a>
          </li>
          <li>
            FontAwesome:{" "}
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://fontawesome.com/
            </a>{" "}
            and{" "}
            <a
              href="https://fontawesome.com/how-to-use/on-the-web/using-with/react"
              target="_blank"
              rel="nofollow noopener"
            >
              https://fontawesome.com/how-to-use/on-the-web/using-with/react
            </a>
          </li>
          <li>
            Typograhy.js:{" "}
            <a
              href="https://kyleamathews.github.io/typography.js/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://kyleamathews.github.io/typography.js/
            </a>
          </li>
          <li>
            Gridlover:{" "}
            <a
              href="https://www.gridlover.net/try"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.gridlover.net/try
            </a>
          </li>
        </ul>
        <li>Select images and make them responsive.</li>
        <ul>
          <li>
            Unsplash:{" "}
            <a
              href="https://unsplash.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://unsplash.com/
            </a>
          </li>
          <li>
            Pexels:{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://www.pexels.com/
            </a>
          </li>
          <li>
            Pixabay:{" "}
            <a
              href="https://pixabay.com/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://pixabay.com/
            </a>
          </li>
          <li>
            HTML picture tag:{" "}
            <a
              href="https://css-tricks.com/responsive-images-css/"
              target="_blank"
              rel="nofollow noopener"
            >
              https://css-tricks.com/responsive-images-css/
            </a>
          </li>
        </ul>
      </Ol>
    </Section>
    <Section>
      <H2>Roadmap</H2>
      <ul>
        <li>Document components with Markdown.</li>
        <li>
          Perform tests with react-testing-library:{" "}
          <a
            href="https://testing-library.com/react"
            target="_blank"
            rel="nofollow"
          >
            https://testing-library.com/react
          </a>
        </li>
      </ul>
    </Section>
  </Layout>
)

export default ContactPage
