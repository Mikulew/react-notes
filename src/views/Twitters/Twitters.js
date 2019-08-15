import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(twitter => (
      <Card
        cardType="twitters"
        id={twitter.id}
        title={twitter.title}
        content={twitter.content}
        twitterName={twitter.twitterName}
        created={twitter.created}
        key={twitter.id}
      />
    ))}
  </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
