
import { Alert } from './Alert';
import './App.css'
import { HiUser } from "react-icons/hi";


export const App = () => {
	

  return (
    <>
      <button onClick={() => alert("I'm a button!")}>Click me!</button>;
      <p>
        <HiUser className="my-icon" size="24" />
        {name}
      </p>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
};


export default App;

