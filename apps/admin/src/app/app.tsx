import CountryRouteEditor from '../widgets/CountryRoutesEditor/CountryRoutEditor';
import { Suspense } from 'react';

export function App() {
  return (
    <section className="admin">
      <Suspense fallback="Admin app is loading...">
        <CountryRouteEditor />
      </Suspense>
    </section>
  );
}

export default App;
