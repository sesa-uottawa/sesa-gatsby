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
        {/** Search Engine Optimization */}
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { property: 'og:title', content: data.site.siteMetadata.title },
            {
              propery: 'og:description',
              content: data.site.siteMetadata.description,
            },
            { property: 'og:type', content: 'website' },
            { name: 'twitter:card', content: 'uOttawa SESA' },
            { name: 'twitter:creator', content: 'SESA' },
            { name: 'twitter:title', content: data.site.siteMetadata.title },
            {
              name: 'twitter:description',
              content: data.site.siteMetadata.description,
            },
          ]}
        >
          {/** Raleway font import */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
            rel="stylesheet"
          ></link>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={'SESA'} />
        { /** Material UI Theme */}
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
