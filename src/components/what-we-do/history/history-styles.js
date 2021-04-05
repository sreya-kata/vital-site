import styled from "styled-components"
import Img from "gatsby-image"
import { size, devices } from "../../../constants/devices"

const Title = styled.div`
  padding-left: 75px;
`

const RegularImage = styled(Img)`
  @media (max-width: ${size.tablet}px) {
    display: none;
  }
`

const MobileImage = styled(Img)`
  @media ${devices.tablet} {
    display: none;
  }
`

export { Title, RegularImage, MobileImage }
