import { useState, useEffect } from 'react';
import firebase from './firebase';

const collectionName = 'data';

const useStore = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const db = firebase.firestore();
    const data = await db.collection(collectionName).get();

    setEntries(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { entries, loading };
};

export default useStore;
