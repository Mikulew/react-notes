import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { EnumPageTypes } from 'enums/EnumPageTypes';
import { fetchItems } from 'actions';

class Articles extends Component {
  componentDidMount() {
    const { fetchArticles } = this.props;

    fetchArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <GridTemplate pageContext={EnumPageTypes.ARTICLES}>
        {articles.map(({ id, title, content, articleUrl }) => (
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems(EnumPageTypes.ARTICLES)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
