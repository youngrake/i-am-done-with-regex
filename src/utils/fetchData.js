import firebase from './firebase';

const collectionName = 'data';

const fetchData = async () => {
  try {
    const db = firebase.firestore();
    const data = await db.collection(collectionName).get();
    return data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    return [];
  }
};

export default fetchData;
