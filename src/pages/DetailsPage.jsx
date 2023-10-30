import React from 'react';
import { Link, useParams } from 'react-router-dom';
import articleData from '../articleData';
import './detailPage.css';

function DetailsPage() {
  const { title } = useParams();
  const article = articleData.find((a) => a.title === title);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container">
      <div className="cardDetail">
        <div className="p">{article.title}</div>

        <img src={article.imageUrl} alt={article.title} />

        <p>{article.description}</p>

        <div className="bg-white p-4 comment">
          <h2>Expert&apos;s Comment</h2>
          <p className="comment">{article.expertComment}</p>
        </div>

        <Link to="/articles" className="btn btn-primary mt-4">
          <div style={{ color: 'white' }}>Back to Articles</div>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
