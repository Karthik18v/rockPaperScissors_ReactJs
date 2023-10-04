import {Component} from 'react'
import GameResultView from './components/GameResultView/index'

import {
  AppContainer,
  ScoreContainer,
  Title,
  ScoreCardContainer,
  ImageContainer,
  ImageButton,
  Image,
  ResultContainer,
  ResultContainerImages,
  User,
  ResultImagesContainer,
  MatchResult,
  PlayAgainButton,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    userChoice: 'ROCK',
    showResult: false,
    score: 0,
    opponentChoice: 'ROCK',
  }

  updateResult = (userChoiceId, opponentChoiceId) => {
    if (userChoiceId === 'ROCK') {
      switch (opponentChoiceId) {
        case 'SCISSORS':
          return 'YOU WIN'
        case 'PAPER':
          return 'YOU LOSS'
        default:
          return 'IT IS DRAW'
      }
    } else if (userChoiceId === 'SCISSORS') {
      switch (opponentChoiceId) {
        case 'PAPER':
          return 'YOU WIN'
        case 'ROCK':
          return 'YOU LOSS'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (opponentChoiceId) {
        case 'ROCK':
          return 'YOU WIN'
        case 'SCISSORS':
          return 'YOU LOSS'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onClickImage = id => {
    const userImage = choicesList.filter(choice => choice.id === id)
    const userChoiceId = userImage[0].id
    const random = Math.floor(Math.random() * 3)
    const opponentChoiceId = choicesList[random].id
    const result = this.updateResult(userChoiceId, opponentChoiceId)
    console.log(result)
    if (result === 'YOU WIN') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: userChoiceId,
        opponentChoice: opponentChoiceId,
        score: prevState.score + 1,
        matchResult: result,
      }))
    } else if (result === 'YOU LOSS') {
      this.setState(prevState => ({
        showResult: true,
        userChoice: userChoiceId,
        opponentChoice: opponentChoiceId,
        score: prevState.score - 1,
        matchResult: result,
      }))
    } else {
      this.setState({matchResult: result, showResult: true})
    }
  }

  restartGame = () => {
    this.setState({showResult: false})
  }

  renderImages = () => (
    <ImageContainer>
      <ImageButton
        data-testid="rockButton"
        onClick={() => this.onClickImage('ROCK')}
      >
        <Image src={choicesList[0].imageUrl} />
      </ImageButton>
      <ImageButton
        data-testid="scissorsButton"
        onClick={() => this.onClickImage('SCISSORS')}
      >
        <Image src={choicesList[1].imageUrl} />
      </ImageButton>
      <ImageButton
        data-testid="paperButton"
        onClick={() => this.onClickImage('PAPER')}
      >
        <Image src={choicesList[2].imageUrl} />
      </ImageButton>
    </ImageContainer>
  )

  renderResultView = () => {
    const {userChoice, opponentChoice, matchResult} = this.state
    const userChoiceImgUrl = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceImageUrl = userChoiceImgUrl[0].imageUrl
    const opponentChoiceImgUrl = choicesList.filter(
      choice => choice.id === opponentChoice,
    )
    const opponentChoiceImageUrl = opponentChoiceImgUrl[0].imageUrl
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
        <PlayAgainButton onClick={this.restartGame}>PLAY AGAIN</PlayAgainButton>
      </>
    )
  }

  render() {
    const {
      userChoice,
      opponentChoice,
      showResult,
      score,
      matchResult,
    } = this.state
    console.log(opponentChoice)
    return (
      <AppContainer>
        <ScoreContainer>
          <Title>
            Rock
            <br />
            Paper
            <br />
            Scissors
          </Title>
          <ScoreCardContainer>
            <p>Score</p>
            <p>{score}</p>
          </ScoreCardContainer>
        </ScoreContainer>

        {showResult ? (
          <GameResultView
            opponentChoice={opponentChoice}
            userChoice={userChoice}
            choicesList={choicesList}
            matchResult={matchResult}
            restartGame={this.restartGame}
          />
        ) : (
          this.renderImages()
        )}
      </AppContainer>
    )
  }
}

export default App
