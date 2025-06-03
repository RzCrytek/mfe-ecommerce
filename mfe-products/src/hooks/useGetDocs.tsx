import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/firebaseConfig';

interface DataCollection {
  id: string;
  key: number;
  name: string;
  slug: string;
}

interface DocsCollection {
  data: DataCollection[];
  loader: boolean;
}

const initial: DocsCollection = {
  data: [],
  loader: true,
};

const useGetDocs = (collectionName: string) => {
  const [docsCollection, setDocsCollection] = useState<DocsCollection>(initial);

  useEffect(() => {
    const getDocsCollection = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));

      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      })) as DataCollection[];

      console.log('arrQuerySnapshot:', arrQuerySnapshot);

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    };

    getDocsCollection();
  }, [collectionName]);

  return docsCollection;
};

export default useGetDocs;
