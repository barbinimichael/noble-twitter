import styled from 'styled-components'
import Form from '../../components/form/form'
import Button from '../../components/button/button'
import { MdPersonAdd } from 'react-icons/md'

export const StyledBody = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  height: inherit;
  background-color: ${props => props.theme.colors.primary};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex: 2 1 auto;
  min-height: 0%;
  box-sizing: border-box;
  margin: 1rem;
  padding: 2.5rem 5rem 2.5rem 5rem;
  border: 0.5rem solid ${props => props.theme.colors.primary};
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.onPrimary};
`;

export const StyledTitleContainer = styled.div`
  flex: 0 0 auto;
  min-height: 0;
`;

export const StyledTitle = styled.div`
  font-size: ${props => props.theme.font.h1};
  color: ${props => props.theme.colors.primary};
  border-bottom: 0.25rem solid ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

export const StyledSubTitle = styled.div`
  margin: 1rem 0;
  font-size: ${props => props.theme.font.h2};
  color: ${props => props.theme.colors.primary};
  border-bottom: 0.1rem solid ${props => props.theme.colors.primary};
`;

export const StyledFormContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 0;
  padding-bottom: 1rem;
`;

export const StyledForm = styled(Form)`
  flex: 5 1 auto;
  min-width: 0;
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
  flex: 2 10 auto; 
  min-height: 0;
  overflow-y: auto;
`;

export const StyledFollowWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledFollowText = styled.div`
  flex: 1 1 auto;
  padding: 0.5rem;
  font-size: ${props => props.theme.font.h3};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.colors.primary};
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;
`;

export const StyledRemoveButton = styled(Button)`
  margin: 0 0.5rem;
  :hover {
    transform: unset;
  }
`;

export const StyledError = styled(StyledFollowText)`
  font-size: ${props => props.theme.font.h6};
  color: ${props => props.theme.colors.error};
`;