import {ImageCont, Img, Button} from './styledComponents'

const ImageList = props => {
  const {list, onClickImage} = props
  const {imageUrl, id} = list

  const onClickImg = () => {
    onClickImage(id)
  }

  let data = ''

  if (id === 'ROCK') {
    data = 'rockButton'
  }

  if (id === 'SCISSORS') {
    data = 'paperButton'
  }

  if (id === 'PAPER') {
    data = 'scissorsButton'
  }

  return (
    <ImageCont>
      <Button type="button" data-testid={data} onClick={onClickImg}>
        <Img src={imageUrl} alt={id} />
      </Button>
    </ImageCont>
  )
}

export default ImageList
