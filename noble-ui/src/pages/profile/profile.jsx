import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CgCloseO } from 'react-icons/cg'
import api from '../../api/api'
import NavBar from '../../components/navBar/navBar'
import clone from 'lodash/clone'
import {
  StyledBody, StyledContainer, StyledFormContainer, StyledForm, StyledFollowingContainer,
  StyledFollowWrapper, StyledFollowText, StyledRemoveButton, StyledTitle, StyledSubTitle, StyledTitleContainer,
  StyledAddWrapper, StyledAddButton, StyledAddIcon, StyledError
} from './style'

const FOLLOW_LIMIT = 3;

const Profile = () => {
  const [following, setFollowing] = useState([])
  const [validUsername, setValidUsername] = useState(true);
  const [reachedLimit, setReachedLimit] = useState(false)
  const [input, setInput] = useState('')
  const { t } = useTranslation()
  const elements = []

  useEffect(() => {
    getFollowing()
  }, [])

  const addFollowing = () => {
    if (input && following.length < FOLLOW_LIMIT) {
      api({
        method: 'get',
        url: `/users/check/${input}`,
      })
        .then((response) => {
          if (!response.data?.error) {
            console.log('found user')
            setValidUsername(true)
            api({
              method: 'put',
              url: `/users/following`,
              data: { newFollowing: input }
            })
              .then((response) => {
                if (response.data) {
                  setFollowing(response.data)
                  setInput('')
                }
              })
              .catch((error) => {
                console.log(error)
              });
          } else {
            setValidUsername(false)
          }
        })
        .catch((error) => {
          console.log(error)
          setValidUsername(false)
        });
    } else {
      setReachedLimit(true)
    }
  }

  const getFollowing = () => {
    api({
      method: 'get',
      url: `/users/following`,
    })
      .then((response) => {
        console.log('following', response.data)
        if (response.data) setFollowing(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const removeFollowing = index => {
    const newFollowing = clone(following)
    newFollowing.splice(index, 1)
    api({
      method: 'post',
      url: `/users/following`,
      data: {
        following: newFollowing
      }
    })
      .then((response) => {
        if (response.data) setFollowing(response.data)
        setReachedLimit(false)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const handleChange = value => {
    setInput(value)
    if (value) setValidUsername(true)
  }

  return (
    <StyledBody>
      <NavBar elements={elements} />
      <StyledContainer>
        <StyledTitleContainer>
          <StyledTitle>{t('profile.title')}</StyledTitle>
          <StyledSubTitle>{t('profile.followAccount')}</StyledSubTitle>
        </StyledTitleContainer>
        <StyledFormContainer>
          <StyledForm
            type='TEXT' value={input} onChange={e => handleChange(e.target.value)}
            placeholder={t('profile.inputPlaceholder')} />
          <StyledAddWrapper>
            <StyledAddButton onClick={addFollowing} disabled={!validUsername || !input || following.includes(input)}>
              <StyledAddIcon />
            </StyledAddButton>
          </StyledAddWrapper>
        </StyledFormContainer>
        {!validUsername && <StyledError>{t('profile.notFoundError')}</StyledError>}
        {reachedLimit && <StyledError>{t('profile.reachedLimit')}</StyledError>}
        <StyledSubTitle>{t('profile.following')}</StyledSubTitle>
        <StyledFollowingContainer>
          {following.map((f, i) => (
            <StyledFollowWrapper key={i}>
              <StyledFollowText>{f}</StyledFollowText>
              <StyledRemoveButton onClick={() => removeFollowing(i)}>
                <CgCloseO />
              </StyledRemoveButton>
            </StyledFollowWrapper>
          ))}
        </StyledFollowingContainer>
      </StyledContainer>
    </StyledBody>
  )
}

export default Profile;