import axios from 'axios'
import { useEffect , useState } from 'react'

import IArticle from '../interfaces/IArticle'
import ArticlesCard from '../components/ArticlesCard'

export default function Homepage() {

  const [articles, setArticles] = useState<IArticle[]>([])
  //articles è un array di oggetti di tipo IArticle

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/articles')
      .then(nius => setArticles(nius.data.results))
  }, [])

  //console.log(articles);

  return (
    <div className="d-flex flex-wrap">
      {articles.map((a) => <ArticlesCard key={a.id} articolo={a} />)}
    </div>
  )
}
