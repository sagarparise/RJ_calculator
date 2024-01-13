import '../App'
const InputBox = ({placeholder,inputType,inputVal})=>{
return (
<input  type='number' className='input-bx' placeholder={placeholder} onChange={(event)=>inputVal(inputType,event.target.value)}/>

);
}

export default InputBox;