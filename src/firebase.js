import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
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
  addDoc(articlesCollection, article)
    .then((docRef) => {
      console.log('Документ успешно добавлен с ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Ошибка при добавлении документа: ', error);
    });
});

export default db;
