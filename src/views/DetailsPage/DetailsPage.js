import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'articles' });
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
