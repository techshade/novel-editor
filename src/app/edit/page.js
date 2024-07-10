// app/edit/page.js
import Link from 'next/link'
import EditorCompo from './EditorCompo'
import React from 'react'

export default function page() {
  return (
    <div className=' w-full flex items-center flex-col'>
        <div>
        <Link href="/"><h1>Page</h1></Link>
        <br />

        <h1>Edit Post 1</h1>
        <br />
        </div>

      <EditorCompo className=" w-full"/>
    </div>
  )
}
