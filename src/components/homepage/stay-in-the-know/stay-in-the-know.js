import React from "react"
import Img from "gatsby-image"

const StayInTheKnow = ({
  title,
  blurbText,
  ctaTitle,
  ctaLink,
  upcomingEvent,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{blurbText.blurbText}</p>
      <a href={ctaLink}>
        <button type="button">{ctaTitle}</button>
      </a>
      <h2>{upcomingEvent.title}</h2>
      <Img
        className="featured"
        fluid={upcomingEvent.featuredImage.fluid}
        alt={upcomingEvent.featuredImage.description}
      />
    </>
  )
}

export default StayInTheKnow
