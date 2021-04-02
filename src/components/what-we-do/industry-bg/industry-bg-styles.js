import styled from "styled-components"
import { size, devices } from "../../../constants/devices"
import { darkGray } from "../../../constants/colors"

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media ${devices.tablet} {
    padding: 10px 80px;
  }
  @media (max-width: ${size.laptop}px) {
    display: block;
    padding: 10px 30px;
  }
`

const TextContainer = styled.div`
  width: 45%;
  color: ${darkGray};
  @media ${devices.tabletMax} {
    width: 100%;
  }
`

const Text = styled.div`
  @media ${devices.laptop} {
    padding-right: 40px;
    position: relative;
    top: 50%;
    transform: translateY(-55%);
  }
`

const ImageContainer = styled.div`
  width: 55%;
  @media ${devices.tabletMax} {
    width: 100%;
  }
`

const Image = styled.img`
  max-height: 100%;
`

export { Container, TextContainer, Text, ImageContainer, Image }
