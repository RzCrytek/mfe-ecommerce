import { useEffect, useState } from 'react';
import { doc, onSnapshot } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';
import type { ProductCollection } from './useGetDocsFilterOnSnapshot';

interface GetDoc {
  document: ProductCollection | null;
  loader: boolean;
  isDocument: boolean;
}

const initial: GetDoc = {
  document: null,
  loader: true,
  isDocument: true,
};

const useGetDocOnSnapshot = (collection: string, documentId: string) => {
  const [document, setDocument] = useState(initial);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, collection, documentId), (doc) => {
      console.log('doc:', doc);

      if (doc.exists()) {
        const data = doc.data() as ProductCollection;

        setDocument((prev) => ({
          ...prev,
          document: { ...data, id: doc.id },
          loader: false,
        }));
      } else {
        setDocument((prev) => ({ ...prev, isDocument: false, loader: false }));
        console.warn('No existe el documento y/o producto');
      }
    });

    return () => unsubscribe();
  }, [collection, documentId]);

  return document;
};

export default useGetDocOnSnapshot;
