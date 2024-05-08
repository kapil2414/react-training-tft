import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, CircularProgress, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { listEmployees, createEmployeeAction, updateEmployeeAction, deleteEmployeeAction, resetErrorValuesAction } from '../../redux/actions/employeeAction';
import { useNavigate } from 'react-router-dom';
import AddEmployeeModal from './AddEmployeeModal';

const EmployeeList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('');
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const { employees, loading, error } = useSelector((state) => state.employeeList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const employeeCreate = useSelector((state) => state.employeeCreate);
  const { success: successCreate, error: createError } = employeeCreate;

  const employeeUpdate = useSelector((state) => state.employeeUpdate);
  const { success: successUpdate, error: updateError } = employeeUpdate;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const { success: successDelete, error: deleteError } = employeeDelete;


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(resetErrorValuesAction())
    setOpen(false);
  };

  useEffect(() => {
    dispatch(listEmployees());
    if (!userInfo) {
      navigate("/");
    }
    setOpen(false);

  }, [dispatch, userInfo, navigate, successCreate, successUpdate, successDelete]);

  useEffect(() => {
    if (createError || updateError || deleteError) {
      console.log(createError, updateError, deleteError)
      setOpen(true);
    }
  }, [createError, updateError, deleteError]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editEmployeeData, setEditEmployeeData] = useState(null);

  const handleOpenModal = (employeeData) => {
    if (employeeData) {
      setAction('Edit');
    } else {
      setAction('Add');
    }
    setIsAddModalOpen(true);
    setEditEmployeeData(employeeData);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    setEditEmployeeData(null);
  };

  const handleAddEmployee = (employeeData) => {
    if (action === 'Add') {
      dispatch(createEmployeeAction(employeeData));
    }
    if (action === 'Edit') {
      dispatch(updateEmployeeAction(employeeData));
    }
    setIsAddModalOpen(false);
    setEditEmployeeData(null);
  };

  const handleDeleteConfirmation = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteConfirmationOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteEmployeeAction(employeeToDelete._id));
    setDeleteConfirmationOpen(false);
  };

  const cancelDelete = () => {
    setEmployeeToDelete(null);
    setDeleteConfirmationOpen(false);
  };

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Error: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Employee List
      </Typography>
      <Button variant="contained" onClick={() => handleOpenModal()} sx={{ marginBottom: '20px' }}>+ Add Employee</Button>
      {employees.length === 0 ? (
        <Typography variant="body1" component="p">
          No employees available.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Reporting To</TableCell>
                <TableCell>Actions</TableCell>
                <TableCell>Delete</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee._id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.address}</TableCell>
                  <TableCell>{employee.designation}</TableCell>
                  <TableCell>{employee.reportingTo}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleOpenModal(employee)}>Edit</Button>
                  </TableCell>
                  <TableCell> 
                    <Button variant="outlined" onClick={() => handleDeleteConfirmation(employee)}>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <AddEmployeeModal open={isAddModalOpen} onClose={handleCloseModal} onSubmit={handleAddEmployee} employeeData={editEmployeeData} />
      <Snackbar
        open={open}
        autoHideDuration={1000}
        message={createError || updateError || deleteError}
        onClose={handleClose}
      />
      {/* Delete Confirmation Modal */}
      <Dialog open={deleteConfirmationOpen} onClose={cancelDelete}>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default EmployeeList;
