import axios from "axios";
import { useEffect, useState } from "react";

type dataFormat = {
   userId: number,
    id: number,
    title: string,
    completed: boolean

}
export function Home() {

    const [data, setData] = useState<dataFormat>();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    // useEffect( ()=>{
    //      axios.get('<https://api.example.com/data>')
    //     .then(response => {
    //         setData(response.data);
    //         setLoading(false);
    //     })
    //     .catch(error=> {
    //         setError(error);
    //         setLoading(false);
    //     })
    // },[])
    useEffect(() => {
        const asyncFunc = async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/todos/2');
                setData(data.data);
                setLoading(false);
            } catch(err) {
               setError(error);
               setLoading(false);
           }
        };
        asyncFunc();
    },[])

   return (
    <>
     <h1> Home </h1>
    <p> { data?.title }</p>
    </>

   )
  









//     function getWeather() {
//         return new Promise(function(resolve, reject){
//             resolve('Sunny')
//         })
//     }

//     function OnSuccess(data: any) {
//         console.log(`first param ${data}`)
//     }
//     function OnError(data: any) {
//         console.log(`Error param ${data}`)
//     }
//    //using async await
//     async function callGetWeather() {
//         try{
//             await getWeather();

//         }
//         catch(error) {
//             console.log(`ERROR`);
//         }
//     }
//     //
//     getWeather().then(OnSuccess).catch(OnError)


}

