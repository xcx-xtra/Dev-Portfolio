import React from "react";

const Projects = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your project cards here */}
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p>A brief description of the project.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Project Three</h3>
            <p>A brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
