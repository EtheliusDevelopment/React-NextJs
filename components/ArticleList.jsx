import articleStyles from '../styles/Article.module.css'
import ArtcleItem from './ArtcleItem.tsx'

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
             {
                   articles.map((article)=> ( 
       <ArtcleItem article={article} key={article.id}/> 
       
      ))
      }
        </div>
    )
}

export default ArticleList
