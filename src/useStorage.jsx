import { useState, useEffect } from 'react';
import { projectStorage, db, timestamp } from './Firebase';
import { v4 as uuidv4 } from 'uuid';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = db.collection('posts');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.doc(uuidv4()).update({ image : url});
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;