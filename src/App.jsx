import React, { useEffect, useState, useRef, useMemo } from "react"
import Clicker from "./Clicker"
import People from "./People"

function App( {children, clickerCount} ){
    
    const [showClicker, setShowClicker] = useState(true)
    const [sum, setSum] = useState(0)

    const arr = useRef(Array(clickerCount)) 
    const sumOfArray = useRef(0)

    const sumFunction = ( identifier, childrenCountValue ) =>{
        
        arr.current[parseInt(identifier)] = childrenCountValue
        
        sumOfArray.current = (arr.current.reduce((partialSum, a) => partialSum + a, 0))
        
        setSum(sumOfArray.current)
    }

    // useMemo will only execute if the dependency has changed, otherwise it will return previously run value (cached)
    //it will only be called when the clickerCount changes
    const colors = useMemo(()=>{
        const colors = []

        for (let i=0; i < clickerCount; i++){
            colors.push(`hsl(${Math.random()*360}deg,100%,70%)`)
        }

        return colors
    },[ clickerCount])

    // console.log(colors)

return(
    <>
    {children}

    <input type="checkbox" id="showClicker" checked={showClicker} onChange={e=>setShowClicker(e.target.checked)}/>
    <label htmlFor="showClicker">Show Clicker</label>
    <br />
    <hr />
    <h2> Sum of all the clickers {sum}</h2>

    {showClicker && 
    <>
    {[...Array(clickerCount)].map((item,index)=>
        <Clicker sumFunction = {sumFunction} identifier={index} key={index} color={colors[index]}/>
    )}
    </>}


    <People/>
</>
)
    
}

export default App