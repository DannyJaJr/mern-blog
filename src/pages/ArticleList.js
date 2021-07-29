import React from 'react'

import articleContent from './article-content'
import Article from '../components/Articles'

function ArticleList() {
    return (
        <>
            <h1 className="sm:text-4xl text-2xl font-bold mb-6 mt-6 text-gray-900">
                Articles list page :
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap m-4">
                    <Article articles={articleContent} />
                   

                </div>

            </div>
        </>
    )
}

export default ArticleList
