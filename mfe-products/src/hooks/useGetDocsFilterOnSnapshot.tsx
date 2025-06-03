import { useEffect, useState } from 'react';

import { collection, DocumentReference, onSnapshot, query, where } from '@firebase/firestore';
import db from '../firebase/firebaseConfig';

export interface ProductCollection {
  id: string;
  rating: number;
  original_price: number;
  price: number;
  sku: string;
  categoryId: DocumentReference;
  slug: string;
  ide: number;
  description: string;
  discount_percentage: number;
  images: {
    alt: string;
    src: string;
  }[];
  available: boolean;
  stock: number;
  published: boolean;
  brand: string;
  title: string;
  categoryKey: number;
  exclusive: boolean;
}

interface DocsCollection {
  data: ProductCollection[];
  loader: boolean;
}

const initial: DocsCollection = {
  data: [],
  loader: true,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetDocsFilterOnSnapshot = (collectionName: string, filterQuery: any = []) => {
  const [docsCollection, setDocsCollection] = useState<DocsCollection>(initial);

  const isFilterQuery = filterQuery.length ? true : false;
  const [field, conditional, valor] = filterQuery;

  useEffect(() => {
    let q;
    if (isFilterQuery) {
      q = query(collection(db, collectionName), where(field, conditional, valor));
    } else {
      q = query(collection(db, collectionName));
    }

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arrQuerySnapshot = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      })) as ProductCollection[];

      console.log('arrQuerySnapshot2:', arrQuerySnapshot);

      setDocsCollection({ data: arrQuerySnapshot, loader: false });
    });

    return () => unsubscribe();
  }, [collectionName, isFilterQuery, field, conditional, valor]);

  return docsCollection;
};

export default useGetDocsFilterOnSnapshot;
