import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import SubchaptersSection from "@/components/SubchaptersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-gradient-light">
      <Header />
      <main>
        <HeroSection />
        <WhyJoinSection />
        <SubchaptersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;