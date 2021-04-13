import styled from "styled-components"
import { white, navyBlue, royalBlue } from "../../constants/colors"
import footerHex from "../../images/footer-hex.svg"
import { fonts, fontWeights } from "../../constants/typography"
import { size } from "../../constants/devices"

export const FooterContainer = styled.div`
  background-color: ${navyBlue};
  padding: 40px 100px 40px 100px;
  font-family: "Work Sans", sans-serif;
  color: white;
  background-image: url("${footerHex}");
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: ${size.tablet}px) {
    padding: 40px;
  }
`
export const FooterRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const FooterLinks = styled.div`
  color: white;
  column-count: 2;
  margin-top: auto;
  @media only screen and (max-width: ${size.laptop}px) {
    column-count: 1;
  }
`

export const FooterLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-weight: ${fontWeights.medium};
  font-size: 16px;
  text-decoration: none;
  color: ${white};
  display: block;
  margin-bottom: 4px;
  margin-right: 30px;
  &:hover {
    color: ${white};
  }
  @media only screen and (max-width: ${size.tablet}px) {
    font-size: 14px;
  }
`

export const FooterSubsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const FooterDescription = styled.h3`
  font-family: "Work Sans", sans-serif;
  font-size: 72px;
  @media only screen and (max-width: ${size.tablet}px) {
    font-size: 36px;
  }
`

export const FooterContactContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
export const FooterScroll = styled.div`
  margin-bottom: auto;
  cursor: pointer;
  align-self: flex-end;
  font-weight: ${fontWeights.medium};
`

export const FooterContactContainerEmail = styled(FooterContactContainer)`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
  @media only screen and (max-width: ${size.laptop}px) {
    margin-bottom: 0;
  }
  @media only screen and (max-width: ${size.tablet}px) {
    font-size: 14px;
    display: none;
  }
`

export const FooterContactContainerEmailSmall = styled(
  FooterContactContainerEmail
)`
  margin-top: 24px;
  display: none;
  @media only screen and (max-width: ${size.tablet}px) {
    display: block;
  }
`

export const FooterSocialBlock = styled.div`
  display: flex;
  margin: 18px 0 48px 0;
  @media only screen and (max-width: ${size.tablet}px) {
    display: initial;
    column-count: 2;
  }
`

export const FooterSocialIcon = styled.div`
  width: 40px;
  margin-left: 12px;

  @media only screen and (max-width: ${size.tablet}px) {
    margin: 0 0 12px 0;
  }
`

export const ConnectContactText = styled.p`
  font-family: "Work Sans", sans-serif;
  color: white;
  font-weight: ${fontWeights.medium};
  @media only screen and (max-width: ${size.tablet}px) {
    margin: 0;
  }
`

export const MailtoLink = styled.a`
  line-height: 20px;
  margin-left: 16px;
  text-decoration: none;
  font-family: "Work Sans", sans-serif;
  color: white;
  border-bottom: 2px solid white;
  @media only screen and (max-width: ${size.tablet}px) {
    margin: 0;
  }
`

export const MailingListLabel = styled.label`
  font-weight: ${fontWeights.medium};
  @media only screen and (max-width: ${size.tablet}px) {
    margin-bottom: 12px;
    width: 100%;
  }
`

export const MailingListBlock = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: ${size.laptop}px) {
    margin-top: 48px;
  }
  @media only screen and (max-width: ${size.tablet}px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`

export const MailingListSmall = styled.div`
  display: flex;
`

export const MailingListInput = styled.input`
  background-color: #1a2e75;
  border: none;
  color: ${white};
  padding: 12px;
  width: 250px;

  margin: 0 16px;
  &::placeholder {
    color: white;
    opacity: 1;
    font-style: italic;
  }
  @media only screen and (max-width: ${size.tablet}px) {
    margin-left: 0;
    max-width: 250px;
    width: 100%;
  }
`

export const MailingListButton = styled.button`
  align-self: stretch;
  background-color: ${royalBlue};
  color: ${white};
  border-radius: 50px;
  border: 1px solid ${royalBlue};
  padding: 0 38px;
  letter-spacing: 1px;
  font-family: ${fonts.button};
  font-size: 14px;
  font-weight: ${fontWeights.medium};
  transition: all 0.2s;
  &:hover {
    background-color: transparent;
    border: 1px solid ${royalBlue};
    color: royalBlue;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
  @media only screen and (max-width: ${size.mobileMax}px) {
    padding: 0 12px;
  }
`
