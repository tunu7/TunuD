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
    return <p className="text-center text-gray-500 mt-8">Loading Blogs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  return (
    <section className="bg-white px-4 py-8 sm:px-8 lg:px-20 xl:px-40">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Blogs</h1>
      <p className="text-center text-gray-700 mb-8">
        Explore my writings and thoughts.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Responsive grid */}
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {blog.excerpt}
            </p>
            <a
              href={`/blog/${blog.id}`}
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
