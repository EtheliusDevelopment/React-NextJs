import { server } from '../config/index'
import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../components/ArticleList.jsx'


export default function Home({articles}) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>As Roma Super</title>
        <meta name="keywords" content="webDev, Forza Roma"/>
      </Head>
      <h1>Next.js Totti Edition</h1>

      <ArticleList articles = {articles}/>
     
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }