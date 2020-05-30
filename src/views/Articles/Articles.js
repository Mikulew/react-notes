import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { EnumPageTypes } from 'enums/EnumPageTypes';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;

    fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate pageContext={EnumPageTypes.ARTICLES}>
        {articles.map(({ _id: id, title, content, articleUrl }) => (
          <Card
            pageContext={EnumPageTypes.ARTICLES}
            id={id}
            title={title}
            content={content}
            articleUrl={articleUrl}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

export default Articles;
