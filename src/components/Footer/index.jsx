import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <NightModeButton
      onClick={() => toggleTheme()} theme={theme}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
