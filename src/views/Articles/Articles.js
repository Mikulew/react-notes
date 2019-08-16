import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { EnumPageTypes } from 'enums/EnumPageTypes';

const Articles = ({ articles }) => (
  <GridTemplate pageType={EnumPageTypes.ARTICLES}>
    {articles.map(article => (
      <Card
        cardType={EnumPageTypes.ARTICLES}
        id={article.id}
        title={article.title}
        content={article.content}
        articleUrl={article.articleUrl}
        created={article.created}
        key={article.id}
      />
    ))}
  </GridTemplate>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
