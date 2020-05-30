import { connect } from 'react-redux';
import { fetchItems } from 'actions';

import { EnumPageTypes } from 'enums/EnumPageTypes';
import Articles from './Articles';

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchItems(EnumPageTypes.ARTICLES)),
});

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);

export default ArticlesContainer;
