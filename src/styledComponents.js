import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  height: 100vh;
  background-size: cover;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  border: 1px solid white;
`
export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  font-family: Roboto;
`

export const Title = styled.h1`
  font-size: 20px;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 200px;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
`
export const ImageButton = styled.button`
  background-color: transparent;
  border: 0px;
`
export const Image = styled.img`
  height: 80px;
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 200px;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
`
export const ResultContainerImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const User = styled.h3`
  color: white;
`
export const ResultImagesContainer = styled.div`
  display: flex;
`
export const MatchResult = styled.p`
  color: white;
  align-self: center;
`

export const PlayAgainButton = styled.button`
  color: black;

  align-self: center;
`
