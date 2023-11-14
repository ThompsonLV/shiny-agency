// Importation des librairies et fichiers
import Card from '../../components/Card'
import styled from 'styled-components'
import color from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch } from '../../utils/hooks'

// Création des composants stylisés
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
// Création du composant
function Freelance() {

  const { isLoading, data, error } = useFetch(
    `http://localhost:8000/freelances`,
    )


    if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  // Ici le "?" permet de s'assurer que data existe bien.
  // Je garde la notation resultsData pour que ce soit plus clair, mais il faudrait
  // renommer resultsData en freelancersList
  // Attention à bien lire la doc, freelancersList est une clé d'où le "data?.freelancersList"
  const resultsData = data?.freelancersList

  return (
    <HomeWrapper>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      {isLoading ? (
        // On affiche le loader si les données sont en cours de chargement
        <Loader />
      ) : (
        // On affiche la liste des profils quand les données sont chargées
        <CardContainer>
          {/* Je reprends les éléments de results map */}
          {resultsData.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardContainer>
      )}
    </HomeWrapper>
  )
}

export default Freelance
