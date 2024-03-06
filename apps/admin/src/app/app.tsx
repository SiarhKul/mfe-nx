import CountryRouteEditor from '../widgets/CountryRoutesEditor/CountryRoutEditor';

export function App() {
  return (
    <div className="admin">
      <div className="flex gap-8 bg-green-400">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
      <CountryRouteEditor />
    </div>
  );
}

export default App;
