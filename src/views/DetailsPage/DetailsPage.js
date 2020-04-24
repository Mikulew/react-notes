import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from '../../hoc/withContext';
import { EnumRoutes } from '../../enums/EnumRoutes';

class DetailsPage extends Component {
  state = {
    activeItem: null,
    fetching: true,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    return axios
      .get(`http://localhost:9000/api/note/${id}`)
      .then(({ data }) => this.setState({ activeItem: data, fetching: false }))
      .catch(() => push(EnumRoutes.NOTES));
  }

  render() {
    const { activeItem, fetching } = this.state;

    return fetching ? (
      'fetching'
    ) : (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withContext(DetailsPage);
