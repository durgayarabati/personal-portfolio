// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const initialProject = {
  title: "",
  description: "",
  techStack: "",
  github: "",
  live: "",
  icon: "Globe",
  gradient: "from-blue-600 to-indigo-700",
  bgGradient: "from-blue-50 to-indigo-100"
};

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(initialProject);

  const projectsCollectionRef = collection(db, "projects");

  const fetchProjects = async () => {
    const data = await getDocs(projectsCollectionRef);
    setProjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const addProject = async () => {
    if (newProject.title && newProject.description) {
      const formattedProject = {
        ...newProject,
        techStack: newProject.techStack.split(",").map((tech) => tech.trim())
      };
      await addDoc(projectsCollectionRef, formattedProject);
      setNewProject(initialProject);
      fetchProjects();
    }
  };

  const deleteProject = async (id) => {
    const projectDoc = doc(db, "projects", id);
    await deleteDoc(projectDoc);
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel - Projects</h2>
      <input
        type="text"
        placeholder="Title"
        value={newProject.title}
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Tech Stack (comma separated)"
        value={newProject.techStack}
        onChange={(e) => setNewProject({ ...newProject, techStack: e.target.value })}
      />
      <input
        type="text"
        placeholder="GitHub URL"
        value={newProject.github}
        onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
      />
      <input
        type="text"
        placeholder="Live URL"
        value={newProject.live}
        onChange={(e) => setNewProject({ ...newProject, live: e.target.value })}
      />
      <select
        value={newProject.icon}
        onChange={(e) => setNewProject({ ...newProject, icon: e.target.value })}
      >
        <option value="Globe">Globe</option>
        <option value="Zap">Zap</option>
        <option value="Database">Database</option>
        <option value="Code">Code</option>
      </select>
      <input
        type="text"
        placeholder="Gradient (e.g., from-blue-600 to-indigo-700)"
        value={newProject.gradient}
        onChange={(e) => setNewProject({ ...newProject, gradient: e.target.value })}
      />
      <input
        type="text"
        placeholder="BG Gradient (e.g., from-blue-50 to-indigo-100)"
        value={newProject.bgGradient}
        onChange={(e) => setNewProject({ ...newProject, bgGradient: e.target.value })}
      />

      <br />
      <button onClick={addProject} style={{ marginTop: "10px" }}>
        Add Project
      </button>

      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginTop: "20px" }}>
            <strong>{project.title}</strong> – {project.description}
            <br />
            <small>Tech: {project.techStack.join(", ")}</small>
            <br />
            <a href={project.github} target="_blank" rel="noreferrer">GitHub</a> |{" "}
            <a href={project.live} target="_blank" rel="noreferrer">Live</a>
            <br />
            <button onClick={() => deleteProject(project.id)} style={{ marginTop: "5px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
