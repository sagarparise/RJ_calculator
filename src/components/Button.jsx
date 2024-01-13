import '../App'
const Button = ({handleOperation})=>{
  let sign = ['+','-','*','/']
  return (
    sign.map((element)=>{
      return <button key={element} className="btns" onClick={()=> handleOperation(element)} >{element}</button>
    })
  );
}

export default Button;