import logo from './logo.svg';
import './App.css';
import Button from './Button';
import TextCounter from './components/TextCounter';

function soma (a, b) {
  alert(a + b)
}



function App() {
  return (
    <div>
      Hello World
      <Button onClick={() => soma(10, 20)} name="Felipe Romão" />
   </div>
  );

}


export default App;
 