import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import articleData from './articleData';

const firebaseConfig = {
  apiKey: 'AIzaSyCFZQsIqOXE5srMDjjw0Zm10Gc24c90iQg',
  authDomain: 'news-e0c4a.firebaseapp.com',
  projectId: 'news-e0c4a',
  storageBucket: 'news-e0c4a.appspot.com',
  messagingSenderId: '534759646578',
  appId: '1:534759646578:web:92f980fe58d45e8cd229eb',
  measurementId: 'G-XMZST880VX',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const articlesCollection = collection(db, 'users');

articleData.forEach(async (article) => {
  const checkWithTitle = query(articlesCollection, where('title', '==', article.title));
  const titleExists = await getDocs(checkWithTitle);

  if (titleExists.empty) {
    if (
      typeof article.title === 'string'
      && typeof article.imageUrl === 'string'
      && typeof article.description === 'string'
      && typeof article.expertComment === 'string'
    ) {
      try {
        const newArticle = await addDoc(articlesCollection, article);
        console.log('Card added with ID: ', newArticle.id);
      } catch (error) {
        console.error('Error adding card: ', error);
      }
    } else {
      console.error('Invalid data:', article);
    }
  } else {
    console.log(`Document with title "${article.title}" already exists.`);
  }
});

export default db;
