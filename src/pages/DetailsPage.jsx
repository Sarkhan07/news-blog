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
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h1>{article.title}</h1>
          </li>
          <li className="list-group-item">
            <img src={article.imageUrl} alt={article.title} />
          </li>
          <li className="list-group-item">
            <p>{article.description}</p>
          </li>
          <li className="list-group-item">
            <div className="bg-white p-4">
              <h2>Expert&apos;s Comment</h2>
              <p>{article.expertComment}</p>
            </div>

            <Link to="/articles" className="bnt btn-primary mt-4">
              Back to Articles
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsPage;
