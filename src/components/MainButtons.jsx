import React from "react"
import MainButton from "./MainButton"

export default function MainButtons(){
  return(
    <div className="flex justify-center items-center gap-[5rem]">
      <MainButton cta="primeiro" />
      <MainButton cta="segundo" />
      <MainButton cta="terceiro" />
    </div>
  )
}
