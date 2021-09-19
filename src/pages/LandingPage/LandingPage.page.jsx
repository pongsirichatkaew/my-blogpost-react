import { useScroll } from '../../hooks/useScroll';
import {
  StyledLandingPage,
  StyledLandingImage,
  StyledLandingText,
} from './LandingPage.styled';
const MainLandingPage = () => {
  const [element, view] = useScroll();
  return (
    <StyledLandingPage>
      <StyledLandingImage ref={element} view={view ? 1 : 0} />
      <StyledLandingText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StyledLandingText>
    </StyledLandingPage>
  );
};

export default MainLandingPage;
