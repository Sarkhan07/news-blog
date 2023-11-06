import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../firebase';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const articleData = querySnapshot.docs.map((doc) => doc.data());
        setArticles(articleData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => (
          <div key={article.title} className="col-lg-4 col-md-6 mb-4">
            <Link to={`/article/${article.title}`}>
              <div className="card card-zoom">
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
