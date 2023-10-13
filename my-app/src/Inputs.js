import { useState } from "react"

function Inputs(){
 
    let [value1, setValue1] = useState(0)
    let [value2, setValue2] = useState (0)
	const [value, setValue] = useState('');
    let [resaultPlus, setResaultPlus] = useState(0)
    let [resaultMinus, setResaultMinus] = useState(0)
    const reloadPage = () => {
        window.location.reload()
      }
      function handleChange(event) {
		setValue(event.target.value);
	}
    return(
        <div>
        
           <input type="number" value={value1} onChange={event=>setValue1(event.target.value)}/>
           <input type="number" value={value2} onChange={event=>setValue2(event.target.value)}/>
<br />
            <button onClick={()=> setResaultPlus(event=>Number(value1) + Number(value2))}>+</button>
            <button onClick={()=> setResaultMinus(event=>Number(value1) - Number(value2))}>-</button>
            <p>Результат сложения: {resaultPlus}</p>
            <p>Результат вычитания: {resaultMinus}</p>
            <textarea value={value} onChange={handleChange} />
		<p>{value}</p>
            <br />
            <button onClick={reloadPage}>Обновить</button>
        </div>
    )
}
export default Inputs