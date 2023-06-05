
import KotakTeks from "./KotakTeks"
import Tombol from "./Tombol"
import "./Tombol.css"

function Login() {
  return (
    <>
    <p>Email : </p>
    <KotakTeks ph="Masukkan Email"/>
    <p>Kata Sandi : </p>
    <KotakTeks ph="Masukkan Password"/>
    <br />
    <br />
    <Tombol teks="Login"/>
    <Tombol teks="Regist"/>
    {/* <Tombol>Masuk</Tombol> */}
    </>
    
  )
}

export default Login