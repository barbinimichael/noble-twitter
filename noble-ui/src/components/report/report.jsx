import React from 'react'
import {
  StyledBody, TextContainer, StyledDateText, StyledNameText, StyledTimeText, StyledImage, StyledTweet, StyledWrapper
} from './style'

const Report = () => {
  return (
    <StyledBody>
      <TextContainer>
        <StyledDateText>May 30th, 2021</StyledDateText>
        <StyledNameText>Elon Musk</StyledNameText>
        <StyledTimeText>7:42PM</StyledTimeText>
        <StyledWrapper>
          <StyledImage src='https://pbs.twimg.com/media/E2hxT_gXwAELbLP?format=jpg&name=small' />
          <StyledTweet>
            Ocean spaceport Deimos is under construction for launch next year
            <a href='https://twitter.com/kendall_dirks/status/1398640498223587334'>Article Link</a>
          </StyledTweet>
        </StyledWrapper>
        <StyledNameText>Barack Obama</StyledNameText>
        <StyledTimeText>5:06PM</StyledTimeText>
        <StyledWrapper>
          <StyledImage src='https://pbs.twimg.com/card_img/1398237959581802498/-4OJb7H2?format=jpg&name=small' />
          <StyledTweet>
            On the 100th anniversary of the Tulsa Race Massacre, we remember all those who were killed and the survivors who bravely continue to share their stories so that we never forget this painful part of our history. Take a moment to learn about what happened:
            <a href='https://twitter.com/kendall_dirks/status/1398640498223587334'>Article Link</a>
          </StyledTweet>
        </StyledWrapper>
      </TextContainer>
    </StyledBody>
  )
}

export default Report;