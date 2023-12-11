import Container from "../../components/Container";
import AboutSection from "./AboutSection";
import Banner from "./Banner";

const Home = () => {
  return (
    <Container>
      <div className="w-full min-h-[70vh] ">
        <Banner></Banner>
        <AboutSection></AboutSection>
      </div>
    </Container>
  );
};

export default Home;
