import React from "react"
import Layout from '../components/layout'
import { ExampleButton } from '../components/button'

export default function Home() {
  return (
    <Layout>
      <h1>Hello Gatsby!</h1>
      <h1>Another h1</h1>
      <h1 style={{ color: 'red', textTransform: 'uppercase' }}>More h1 with inline styling</h1>
      <ExampleButton>Example Button</ExampleButton>
    </Layout>
  )
}
