import React from "react"

export default function MainCard(props){
  return(
    <div className="flex flex-col bg-black justify-center p-[1.5rem] rounded-[1rem] gap-[.5rem]">
      <div className="flex justify-center items-center">
        <img
        className="{props.imgClassName} w-full h-auto"
        alt={props.imgAlt}
        src={props.imgSrc} />
      </div>
       <div className="flex flex-col gap-2 justify-start">
        <h2 className="text-white font-bold text-[1.2rem]">{props.titleText}</h2>
        <p className="text-silver font-normal text-[1rem]">{props.subtitleText}</p>
      </div>
    </div>
  )
}
