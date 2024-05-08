import express from 'express';
import { employeeList, addEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.Controller.js';

const router = express.Router();

router.get('/list', employeeList);
router.post('/add', addEmployee);
router.put('/edit/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export default router;