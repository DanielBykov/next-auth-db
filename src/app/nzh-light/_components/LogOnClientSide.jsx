"use client"

const LogOnClientSide = ({label="LogOnClientSide", log}) => {
  console.log(`d256 ${label}:`, log)
  return null
};

export default LogOnClientSide;