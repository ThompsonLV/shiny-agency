import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from './colors'

const StyledLink = styled(Link)`
  padding: 12px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

export default StyledLink
