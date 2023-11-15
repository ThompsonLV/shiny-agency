import ErrorPage from '../../assets/404.jpg'
import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#ffffff' : '#000000'};
  padding: 50px 50px;
  margin: 0 48px;
  align-items: center;
  justify-content: center;
`

const Illustration = styled.img`
  width: 40%;
  border-radius: 12px;
  margin-bottom: 32px;
  width: 875px;
  object-fit: cover;
`

const StyledTitle = styled.h2`
  margin-bottom: 32px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

function Error() {
  const { theme } = useTheme()
  return (
    <ErrorWrapper theme={theme}>
      <StyledTitle theme={theme}>Oups ...</StyledTitle>
      <StyledTitle theme={theme}>
        Il semblerait qu'il y ait un problème
      </StyledTitle>
      <Illustration src={ErrorPage} alt="error-img" />
    </ErrorWrapper>
  )
}

export default Error
