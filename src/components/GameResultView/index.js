import {
  ResultContainer,
  ResultContainerImages,
  User,
  ResultImagesContainer,
  MatchResult,
  PlayAgainButton,
  Image,
} from './styledComponents'

const GameResultView = props => {
  const {
    userChoice,
    opponentChoice,
    matchResult,
    choicesList,
    restartGame,
  } = props
  const userChoiceImgUrl = choicesList.filter(
    choice => choice.id === userChoice,
  )
  const userChoiceImageUrl = userChoiceImgUrl[0].imageUrl
  const opponentChoiceImgUrl = choicesList.filter(
    choice => choice.id === opponentChoice,
  )
  const opponentChoiceImageUrl = opponentChoiceImgUrl[0].imageUrl

  const onClickPlayAgain = () => {
    restartGame()
  }

  return (
    <>
      <ResultContainer>
        <ResultImagesContainer>
          <ResultContainerImages>
            <User>YOU</User>
            <Image src={userChoiceImageUrl} />
          </ResultContainerImages>
          <ResultContainerImages>
            <User>OPPONENT</User>
            <Image src={opponentChoiceImageUrl} />
          </ResultContainerImages>
        </ResultImagesContainer>
      </ResultContainer>
      <MatchResult>{matchResult}</MatchResult>
      <PlayAgainButton onClick={onClickPlayAgain}>PLAY AGAIN</PlayAgainButton>
    </>
  )
}
export default GameResultView
