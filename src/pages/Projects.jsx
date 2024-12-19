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

        // Check if there are any retrieved documents
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
        // Handle specific errors here (e.g., network errors, permission errors)
        setError("An error occurred while loading projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>s...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="bg-white mx-60 mb-8 py-2 px-8 text-sm">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8"> {/* Use grid for column layout */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;