import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'

// Création d'un composant stylisé
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.violet : '#ffffff')};
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 32px;
`
const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 50%;
  align-self: center;
  margin-bottom: 32px;
  object-fit: cover;
`

const CartName = styled.span`
  align-self: center;
  font-size: 22px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  const { theme } = useTheme()
  return (
    <CardWrapper theme={theme}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CartName theme={theme}>{title}</CartName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
