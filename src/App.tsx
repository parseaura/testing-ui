import Footer from "./components/common/Footer/Footer";
import Header from "./components/common/Header/Header";
import AppPromo from "./components/sections/AppPromo/AppPromo";
import CoachingFeatures from "./components/sections/OnlineCoaching/CoahingFeatures";
import OnlineCoaching from "./components/sections/OnlineCoaching/OnlineCoaching";
import PositionsSection from "./components/sections/Positions/PositionsSection";
import PricingSection from "./components/sections/Pricing/PricingSection";
import TestimonialSection from "./components/sections/Testimonials/TestimonialSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <PricingSection />
        <OnlineCoaching />
        <CoachingFeatures />
        <TestimonialSection />
        <AppPromo />
        <PositionsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
