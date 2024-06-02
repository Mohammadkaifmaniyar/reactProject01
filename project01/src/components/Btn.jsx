import React, { useState } from 'react'

function Btn() {
    let [value, setValue] = useState(0);
    const addValue = ()=> {
        setValue((value)=>
            value+1
        )
    }

    const subValue=()=>{
        setValue(value-1);
    }

  return (
    <div>
        <button onClick={addValue} > 
            The value add is : {value}
        </button>
        <button onClick={subValue} > 
            The value sub is : {value}
        </button>
    </div>
  )
}

export default Btn