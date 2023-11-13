import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import DarkLogo from '../../assets/dark-logo.png'
import StyledLink from '../../utils/style/atoms.js'

// Je peux styliser les éléments de ma bibliothèque

const StyledImage = styled.img`
  width: 190px;
`

const NavContainer = styled.nav`
  display: flex;
  padding: 14px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.primary};
`

function Header() {
  return (
    <NavContainer>
      <div>
        <StyledImage src={DarkLogo} alt="logo" />
      </div>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
