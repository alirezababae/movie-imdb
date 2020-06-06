import React , {useState} from 'react';
import './App.css';
import Search from './Search'
import Axios from 'axios'
import Results from './Results'
import Popup from './Popup'
function App() {

  const [state , setsatte] = useState({

    S:"",
    result:[],
    selected:{}

  })




  const apiurls = 'http://www.omdbapi.com/?i=tt3896198&apikey=c10136f4'


const shearch = (e)=> {

if(e.key === "Enter"){

  Axios.get(apiurls + "&s=" + state.S)
  .then(({data}) => {
    
let result = data.Search

setsatte(prevState => {

return {...prevState , result:result}

})
// console.log(data.Search);


  })

}

}


  const handelInput  = (e)=> {

let s = e.target.value

setsatte(prevState => {

 return { ...prevState , S:s }

})

// console.log(state.S);

  }


  const openPopup = id => {


    Axios.get(apiurls + "&i=" + id)
    .then(({data})=>{
  
  
      let result = data
  console.log(result);
  
      setsatte(prevState => {
  
        return { ...prevState , selected:result }
  
      })
  
  
    })
  
  
  }
  


  const closepage  = ()=> {

    setsatte(prevState => {

return{ ...prevState , selected:{}}

    })


  }


  return (
    <div className="App">
      <header className="App-header">
    <h1> movie database </h1>
      </header>

      <main>
<Search handelInput={handelInput} shearch={shearch}/>
<Results results={state.result} openPopup={openPopup} />

{( typeof state.selected.Title != "undefined" ) ? <Popup selected={state.selected} closepage={closepage}/> :false}

      </main>
    </div>
  );
}

export default App;
