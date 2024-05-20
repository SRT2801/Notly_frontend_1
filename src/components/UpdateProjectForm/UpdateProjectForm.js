import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function UpdateProjectForm({ project, onUpdate }) {
    const [formValues, setFormValues] = useState({
        title: project.title,
        description: project.description,
        startDate: project.startDate,
        endDate: project.endDate,
        status: project.status
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate(formValues);
    };

    return (
        <Box sx={{ mt: 4, p: 2, border: '1px solid', borderColor: 'primary.main', borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h6" gutterBottom>
                Update Project
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    name="title"
                    value={formValues.title}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Description"
                    name="description"
                    value={formValues.description}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Start Date"
                    name="startDate"
                    type="date"
                    value={formValues.startDate}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="End Date"
                    name="endDate"
                    type="date"
                    value={formValues.endDate}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Status"
                    name="status"
                    value={formValues.status}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default UpdateProjectForm;
