import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import createTypography from '@material-ui/core/styles/createTypography';
import createPalette from '@material-ui/core/styles/createPalette';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Header from './header';
import '../resources/styles/layout.css';

const palette = createPalette({
  primary: {
    main: '#990012',
  },
  secondary: {
    main: '#545454',
    light: '#cacaca',
  },
});

const typography = createTypography(palette, {
  fontFamily: 'Raleway',
});

const theme = createMuiTheme({
  palette: palette,
  typography: typography,
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
            rel="stylesheet"
          ></link>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={'SESA'} />
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
