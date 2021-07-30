import React , {useState, useEffect} from 'react'
import articleContent from './article-content'
import Articles from '../components/Articles'
import Notfound from './Notfound'
import CommentsList from '../components/CommentsList'
import AddCommetForm from '../components/AddCommentForm'

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);
    

  //   to connect the backend with fecth add this on json: 
  //   "name": "full-stack-blog",
  // "version": "0.1.0",
  // "private": true,
  // "proxy": "https://localhost:8000/", then 
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

    if (!article) return <Notfound />

    const otherArticles = articleContent.filter(article => article.name !== name )
   
    return (
        <>
             <h1 className='sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommetForm articleName={name} setAritcleInfo={setArticleInfo} />
      
      
      <h1 className="sm:text-2x text-xl font-bold mt-4 mb-4 text-gray-900">Related Articles</h1>
      <div className="flex flex wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
            
        </>
    )
}

export default Article;
