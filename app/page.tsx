import HeroSection from '@/components/hero/HeroSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import CultureSection from '@/components/paralax/CultureSection';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <CultureSection />
      <HowItWorks />
    </main>
  );
}
