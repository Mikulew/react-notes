import React from 'react';
import { EnumRoutes } from 'enums/EnumRoutes';

const PageContext = React.createContext(EnumRoutes.NOTES);

export default PageContext;
