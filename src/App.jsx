import { useInitializeApp } from "./hooks";

function App() {
  const { hydrated } = useInitializeApp();

  if (!hydrated) {
    return <div>Loading...</div>;
  }

  return <div>App Ready</div>;
}

export default App;
