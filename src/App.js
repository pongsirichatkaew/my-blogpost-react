import './App.css';
import NavigationBar from './components/Navigation/NavigationBar.component';
import LandingPage from './pages/LandingPage/LandingPage.page';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavigationBar />
      <LandingPage />
      <LandingPage />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
