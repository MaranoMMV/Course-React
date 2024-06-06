import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="app">
      <h1>Avançando em react</h1>
      { /* Imagem empublic */}
      <div>
        <img src="/1.jpg" alt="asiydga iiyasdg iya" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
    </div>
  );
}

export default App;
