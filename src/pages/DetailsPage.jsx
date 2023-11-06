import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';

import './detailPage.css';

function DetailsPage() {
  const { title } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, 'users', title);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setArticle(docSnapshot.data());
        } else {
          console.log('Article not found');
        }
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchArticle();
  }, [title]);

  if (!article) {
    return <div className="container">Article not found</div>;
  }

  const articlePoint = article.find((a) => a.title === title);

  return (
    <div className="container">
      <div className="cardDetail">
        <div className="p">{articlePoint.title}</div>

        <img src={articlePoint.imageUrl} alt={articlePoint.title} />

        <p>{articlePoint.description}</p>

        <div className="bg-white p-4 comment">
          <h2>Expert`&apos;`s Comment</h2>
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
