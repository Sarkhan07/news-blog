import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

import './detailPage.css';

function DetailsPage() {
  const { title } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = await getDocs(collection(db, 'users'));
        const articleData = docRef.docs.map((doc) => doc.data());
        setArticle(articleData);
      } catch (error) {
        console.error('Error fetching data: ');
      }
    };

    fetchArticle();
  }, [title]);

  if (!article) {
    return <div className="container">Article not found</div>;
  }

  const articlePoint = article.find((a) => a.title === title);
  console.log(articlePoint);

  return (
    <div className="container">
      <div className="cardDetail">
        <div className="p">{articlePoint.title}</div>

        <img src={articlePoint.imageUrl} alt={articlePoint.title} />

        <p>{articlePoint.description}</p>

        <div className="bg-white p-4 comment">
          <h2>Expert&apos;s Comment</h2>
          <p className="comment">{articlePoint.expertComment}</p>
        </div>

        <Link to="/articles" className="btn btn-primary mt-4">
          <div style={{ color: 'white' }}>Back to Articles</div>
        </Link>
      </div>
    </div>
  );
}

export default DetailsPage;
