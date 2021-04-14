import './App.css';
import DatePickerEl from './DatePickerEl'
import Elements from './Elements'
import PrintButton from './PrintButton'

function App() {
  return (
    <div>
      <div className="title is-1">OFFER GENERATOR</div>
      <DatePickerEl />
      <Elements />
      <PrintButton />
    </div>
  );
}

export default App;
