function CardPhoto (props) {
    return(
    <div style={{
        height: 100,
        width: 150,
        backgroundColor: "crimson",
        borderRadius: 5,
        padding: 5,
        marginBottom: 15

    }}>
        <h3>{props.nm}</h3>
        <p>{props.harga}</p>
    </div>
    )
   }
   

export default CardPhoto