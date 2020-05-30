import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import { EnumPageTypes } from 'enums/EnumPageTypes';

class Twitters extends Component {
  componentDidMount() {
    const { fetchTwitters } = this.props;

    fetchTwitters();
  }

  render() {
    const { twitters } = this.props;

    return (
      <GridTemplate pageContext={EnumPageTypes.TWITTERS}>
        {twitters.map(({ _id: id, title, content, twitterName }) => (
          <Card
            pageContext={EnumPageTypes.TWITTERS}
            id={id}
            title={title}
            content={content}
            twitterName={twitterName}
            key={id}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  fetchTwitters: PropTypes.func.isRequired,
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      twitterName: PropTypes.string.isRequired,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

export default Twitters;
