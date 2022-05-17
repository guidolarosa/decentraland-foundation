import '../styles/globals.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'utils/theme.ts';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <Component {...pageProps} />
      </StyledRoot>
    </ThemeProvider>
  )
}

export default MyApp

const StyledRoot = styled.div`
  background: ${props => props.theme.background};
  * {
    color: ${props => props.theme.mainText};
  }
`
