import React from 'react';
import { Container, Circle } from './style'

const Load = () => {
  const circles = []
  for (let i = 0; i < 3; i++) {
    circles.push(
      <Circle key={i} i={i} />
    )
  }

  return (
    <Container>
      {circles}
    </Container>
  )
}

export default Load;