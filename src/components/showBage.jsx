import React, { useState } from "react";
import ProjectsListPage from "./ProjectsListPage";
import ProjectDetailsPage from "./ProjectDetailsPage";

const GraduationProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {selectedProject ? (
        <ProjectDetailsPage
          project={selectedProject}
          onBackToList={handleBackToList}
        />
      ) : (
        <ProjectsListPage onProjectSelect={handleProjectSelect} />
      )}
    </>
  );
};

export default GraduationProjects;
