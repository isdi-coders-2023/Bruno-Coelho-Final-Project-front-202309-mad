import { Layout } from '../../components/layout/layout';
import { OurService } from '../../components/our.service/our.service';
import { AboutUS } from '../../components/about.us/about.us';

export default function HomePage() {
  return (
    <>
      <Layout></Layout>
      <OurService></OurService>
      <AboutUS></AboutUS>
    </>
  );
}
