import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { animations } from "../../constants/animations"
import { Hamburger, Cross } from "../../constants/icons"
import {
  NavWrapper,
  NavBrandWrapper,
  NavLink,
  NavBrand,
  NavButton,
  FlexColumn,
  SmallNavLinkContainer,
  SmallMenuContainer,
  SmallLinksContainer,
  CrossContainer,
} from "./nav-bar-styles.js"

const NavBar = ({ navbarstyle }) => {
  const [smallLinks, setSmallLinks] = useState(false)
  const [delay, setDelay] = useState(false)

  useEffect(() => {
    if (delay) {
      const interval = setInterval(() => {
        setDelay(false)
        setSmallLinks(false)
      }, animations.navBarFadeLength * 1000)
      return () => clearInterval(interval)
    }
  }, [delay])

  return (
    <NavWrapper navbarstyle={navbarstyle}>
      <FlexColumn>
        <NavBrandWrapper to="/">
          <NavBrand>ViTAL</NavBrand>
        </NavBrandWrapper>
      </FlexColumn>
      <FlexColumn>
        <NavLink navbarstyle={navbarstyle} to="/what-we-do">
          About
        </NavLink>
        <NavLink navbarstyle={navbarstyle} to="/whats-happening">
          Events
        </NavLink>
        <NavLink navbarStyle={navbarStyle} to="/our-team">
          Team
        </NavLink>
      </FlexColumn>
      <FlexColumn>
        <NavButton
          navbarstyle={navbarstyle}
          onClick={() => navigate("/get-involved")}
        >
          Get Involved
        </NavButton>
      </FlexColumn>
      <SmallNavLinkContainer onClick={() => setSmallLinks(true)}>
        <FlexColumn>
          <Hamburger navbarstyle={navbarstyle} />
        </FlexColumn>
      </SmallNavLinkContainer>
      {smallLinks && (
        <SmallMenuContainer out={delay}>
          <CrossContainer onClick={() => setDelay(true)}>
            <Cross />
          </CrossContainer>
          <SmallLinksContainer>
            <NavLink to="/what-we-do">About</NavLink>
            <NavLink to="/whats-happening">Events</NavLink>
            <NavLink to="/our-team">Team</NavLink>
            <NavLink to="/get-involved">Get Involved</NavLink>
          </SmallLinksContainer>
        </SmallMenuContainer>
      )}
    </NavWrapper>
  )
}

export default NavBar
