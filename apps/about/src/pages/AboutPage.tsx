import { DocumentLoader } from '../entities';

export function AboutPage({ title }: { title: string }) {
  return (
    <div id="welcome">
      <DocumentLoader />
    </div>
  );
}

export default AboutPage;
