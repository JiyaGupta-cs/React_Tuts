import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Jiya";

function App() {
  return (
    <>
      <Navbar title="Text Utils" abouttext="AboutText" />
      <div className="container my-3">
      <TextForm heading="Enter the text to analyze" />
      </div>
      
    </>
  );
}

export default App;
