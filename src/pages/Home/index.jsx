import HomeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import { StyledLink } from '../../utils/style/atoms.js'

const HomeWrapper = styled.div`
  display: flex;
  background-color: ${colors.backgroundLight};
  padding: 90px 50px;
  margin: 48px;
`

const StyledTitle = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 80px;
`
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 150px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <HomeWrapper>
      <LeftColumn>
        <StyledTitle>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents{' '}
        </StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </LeftColumn>
      <Illustration
        src={HomeIllustration}
        alt="home-illustration"
      ></Illustration>
    </HomeWrapper>
  )
}

export default Home
