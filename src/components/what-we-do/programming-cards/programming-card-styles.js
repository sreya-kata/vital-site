import styled from "styled-components"
import { HCapitalize, PCard } from "../../../constants/typography"
import { devices } from "../../../constants/devices"
import { white, royalBlue } from "../../../constants/colors"

const CardContainer = styled.div`
  @media ${devices.mobile} {
    width: 100%;
  }
  @media ${devices.tablet} {
    width: 60%;
  }
  @media ${devices.tabletMax} {
    margin: 0 auto;
    padding: 20px 10px 20px;
  }
  @media ${devices.laptop} {
    width: 30vw;
    padding: 50px 10px 50px;
  }
  overflow: hidden;
`

const ImageContainer = styled.div`
  @media ${devices.mobile} {
    height: 50%;
  }
  @media ${devices.laptop} {
    height: auto;
  }
  overflow: hidden;
`

const CardContentContainer = styled.div`
  background-color: ${royalBlue};
  @media ${devices.mobile} {
    height: auto;
  }
  @media ${devices.tablet} {
    height: 50vh;
  }
  @media ${devices.laptop} {
    height: 75vh;
  }
  @media (min-width: 1150px) {
    height: 69vh;
  }
  @media (min-width: 1290px) {
    height: 61vh;
  }
`

const CardContent = styled.div`
  color: ${white};
`

const CardTitle = styled(HCapitalize)`
  text-align: center;
  padding-top: 24px;
  color: ${white};
  margin: 0 auto;
  padding-bottom: 20px;
  @media ${devices.mobileMax} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const CardTitleContainer = styled.div`
  padding-top: 10px;
  padding-left: 25px;
  padding-right: 25px;
`

const TextContainer = styled.div`
  padding-bottom: 5px;
  padding-left: 30px;
  padding-right: 30px;
  @media ${devices.mobile} {
    height: auto;
    padding-bottom: 20px;
    padding-top: 5px;
  }
  @media ${devices.tablet} {
    height: 250px;
  }
  @media ${devices.laptop} {
    height: 70vh;
  }
  @media (min-width: 1220px) {
    height: 55vh;
  }
`

const PCardText = styled(PCard)`
  margin: 0 auto;
`

export {
  CardContainer,
  ImageContainer,
  CardContentContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  TextContainer,
  PCardText,
}
