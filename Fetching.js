import './Fetching.css';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'



function App() {
  const fetchcatfact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => { 
    setcatfact(res.data.fact); 
    });
  };

  const [catfact, setcatfact] = useState("");

  useEffect(() => {
    fetchcatfact();
  }, [])
  

  return (
    <div className="App">
      <button onClick = {fetchcatfact}>Generate Cat Fact</button>
      <p>{catfact}</p>
    </div>
  );
}

export default App;
