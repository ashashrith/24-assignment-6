import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import ImageList from '../ImageList'

import {
  BgContainer,
  ScoreCont,
  HeadingCont,
  Heading,
  Score,
  ScoreHead,
  Sco,
  RulesCont,
  ButtonTrig,
  Cont,
  Image,
  BtnIcon,
  PopCont,
  PopupCont,
  Ul,
  Div,
  Text,
  DivCont,
  Container,
  Head,
  Img,
  Btn,
} from './styledComponents'

class GameHome extends Component {
  state = {score: 0, play: true, text: '', youId: '', oppId: ''}

  getChoiceList = () => {
    const {choicesList} = this.props
    return choicesList
  }

  onClickImage = id => {
    const images = this.getChoiceList()

    const num = Math.floor(Math.random() * 3)
    const randomItem = images[num]
    const randomId = randomItem.id

    if (id === 'ROCK' && randomId === 'SCISSORS') {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'SCISSORS' && randomId === 'PAPER') {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'PAPER' && randomId === 'ROCK') {
      this.setState({text: 'YOU WON'})
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else if (id === 'PAPER' && randomId === 'SCISSORS') {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (id === 'SCISSORS' && randomId === 'ROCK') {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (id === 'ROCK' && randomId === 'PAPER') {
      this.setState({text: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    } else if (id === randomId) {
      this.setState({text: 'IT IS DRAW'})
    }

    this.setState({play: false})
    this.setState({youId: id})
    this.setState({oppId: randomItem.id})

    return randomId
  }

  renderGameSection = () => {
    const {text, youId, oppId} = this.state

    const choice = this.getChoiceList()

    const youImage = choice.filter(each => each.id === youId)
    const oppImage = choice.filter(ach => ach.id === oppId)

    return (
      <Div>
        <DivCont>
          <Container>
            <Head>YOU</Head>
            {youImage.map(item => (
              <Img src={item.imageUrl} alt="your choice" key={item.id} />
            ))}
          </Container>
          <Container>
            <Head>OPPONENT</Head>
            {oppImage.map(item => (
              <Img src={item.imageUrl} alt="opponent choice" key={item.id} />
            ))}
          </Container>
        </DivCont>
        <Text>{text}</Text>
        <Btn type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </Btn>
      </Div>
    )
  }

  onClickPlayAgain = () => {
    this.setState({play: true})
    this.renderGame()
  }

  renderGame = () => {
    const imagesList = this.getChoiceList()

    return (
      <Ul>
        {imagesList.map(each => (
          <ImageList
            list={each}
            key={each.id}
            onClickImage={this.onClickImage}
          />
        ))}
      </Ul>
    )
  }

  render() {
    const {score, play} = this.state

    return (
      <BgContainer>
        <ScoreCont>
          <HeadingCont>
            <Heading>
              ROCK <br /> PAPER <br /> SCISSORS
            </Heading>
          </HeadingCont>
          <Score>
            <ScoreHead>Score</ScoreHead>
            <Sco>{score}</Sco>
          </Score>
        </ScoreCont>
        {play ? this.renderGame() : this.renderGameSection()}

        <PopupCont>
          <Popup modal trigger={<ButtonTrig type="button">Rules</ButtonTrig>}>
            {close => (
              <>
                <RulesCont>
                  <PopCont>
                    <BtnIcon onClick={() => close()} type="button">
                      <RiCloseLine />
                    </BtnIcon>
                  </PopCont>
                  <Cont>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                      alt="rules"
                    />
                  </Cont>
                </RulesCont>
              </>
            )}
          </Popup>
        </PopupCont>
      </BgContainer>
    )
  }
}

export default GameHome
