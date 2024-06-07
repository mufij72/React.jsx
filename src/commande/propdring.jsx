import React, { createContext } from 'react'
import A from './Fuction componet/A'
const data =createContext();
export default function propdring() {
  const name="caption marvel"
  return (
    <div>
    <data.Provider value={name}>
    <A />
    </data.Provider>
      <A />
    </div>
  )
}
