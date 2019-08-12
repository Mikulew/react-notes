import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
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
    return (
      <DetailsTemplate pageType={this.state.pageType}>
        <p>{this.state.pageType}</p>
      </DetailsTemplate>
    );
  }
}

export default DetailsPage;
