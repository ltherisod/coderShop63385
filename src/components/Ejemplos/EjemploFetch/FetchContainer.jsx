import React, {useEffect, useState} from 'react'

const FetchContainer = () => {
//Declamarmos los estados
    const [personajes, setPersonajes]=useState([])
    const [error, setError]=useState(null)
    // const [on, setOn] = useState(false)
    const [loader, setLoader]=useState(false)
    useEffect(()=>{
        //Pido datos, traer data, hacemos un get
        setLoader(true)
        fetch('https://rickandmortyapi.com/api/character')
        .then((res)=> res.json())//lo traduzco
        .then((result)=> { //Lo guardamos
            setError(null)
            // setLoader(false)
            setPersonajes(result.results)})
        .catch((error)=>{ //atrapamos el error
            // setLoader(false)
            setError(true)
        })
        .finally(()=> {//apagamos el loader ya sea si cae en el then o en el catch
            setLoader(false)
            // setError(null)
        })
    },[])

    //return anticipado
    if(loader){
        return <p>Cargando....</p>
    }
  return (
    <div>
        {/* <button onClick={()=> setOn(!on)}> on</button> */}
        {error && <p>Disculpe las molestias, intente mas tarde</p>}
        {personajes.map((personaje)=><p key={personaje.id}>{personaje.name}</p>)}
    </div>
  )
}

export default FetchContainer