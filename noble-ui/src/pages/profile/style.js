import styled from 'styled-components'
import Form from '../../components/form/form'
import Button from '../../components/button/button'
import { MdPersonAdd } from 'react-icons/md'

export const StyledBody = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
  margin: 0rem 0.5rem 1rem 1rem;
  padding-left: 1rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1rem;
  padding: 0.5rem;
  height: fit-content;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 75%;
    padding: 4rem 0 4rem 6rem;
    margin: 1rem 0.5rem 1rem 2rem;
  }
`;

export const StyledTitleContainer = styled.div`
  flex: 1 0 auto;
`;

export const StyledTitle = styled.div`
  flex: 1 0 auto;
  font-size: ${props => props.theme.font.h1};
  color: ${props => props.theme.colors.onSecondary};
  font-weight: bold;
  margin-bottom: 0.5rem;
  width: fit-content;
`;

export const StyledSubTitle = styled.div`
  flex: 1 0 auto;
  font-size: ${props => props.theme.font.h2};
  color: ${props => props.theme.colors.onSecondary};
  font-weight: 500;
`;

export const StyledFormContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem 1rem 0;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 40vw;
    padding: 1rem 0 1rem 0;
  }
`;

export const StyledForm = styled(Form)`
  flex: 1 1 auto;
`;

export const StyledAddWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
`;

export const StyledAddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAddIcon = styled(MdPersonAdd)`
  margin: 0 0.5rem;
`;

export const StyledFollowingContainer = styled.div`
  flex: 1 0 auto;
`;

export const StyledFollowWrapper = styled.div`
  display: flex;
  width: 100%;
  
  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 40vw;
  }
`;

export const StyledFollowText = styled.div`
  flex: 1 1 auto;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  font-size: ${props => props.theme.font.h3};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledRemoveButton = styled(Button)`
  margin: 0 0.5rem;
  :hover {
    transform: unset;
  }
`;

export const StyledError = styled(StyledFollowText)`
  font-size: unset;
  color: ${props => props.theme.colors.error};
  white-space: normal;
`;

export const StyledNote = styled.div`
  font-style: italic;
`;