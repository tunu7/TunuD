import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs'); // Replace 'blogs' with your actual collection name
        const blogsSnapshot = await getDocs(blogsCollection);

        const blogList = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogList);
      } catch (error) {
        setError('Error fetching blogs.');
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="bg-white mx-60 mb-8 py-2 px-8 text-sm">
      <h1 className="text-3xl font-bold mt-4 mb-4">Blogs</h1>
      <p className="text-gray-700">Explore my writings and thoughts.</p>
      <div className="grid grid-cols-1 gap-8"> {/* Change grid-cols-1 to grid-cols-1 */}
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.excerpt}</p>
            <a href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;