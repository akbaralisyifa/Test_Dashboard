import FeatureCardLatest from './Organism/FeatureCardLatest';
import FeatureCardPremium from './Organism/FeatureCardPremium';
import FeatureCards from './Organism/FeatureCards';

export default function Features() {
  return (
    <div className="px-10 pt-7 shadow-md w-1/4 fixed right-0 bg-white max-h-screen">
      <FeatureCards />
      <FeatureCardLatest />
      <FeatureCardPremium />
    </div>
  );
}
