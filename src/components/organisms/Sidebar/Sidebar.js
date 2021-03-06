import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import penIcon from 'assets/icons/edit.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import bulbIcon from 'assets/icons/light-bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import withContext from 'hoc/withContext';
import { EnumRoutes } from 'enums/EnumRoutes';
import { EnumPageTypes } from 'enums/EnumPageTypes';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <StyledLinksList>
      <li>
        <ButtonIcon as={NavLink} to={EnumRoutes.NOTES} icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={EnumRoutes.TWITTERS} icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to={EnumRoutes.ARTICLES} icon={bulbIcon} activeclass="active" />
      </li>
    </StyledLinksList>
    <StyledLogoutButton as={NavLink} to={EnumRoutes.LOGOUT} icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf([
    EnumPageTypes.NOTES,
    EnumPageTypes.TWITTERS,
    EnumPageTypes.ARTICLES,
  ]),
};

Sidebar.defaultProps = {
  pageContext: EnumPageTypes.NOTES,
};

export default withContext(Sidebar);
