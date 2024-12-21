import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, "projects");
        const projectsSnapshot = await getDocs(projectsCollection);

        if (!projectsSnapshot.empty) {
          const projectsList = projectsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProjects(projectsList);
        } else {
          console.warn("No projects found in the 'projects' collection.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(
          "An error occurred while loading projects. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-8">Loading Projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  return (
    <section className="bg-white px-4 py-8 sm:px-8 lg:px-20 xl:px-40">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
      Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
        >
          <img
            src="E:\Inspiration images\portfolio\images.jpg" // Hardcoded static image URL
            alt={project.title} // Dynamic alt text
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default Projects;
