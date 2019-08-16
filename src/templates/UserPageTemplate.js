import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { EnumPageTypes } from 'enums/EnumPageTypes';

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  pageType: PropTypes.oneOf([EnumPageTypes.NOTES, EnumPageTypes.TWITTERS, EnumPageTypes.ARTICLES]),
};

UserPageTemplate.defaultProps = {
  pageType: EnumPageTypes.NOTES,
};

export default UserPageTemplate;
