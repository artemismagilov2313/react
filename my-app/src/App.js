import { useState } from 'react';
import Inputs from "./Inputs"
import './App.css';

function App() {

  let [inCart, setInCart] = useState(false)
  let [stateUser, setStateUser] = useState(true)
let [show, setSHow] = useState()
  function ban(){
    if(stateUser){
      setStateUser(false)
    }
    if(!stateUser){
      setStateUser(true)
    }
    
  }
  if(stateUser){
    show = <div>
<button  onClick={() => setInCart(true)}>Добавить в корзину</button>
<button onClick={()=>setInCart(false)}>Удалить из корзины</button>
    </div>
  }else{{
    return(
      <div>
      <h1>Ты в бане</h1>
      <button onClick={ban}>Разбаниться</button>
      </div>
    )
  }}
 
  return (
    <div className="App">
    
<h1>{inCart ? "В корзине" : "Не в корзине"}</h1>
{show}
<button onClick={ban}>Забанить пользователя</button>
<Inputs />

    </div>
  );
}

export default App;
