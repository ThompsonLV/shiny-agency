import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'
import color from '../../utils/style/colors'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
  display: grid;
  gap: 32px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 32px;
`

const SubTitle = styled.h2`
  font-size: 20px;
  color: ${color.lightGray};
  margin-bottom: 32px;
`

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'Alberto Contador',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

function Freelance() {
  return (
    <HomeWrapper>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      <CardContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardContainer>
    </HomeWrapper>
  )
}

export default Freelance
