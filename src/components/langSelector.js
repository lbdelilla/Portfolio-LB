import React from 'react'
import { useRouter } from "next/router";

const LangSelector = () => {
  const router = useRouter()
  
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, {locale: e.target.value })
  }  

  return (
    <div className="flex w-24 flex-col gap-6">
    <select className="rounded-md p-1 border border-purple-500 text-xs"  onChange={handleChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  </div>
  )
}

export default LangSelector