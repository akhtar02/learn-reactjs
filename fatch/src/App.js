import React , {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect(() => {

    async function getRepos(){
  const response = await fetch("https://api.github.com/users/akhtar02/repos")
  const data = await response.json();
  console.log(data)
  setRepos(data)
} 
getRepos();
    
  }, [])

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((response) => response.json())
  // .then((json) => {
  //   console.log(json);
  //   setData(json);
  // })
    
  // }, [])
  return (
    <div className="App">
      <h2 style = {{textAlign: "center"}}>Github Repos <br/></h2>
      <ul>
        {repos.map((repoObj, id) => {
          return(
          <li key = {id} >{repoObj.name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
