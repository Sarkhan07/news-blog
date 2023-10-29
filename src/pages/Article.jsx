import React from 'react';
import { Link } from 'react-router-dom';
import articleData from '../articleData';

function Articles() {
  return (
    <div>
      <ul>
        {articleData.map((article) => (
          <li key={article.title}>
            <Link to={`/article/${article.title}`}>
              <div>
                <img src={article.imageUrl} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
