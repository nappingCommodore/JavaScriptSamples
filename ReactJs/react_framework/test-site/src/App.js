// import logo from './logo.svg';
import './App.css';
import { Button, Button2 } from './components/Button'; // Multiexport 
import Input from './components/Input'; //Default export

function App() {
  var buttonText = "Click ME!";
  var buttonText1 = "New Button Click!";
  var insideWidth = 100;
  var insideHight = 100;

  var placeHolder = "This is a Input Text";
  var type = "text";

  var onClick = () => {
    alert("Button Clicked");
  }

  var onClick1 = () => {
    alert("Button2 Clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input type={type} placeholder={placeHolder}/>
        <Button children={buttonText} onClick={onClick} width={insideWidth} height={insideHight}/>
        <Button children={buttonText1} onClick={onClick1} width={insideWidth} height={insideHight}/>
        <Button2 children={buttonText1} onClick={onClick1} width={insideWidth} height={insideHight}/>
      </header>
    </div>
  );
}

export default App;
