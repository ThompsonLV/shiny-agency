// Importation des librairies et fichiers
import Card from '../../components/Card'
import styled from 'styled-components'
import color from '../../utils/style/colors'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/atoms'

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
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

  // Mise en place de l'appel à l'API
  useEffect(() => {
    // On crée une fonction asynchrone pour pouvoir utiliser le mot clé await
    async function fetchFreelances() {
      setDataLoading(true)
      try {
        // On utilise le mot clé await pour attendre la réponse de l'API
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelancesList(freelancersList)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
    <HomeWrapper>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitle>
      {isDataLoading ? (
        // On affiche le loader si les données sont en cours de chargement
        <Loader />
      ) : (
        // On affiche la liste des profils quand les données sont chargées
        <CardContainer>
          {freelancersList.map((profile, index) => (
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
