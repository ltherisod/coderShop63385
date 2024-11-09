import React, {useEffect, useState} from 'react'
import FetchList from './FetchList'

const FetchContainer = () => {
//Declamarmos los estados
    const [personajes, setPersonajes]=useState([])
    const [error, setError]=useState(null)
    // const [on, setOn] = useState(false)
    const [loader, setLoader]=useState(false)

    //THEN Y CATCH
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

    //TRY CATCH

//     const getCharacters = async ()=>{
//         try{
//             setLoader(true)
//             const res = await fetch('https://rickandmortyapi.com/api/character')
//             console.log(res, 'res')
//             const result = await res.json()
//             console.log(result, 'result')
//             setPersonajes(result.results)
//         }catch(error){
//             setError(true)
//         }finally{
//             setLoader(false)
//         }
//     }
//    useEffect(()=>{
//     getCharacters()
//    },[])


//Async await

// const getCharacters = async () =>{
//     const res = await fetch('https://rickandmortyapi.com/api/character')
//     const result = await res.json()
//     return result.results
// }

// useEffect(()=>{
//     setLoader(true)
//     getCharacters()
//     .then((data)=> setPersonajes(data))
//     .catch((error)=> setError(error))
//     .finally(()=> setLoader(false))
// },[])

// useEffect(()=>{
//     try{
//         const data = getCharacters()
//         setPersonajes(data)
//     }catch(error){
//         setError(error)
//     }finally{
// setLoader(false)
//     }
// },[])

    //return anticipado
    if(loader){
        return <p>Cargando....</p>
    }
  return (
    <div>
        {/* <button onClick={()=> setOn(!on)}> on</button> */}
        {error && <p>Disculpe las molestias, intente mas tarde</p>}
       <FetchList personajes={personajes}/>
    </div>
  )
}

export default FetchContainer