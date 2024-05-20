import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Box } from '@mui/material';
import CONFIG from '../../utils/config';
import { get, patch } from '../../utils/http';
import { errorAlert, successAlert } from "../../utils/toast";
import StyledCard from '../../components/Card/Card';

import UpdateProjectForm from '../../components/UpdateProjectForm/UpdateProjectForm';

function Admin() {
  const [companyData, setCompanyData] = useState({
    name: '',
    nit: '',
    phoneNumber: '',
    email: ''
  });

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const [edit, setEdit] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const url = `${CONFIG.URL.BACKEND_USER}/company/get`;
        const urlProjects = `${CONFIG.URL.BACKEND_USER}/project/get/all`;
        const response = await get(url);
        const responseProject = await get(urlProjects);
        console.log(responseProject);
        setProjects(responseProject.projects);
        delete response.company.id;
        setCompanyData(response.company);
      } catch (error) {
        console.error(error);
        errorAlert(error.message);
      }
    };
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData({
      ...companyData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${CONFIG.URL.BACKEND_USER}/company/update`;
      await patch(url, companyData);
      successAlert("Data was update with success");
    } catch (error) {
      errorAlert(error.message || "Error during updating data");
    }
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
};

const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
        project.title === selectedProject.title ? { ...project, ...updatedProject } : project
    );
    setProjects(updatedProjects);
    setSelectedProject(null);
};

  return (
    <>
      <Button onClick={() => setEdit(!edit)} color='info'>Edit company's information</Button>
      <Button onClick={() => setShowProjects(!showProjects)} color='info'>Projects</Button>
      {
        edit ? (
            <>
            <h1>Company Information</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Company Name"
                name="name"
                value={companyData.name}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="NIT"
                name="nit"
                value={companyData.nit}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={companyData.phoneNumber}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={companyData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update
              </Button>
            </form>
            </>
        ): (
            <></>
        )
      }
      {
        showProjects ? (
            <>
                <br/>
                <h1>Projects</h1>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginLeft: "10px" }}>
                        {projects.map((project, index) => (
                            <StyledCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                startDate={project.startDate}
                                endDate={project.endDate}
                                status={project.status}
                                sx={{ ml: index !== 0 ? 2 : 0 }}
                                id={project.id}
                                click={handleCardClick}
                            />
                        ))}
                </Box>
                {selectedProject && (
                        <UpdateProjectForm
                            project={selectedProject}
                            onUpdate={handleUpdateProject}
                        />
                    )}
            </>
        ) : ( <></> )
      }
    </>
  );
}

export default Admin;
