import { initializeApp } from 'firebase/app';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import articleData from './articleData';

const firebaseConfig = {
  apiKey: 'AIzaSyDgfG0hXnw3JgWTnlZ2TOXyPEeg_2SZQ5Q',
  authDomain: 'news-blog-fa7c4.firebaseapp.com',
  databaseURL:
    'https://news-blog-fa7c4-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'news-blog-fa7c4',
  storageBucket: 'news-blog-fa7c4.appspot.com',
  messagingSenderId: '698100103653',
  appId: '1:698100103653:web:a75ae5889c9cc757efd70c',
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
