import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Page</h1>
      <br />
      <p>This is a page.</p>

      <Link href={"/edit"}>Edit Post 1</Link>

    </div>
  )
}
