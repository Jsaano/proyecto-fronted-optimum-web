import Navbar from "../components/navbar"
import Welcome from "../components/welcome";
import CardsHome from "../components/cardsHome";
import Mission from "../components/mission";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <CardsHome />
      <Mission />
      <Footer />
    </>
  );
}
