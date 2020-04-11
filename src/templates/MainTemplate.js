import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import PageContext from 'context';
import { EnumRoutes } from 'enums/EnumRoutes';
import { EnumPageTypes } from 'enums/EnumPageTypes';

class MainTemplate extends Component {
  state = {
    pageType: EnumPageTypes.NOTES,
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === EnumRoutes.LOGIN || pathname === EnumRoutes.REGISTER) {
      return;
    }
    const pageTypes = [EnumRoutes.NOTES, EnumRoutes.TWITTERS, EnumRoutes.ARTICLES];
    const [currentUrl] = pageTypes.filter(page => pathname.includes(page));
    const currentPage = currentUrl.replace(/^\//, '');
    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </PageContext.Provider>
      </div>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }),
};

MainTemplate.defaultProps = {
  location: {
    pathname: '',
  },
};

export default withRouter(MainTemplate);
