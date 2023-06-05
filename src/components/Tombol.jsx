
const styleTombol ={
      backgroundColor: "crimson",
      padding :  5,
      borderRadius: 5,
      border: "none",
      marginLeft : 15
}
const clickButton = true
let 
function Tombol(props){
  console.log(props)
  return (
    <button className="button" style={styleTombol} onClick={}>{props.teks}</button>
    // <button>{props.children}</button>
  )
}

export default Tombol