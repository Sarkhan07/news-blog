import React from 'react';
import { Link } from 'react-router-dom';
import articleData from '../articleData';
import './article.css';

function Articles() {
  return (
    <div className="container">
      <div className="row">
        {articleData.map((article) => (
          <div key={article.title} className="col-lg-4 col-md-6 mb-4">
            <Link to={`/article/${article.title}`}>
              <div className="card">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="card-img-top"
                />
                <div className="card-title">
                  <h2 className="card-h2">{article.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
