import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { EnumRoutes } from 'enums/EnumRoutes';
import { EnumPageTypes } from 'enums/EnumPageTypes';

class DetailsPage extends Component {
  state = {
    pageType: EnumPageTypes.NOTES,
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case EnumRoutes.NOTE:
        this.setState({ pageType: EnumPageTypes.NOTES });
        break;
      case EnumRoutes.TWITTER:
        this.setState({ pageType: EnumPageTypes.TWITTERS });
        break;
      case EnumRoutes.ARTICLE:
        this.setState({ pageType: EnumPageTypes.ARTICLES });
        break;
      default:
        break;
    }
  }

  render() {
    const testArticle = {
      id: 1,
      title: 'Awesome title',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, pariatur?',
      twitterName: 'shakira',
      articleUrl: 'https://google.com',
      created: '1 days',
    };
    const { pageType } = this.state;
    return (
      <DetailsTemplate
        pageType={pageType}
        title={testArticle.title}
        created={testArticle.created}
        content={testArticle.content}
        articleUrl={testArticle.articleUrl}
        twitterName={testArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
