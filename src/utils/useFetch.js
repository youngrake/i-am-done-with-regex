import { useEffect, useState } from 'react';
import firebase from './firebase';

const collectionName = 'data';

const useFetch = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection(collectionName)
      .get()
      .then(data => {
        if (data) {
          setEntries(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }
      })
      .catch(e => {
        setError(e);
      })
      .finally(() => setLoading(false));
  }, []);

  return { entries, loading, error };
};

export default useFetch;
