import React, { useState } from "react";

export default function MyCounter(){

  const [counter, setCounter] = useState(0);

  return(
    <div className="flex justify-center items-center gap-4">

      <h3 className=" text-white font-bold w-[10rem] text-center">CONTADOR: {counter}</h3>

    </div>
  )
}
