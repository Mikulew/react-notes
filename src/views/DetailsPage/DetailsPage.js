import React, {Component} from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from '../../hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: ''
    }
  };

  componentDidMount() {
    const { activeItem, match: { params: { id } } } = this.props;

    if (activeItem) {
      const [ activeItem ] = this.props.activeItem; 
      return this.setState({ activeItem });
    }

   return axios.get(`http://localhost:9000/api/note/${id}`)
      .then(({ data })=> this.setState({activeItem: data}))
      .catch(err => console.log(err))
  }

  render() {
  const { activeItem } = this.props;

  return (
    <DetailsTemplate
      title={activeItem.title}
      created={activeItem.created}
      content={activeItem.content}
      articleUrl={activeItem.articleUrl}
      twitterName={activeItem.twitterName}
    />
  );
  }
};

const mapStateToProps = (state, ownProps) => ({
 activeItem: state[ownProps.pageContext].length ? state[ownProps.pageContext].filter(item => item.id === ownProps.match.params.id) : null
});

export default withContext(connect(mapStateToProps)(DetailsPage));
