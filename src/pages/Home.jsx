import React, { useEffect, useState } from "react";
import { db, collection, getDocs, query, limit } from "../firebaseConfig"; // Import necessary functions
import { Link } from "react-router-dom";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch 2 projects from Firestore (limit to 2)
    const fetchProjects = async () => {
      try {
        // Create a query to get only 2 projects
        const q = query(collection(db, "projects"), limit(2));

        // Execute the query
        const querySnapshot = await getDocs(q);

        // Map the query snapshot to get the project data
        const fetchedProjects = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Fetched projects:", fetchedProjects); // Log the fetched projects
        setProjects(fetchedProjects); // Set the fetched projects in the state
      } catch (error) {
        console.error("Error fetching projects:", error); // Log any errors
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-white mx-60 mb-8 py-2 px-8 text-sm">
      {/* Hero Section */}
      <section className="hero flex justify-center items-center py-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-6">
            I'm a passionate developer with a love for technology, business, and design. I create impactful software solutions while continuously learning and growing.
          </p>
          <p className="text-base">
            Explore my work, projects, and blog to learn more about my journey and the projects I’ve worked on.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-16 ">
        <h3 className="text-xl font-bold mb-2 pl-2">Recent Projects</h3>
        <p className="text-gray-700 mb-6 pl-2">
          Here are a few of my recent projects.
        </p>

        {/* Grid container for projects */}
        <div className="grid grid-cols-1 gap-8">
          {loading ? (
            <p>Loading projects...</p>
          ) : projects.length === 0 ? (
            <p>No projects found.</p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))
          )}
        </div>

        {/* Button to view all projects */}
        <Link
          to="/projects"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg hover:shadow-xl transition-all"
        >
          View All Projects
        </Link>
      </section>
    </div>
  );
};

export default Home;
