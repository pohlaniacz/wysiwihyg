import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../components/external/firebase';
import { Link } from 'react-router-dom';

const UserPages = ({ userId }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchUserPages = async () => {
      const q = query(collection(db, 'blocks'), where('user', '==', userId));
      const querySnapshot = await getDocs(q);
      const userPages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPages(userPages);
    };

    if (userId) {
      fetchUserPages();
    }
  }, [userId]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Your Pages</h2>
      {pages.length > 0 ? (
        <ul className="space-y-2">
          {pages.map(page => (
            <li key={page.id}>
              <Link
                to={`/p/${page.id}`}
                className="text-indigo-600 hover:text-indigo-800"
              >
                {page.title || `Page ${page.id}`}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't created any pages yet.</p>
      )}
    </div>
  );
};

export default UserPages;