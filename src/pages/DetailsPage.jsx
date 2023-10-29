import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articleData from '../articleData';

function DetailsPage() {
  const { title } = useParams();
  const article = articleData.find((a) => a.title === title);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.description}</p>
      <p>{article.expertComment}</p>
      <Link to="/articles">Back to Articles</Link>
    </div>
  );
}

export default DetailsPage;
