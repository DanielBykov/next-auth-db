"use client"
import {useEffect, useState} from "react";
import {getSentimentAI_NLPCloud, getSumAI_NLPCloud} from "@/app/nzh-light/_components/getSummaryAI_NLPCloud";

export const Sentiment = ({text}) => {

  // console.log('d256 text:', text)
  const [sentiments, setSentiments ] = useState([])
  const [load, setLoad ] = useState(false)
  const [err, setErr ] = useState(false)
  const getSentiment = async () => {
    setErr(false)
    setLoad(true)
    const s = await getSentimentAI_NLPCloud(text)
    console.log('d256 s:', s)
    if(Array.isArray(s)){
      setSentiments(s)
    } else {
      setErr(true)
    }
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
      onClick={getSentiment}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
      Analise
    </button>
    </div>
  )

    const array = [
      {
        "label": "joy",
        "score": 0.9987751841545105
      },
      {
        "label": "love",
        "score": 0.00040877042920328677
      },
      {
        "label": "surprise",
        "score": 0.0003979837929364294
      },
      {
        "label": "sadness",
        "score": 0.00017779059999156743
      },
      {
        "label": "anger",
        "score": 0.00012217728362884372
      },
      {
        "label": "fear",
        "score": 0.00011809921124950051
      }
    ];

  const EmotionCard = ({ label, score }) => {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold">Emotion: {label}</h2>
        <p className="text-gray-600">Score: {score}%</p>
      </div>
    );
  };

  return (
    <div class="bg-gray-100 p-8 mt-2">
      <div class="max-w-3xl mx-auto">
        <h3 class="text-2xl font-bold mb-4 text-center">Sentiment Analysis (AI generated)</h3>
        <p class="text-gray-700 mb-4">
          {(sentiments.length && (
            <div className="container mx-auto p-4">
              <h1 className="text-2xl font-semibold mb-4">Emotion Scores</h1>
              <div className="grid grid-cols-2 gap-4">
                {sentiments.map((emotion, index) => (
                  <EmotionCard key={index} label={emotion.label} score={Math.round(emotion.score * 100)} />
                ))}
              </div>
            </div>
          )) || (load && spinner) || button}
          {err ? "API error" : ""}
        </p>
      </div>



    </div>
  )
}
