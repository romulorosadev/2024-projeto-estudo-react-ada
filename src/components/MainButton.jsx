import React from "react"

export default function MainButton(props){
  return(
    <>
      <button className="bg-white hover:bg-silver text-black rounded-[.5rem] px-[2rem] py-[.5rem] font-bold text-[1.2rem]">{props.cta}</button>
    </>
  )
}
