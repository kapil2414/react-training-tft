import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the name of employee'],
            maxLength: 50,
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email',
            ],
            unique: [true, 'Email already exists'],
        },
        address: {
            type: String,
            required: [true, 'Please provide the address of employee'],
            maxLength: 50,
        },
        designation: {
            type: String,
            maxLength: 30,
        },
        reportingTo: {
            type: String,
            maxLength: 30,
        }
    },
    { timestamps: true }
);

const Employee = mongoose.model('employee', employeeSchema);

export default Employee;
