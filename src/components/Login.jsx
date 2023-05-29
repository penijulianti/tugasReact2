
import KotakTeks from "./KotakTeks"
import Tombol from "./Tombol"

function Login() {
  return (
    <>
    <p>Email : </p>
    <KotakTeks/>
    <p>Kata Sandi : </p>
    <KotakTeks/><br></br>
    <Tombol teks="Login"/>
    </>
    
  )
}

export default Login