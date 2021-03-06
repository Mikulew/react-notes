import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import { EnumPageTypes } from 'enums/EnumPageTypes';

const StyledWrapper = styled.div`
  position: relative;
  margin: 25px 10px 25px 170px;
  max-width: 50vw;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledLink = styled.a`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const StyledImage = styled.img`
  position: absolute;
  right: -15px;
  top: 50px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const DetailsTemplate = ({ pageContext, title, content, articleUrl, twitterName }) => (
  <UserPageTemplate>
    <StyledWrapper>
      <StyledPageHeader>
        <StyledHeading big as="h1">
          {title}
        </StyledHeading>
      </StyledPageHeader>
      <Paragraph>{content}</Paragraph>
      {pageContext === EnumPageTypes.ARTICLES && (
        <StyledLink href={articleUrl}>Open article</StyledLink>
      )}
      {pageContext === EnumPageTypes.TWITTERS && (
        <StyledImage alt={title} src={`https://avatars.io/twitter/${twitterName}`} />
      )}
      <Button as={Link} to={`/${pageContext}`} activeColor={pageContext}>
        close
      </Button>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default withContext(DetailsTemplate);
