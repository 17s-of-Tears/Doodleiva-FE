import React from 'react'
import styled from 'styled-components'
import { Card } from 'style/common'

const CardFormSection = styled.div`
  position: relative;
  width: 326px;
  height: 390px;
.cardImgStyled{
  width: inherit;
  height: 319px;
  z-index: 1;
  position: absolute;
}
.NameForm {
  width: inherit;
  height: 70px;
  position: absolute;
  bottom: 6px;
}
.NameForm p{
  text-align: center;
}
`
const CardForm = () => {

  return (
    <CardFormSection>
      <img src="./img/sampleimg.jpg" alt="" className='cardImgStyled' />
      <Card className="NameForm"><p>김코드싸개</p></Card>
    </CardFormSection>
  )
}

export default CardForm