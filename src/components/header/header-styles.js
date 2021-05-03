import styled from "styled-components"
import { white, headerGradient } from "../../constants/colors"
import { devices } from "../../constants/devices"

const HeaderContainer = styled.div`
  background: ${headerGradient};
  color: ${white};
`

const TextContainer = styled.div`
  padding-left: 75px;
  padding-top: 170px;
  padding-bottom: 40px;
`

const ImageContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: auto;
  opacity: ${props => (props.imageBool ? "1" : "0")};
  display: ${props => (props.imageBool ? "inline" : "none")};
`

const BackgroundShape = styled.img`
  padding-bottom: 490px;
  transform: rotate(11deg);
  @media (max-width: 1200px) {
    opacity: ${props => (props.title.length > 15 ? "0" : "1")};
  }
  @media ${devices.tabletMax} {
    opacity: 0;
  }
`

export { HeaderContainer, TextContainer, ImageContainer, BackgroundShape }
