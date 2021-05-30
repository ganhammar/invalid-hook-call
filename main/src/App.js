import useExternal from 'external';

function App() {
  const [value] = useExternal();

  return (
    <div>
      {value}
    </div>
  );
}

export default App;
