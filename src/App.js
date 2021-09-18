import './App.css';
import NavigationBar from './components/Navigation/NavigationBar.component';
import LandingPage from './pages/LandingPage/LandingPage.page';
function App() {
  return (
    <div>
      <NavigationBar />
      <LandingPage />
      <LandingPage />
    </div>
  );
}

export default App;
