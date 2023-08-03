import './AgePredictor.css';
import Axios from 'axios'
import {useState} from 'react'


function App() {

  const [name, setname] = useState("");
  const [age, setage] = useState(0);

  const fetchdata = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setage(res.data.age);
    })
  }
  return (
    <div className="App">

      <input placeholder='Ex. Chaitanya' onChange={(event) =>{
        setname(event.target.value);
      }}></input>

      <button onClick={fetchdata}> Predict Age </button>

      <h1>Predicted Age : {age}</h1>

    </div>
  );
}

export default App;
