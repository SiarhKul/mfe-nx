/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import { DocumentLoader } from '../entities';

export function AboutPage({ title }: { title: string }) {
  return (
    <div id="welcome">
      <DocumentLoader />
    </div>
  );
}

export default AboutPage;
