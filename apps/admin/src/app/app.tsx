import CountryRouteEditor from '../widgets/CountryRoutesEditor/CountryRoutEditor';
import { configStore } from './redux/store/store';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

const { store } = configStore();
export function App() {
  return (
    <section className="admin">
      <Suspense fallback="Loading...">
        <Provider store={store}>
          <CountryRouteEditor />
        </Provider>
      </Suspense>
    </section>
  );
}

export default App;
