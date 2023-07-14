import { useEffect, useState } from "react"

export default function People(){
    const [people, setPeople] = useState(null)

    //fetch API function, runs when the first render of this component
    useEffect(()=>{
        //add a delay before fetching to see loading page
        setTimeout(getPeople,5000)
    },[])

    //get people fetch function
    const getPeople = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
        setPeople(data)
    }


    return(
        
        people ? 
        <div>
            <ul>
                {people.map((value,index)=>{
                    return(
                    <li key={value.id}>
                        {value.name} | {value.email}
                    </li>)
                })}
            </ul>
        </div>
        :
        <h1>People Loading</h1>
    )
}