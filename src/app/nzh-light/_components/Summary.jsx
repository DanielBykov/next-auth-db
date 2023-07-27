"use client"
import {useEffect, useState} from "react";
import {getSumAI_NLPCloud} from "@/app/nzh-light/_components/getSummaryAI_NLPCloud";

export const Summary = ({text}) => {
  const [sum, setSum ] = useState("")
  const [load, setLoad ] = useState(false)
  const [err, setErr ] = useState(false)
  const getSum = async () => {
    setErr(false)
    setLoad(true)
    const s = await getSumAI_NLPCloud(text)
    if(s){
      setSum(s)
    } else {
      setErr(true)
    }
    setSum(s)
    setLoad(false)
  }

  const spinner = (
    <div class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
    </div>
  )

  const button = (
    <div class="flex justify-center items-center">
    <button
      onClick={getSum}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
      Get summary
    </button>
    </div>
  )

  return (
    <div class="bg-gray-100 p-8 mt-2">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold mb-4 text-center">Summary Section (AI generated)</h3>
        <p class="text-gray-700 mb-4">
          {sum || (load && spinner) || button}
          {err ? "API error" : ""}
        </p>
      </div>
    </div>
  )
}
