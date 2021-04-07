import styled from "styled-components"
import { H2 } from "../../../constants/typography"
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
    height: 50%;
  }
  @media ${devices.laptop} {
    height: 500px;
  }
  @media (min-width: 1150px) {
    height: 420px;
  }
  @media (min-width: 1290px) {
    height: 400px;
  }
  @media ${devices.desktop} {
    height: 380px;
  }
`

const CardContent = styled.div`
  color: ${white};
`

const CardTitle = styled(H2)`
  text-align: center;
  padding-top: 24px;
  color: ${white};
  margin: 0 auto;
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
  padding-top: 20px;
  @media ${devices.mobileMax} {
    padding-top: 5px;
    height: auto;
    padding-bottom: 20px;
  }
`

export {
  CardContainer,
  ImageContainer,
  CardContentContainer,
  CardContent,
  CardTitle,
  CardTitleContainer,
  TextContainer,
}
