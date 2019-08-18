import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { EnumPageTypes } from 'enums/EnumPageTypes';

const StyledWrapper = styled.div`
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: ${({ theme }) => theme.white};
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 10px;
  height: 30vh;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput placeholder={pageContext === EnumPageTypes.TWITTERS ? 'Account name' : 'Title'} />
    {pageContext === EnumPageTypes.ARTICLES && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activeColor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf([
    EnumPageTypes.NOTES,
    EnumPageTypes.TWITTERS,
    EnumPageTypes.ARTICLES,
  ]),
  isVisible: PropTypes.bool.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: EnumPageTypes.NOTES,
};

export default withContext(NewItemBar);
