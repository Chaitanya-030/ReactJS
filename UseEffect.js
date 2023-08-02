import './UseEffect.css';
import React from 'react'
import {useState, useEffect } from 'react'

// export const Text = () => {
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("component mounted");

//     return () => {
//       console.log("component unmounted");
//     }
//   }, [])

//   return (
//     <div>
//       <input onChange = {(event) => {
//         setText(event.target.value);
//       }}></input>

//       <h1>{text}</h1>
//     </div>
//   )
// }

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  // const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      {/* <button onClick = {() => {
        setShowText(!showText);
      }}> Show Text </button>

      {showText && <Text />} */}

      <button onClick = {() => setResourceType('posts')}> Posts </button>
      <button onClick = {() => setResourceType('users')}> Users </button>
      <button onClick = {() => setResourceType('comments')}> Comments </button>

      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>
  );
}

export default App;
