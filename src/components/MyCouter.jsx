import React, { useState } from "react";

export default function MyCounter(){

  const [counter, setCounter] = useState(0);

   function aumentar(){
    setCounter(counter + 1);
  }

  return(
    <div className="flex justify-center items-center gap-4">
      <button onClick={aumentar} className="inline-block bg-white text-black font-bold p-4">aumentar</button>

      <h3 className=" text-white font-bold w-[10rem] text-center">CONTADOR: {counter}</h3>

    </div>
  )
}
