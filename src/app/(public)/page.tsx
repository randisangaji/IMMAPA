import { dataService } from '@/services/storage';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ValuesSection from '@/components/home/ValuesSection';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import CurrentCabinet from '@/components/home/CurrentCabinet';
import JoinCta from '@/components/home/JoinCta';

export default async function HomePage() {
  const profile = await dataService.getProfile();
  const programs = await dataService.getPrograms();
  const activeCabinet = await dataService.getActiveCabinet();
  const recruitment = await dataService.getRecruitment();

  return (
    <>
      <HeroSection profile={profile} />
      <AboutPreview profile={profile} />
      <ValuesSection values={profile.values} />
      <FeaturedPrograms programs={programs} />
      <CurrentCabinet cabinet={activeCabinet} />
      <JoinCta recruitment={recruitment} />
    </>
  );
}
