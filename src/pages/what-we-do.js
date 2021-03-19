import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Layout from "../components/layout"
import SEO from "../components/seo"
import History from "../components/what-we-do/history"
import IndustryBG from "../components/what-we-do/industry-bg"
import ProgrammingCard from "../components/what-we-do/programming-card"

const WhatWeDo = props => {
  const whatWeDo = get(props, "data.contentfulWhatWeDo")

  return (
    <Layout>
      <SEO title="What We Do" />
      <h1>{whatWeDo.title}</h1>
      <History
        title={whatWeDo.history.title}
        historyMilestones={whatWeDo.history.historyMilestones}
      />
      <IndustryBG
        title={whatWeDo.industryBackgroundTitle}
        blurb={whatWeDo.industryBackgroundBlurb}
        image={whatWeDo.industryBackgroundImage}
      />
      {whatWeDo.programmingCards.map((card, index) => {
        return (
          <ProgrammingCard
            title={card.title}
            description={card.shortDescription}
            photo={card.photo}
          />
        )
      })}
    </Layout>
  )
}

export default WhatWeDo

export const pageQuery = graphql`
  query whatWeDoQuery {
    contentfulWhatWeDo {
      title
      subheadingForTitle
      history {
        title
        historyMilestones {
          title
          milestoneDescription {
            milestoneDescription
          }
        }
      }
      industryBackgroundTitle
      industryBackgroundBlurb {
        industryBackgroundBlurb
      }
      industryBackgroundImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      programmingCards {
        title
        shortDescription {
          shortDescription
        }
        photo {
          fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
          }
        }
      }
      platforms {
        platformTitle
        blurb
        ctaTitle
        ctaLink
      }
    }
  }
`
