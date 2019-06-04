import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 10px;
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		background: #2c3e50;
	}
`;

const Inner = styled.div`
	width: 80%;
	max-width: 1300px;
	margin: 0 auto;
`;

const theme = {
	dark: '#2c3e50',
	bright: '#ecf0f1',
	border: '#ededed'
};

const Page = props => (
	<ThemeProvider theme={theme}>
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<Inner>{props.children}</Inner>
		</React.Fragment>
	</ThemeProvider>
);

export default Page;
