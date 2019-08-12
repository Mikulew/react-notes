import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnersWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.white)};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0 0;
`;

const StyledAvatar = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  right: 20px;
  top: 20px;
`;

const StyledLinkButton = styled.a`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: ${({ theme }) => theme.white} url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 60%;
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <StyledWrapper>
    <InnersWrapper activeColor={cardType}>
      <StyledHeading>{title}</StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
      {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnersWrapper>
    <InnersWrapper flex>
      <Paragraph>{content}</Paragraph>
      <Button secondary>Remove</Button>
    </InnersWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
