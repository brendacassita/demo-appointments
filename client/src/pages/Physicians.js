import { useState, useEffect } from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "../components/List";

const Physicians = () => {
  const { response, loading, error } = useAxiosOnMount("/api/physicians");

  // HOOK UP 'CRUDABLE' doctors state in combo with
  // our useAxiosOnMount
  const [physicians, setPhysicians] = useState([]);

  // I need to wait for that axios call and set the response
  // and once that is then i can set my doctor state
  useEffect(() => {
    if (response) {
      setPhysicians(response.data);
    }
  }, [response]);

  const addPhysician = () => {
    setPhysicians([...physicians, { id: 3, name: "DR asdashjk" }]);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <h1>Response</h1>
      <p>{JSON.stringify(response)}</p>
      <h1>Physicians from Response</h1>
      <p>{JSON.stringify(response.data)}</p>
      <h1>Physicians from physicians state (No renderData)</h1>
      <List data={physicians} />
      <h1>Physicians from physicians state (renderData)</h1>
      <List
      header={'Header YOYO'}
        data={physicians}
        renderItem={(d) => {
          return (
            <div key={d.id}>
              <p>{d.name}</p>
            </div>
          );
        }}
      />
      <p onClick={addPhysician}>add</p>
    </div>
  );
};

export default Physicians;

// GENERIC LOAD DATA ON MOUNT INSTRUCTIONS
//load data on mount

//1. import tools
// import {useState, useEffect} from 'react'
// import axios from 'axios'

//2. set up state tools
//const [response, setResponse] = useState(null)
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)

// 3. doing axios calling and updating state
// useEffect(()=>{
//     getData()
// },[])

// const getResponse = async()=>{
//     setError(null)
//     try {
//         let res = await axios.get(urlHere)
//         setResponse(res)
//         setLoading(false)
//     } catch (error) {
//         setError(error)
//         setLoading(false)
//     }
// }

//4. use our state to render what going on
// if(loading) return <p>loading</p>
// if(error) return <p>error</p>
// return (
//     <div>
//         <h1>Response</h1>
//         <p>{JSON.stringify(response)}</p>
//     </div>
// )


