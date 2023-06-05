import CardPhoto from "./CardPhoto"

function Dashboard () {
    const ListProduk = [{
        nama: "Sepatu",
        Harga : "Rp.85.000"
    },{
        nama: "Sandal",
        Harga : "Rp.55.000"
    },{
        nama: "Tas",
        Harga : "Rp.125.000"
    }
]
   return(
    // List Rendering
    ListProduk.map((value,index)=>{
        return <CardPhoto key ={index} nm = {value.nama} harga= {value.Harga}/>

    })
   )
  }
export default Dashboard