import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const AddEmployeeModal = ({ open, onClose, onSubmit, employeeData }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [designation, setDesignation] = useState('');
    const [reportingTo, setReportingTo] = useState('');

    useEffect(() => {
        if (employeeData) {
            setName(employeeData.name);
            setEmail(employeeData.email);
            setAddress(employeeData.address);
            setDesignation(employeeData.designation);
            setReportingTo(employeeData.reportingTo);
        } else {
            handleResetForm()
        }
    }, [employeeData]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            address,
            designation,
            reportingTo,
        };

        if (employeeData && employeeData._id) {
            formData.id = employeeData._id;
        }

        onSubmit(formData);
        handleResetForm()
    };

    const handleResetForm = (e) => {
        setName('');
        setEmail('');
        setAddress('');
        setDesignation('');
        setReportingTo('');
    };

    return (
        <Dialog open={open} onClose={onClose}>
            {employeeData ? <DialogTitle>Edit Employee</DialogTitle> : <DialogTitle>Add Employee</DialogTitle>}
            <DialogContent>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Reporting To"
                        value={reportingTo}
                        onChange={(e) => setReportingTo(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <DialogActions>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </DialogActions>
                </form>
            </DialogContent>


        </Dialog>
    );
};

export default AddEmployeeModal;
