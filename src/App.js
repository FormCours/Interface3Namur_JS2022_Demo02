import './App.css';
import YearInfo from './components/year-info/year-info';

function App() {
  return (
    <div className="App">
      <YearInfo year={2022} />
      <YearInfo year={2004} />
      <YearInfo year={-42} />
    </div>
  );
}

export default App;
