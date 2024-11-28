import { useState } from "react";
import Button from "./Components/Button";

function App() {

  const [ message, setMessage ] = useState("Lets learn more about testing in React")

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <Button disabled={false} onClick={()=> setMessage('new message')}>Change Message</Button>
    </div>
  );
}

export default App;
