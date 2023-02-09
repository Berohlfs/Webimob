import { useState } from "react"

function Home(){


    const[num,setNum] = useState(5)

    const func1 = ()=>{

        setNum(3)
        console.log(num)

    }

    const func2 = ()=>{

        console.log(num)
    }




    return <h1>
        <button onClick={func1}>1</button><button onClick={func2}>2</button>
        Home
    </h1>
}
export default Home;

