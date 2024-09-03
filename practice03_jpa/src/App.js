import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
    const [employees, setEmployees] = useState([])

    const [employee, setEmployee] = useState({
        emp_id: '',
        emp_name: '',
        phone: '',
        salary: 0,
        hire_date: '',
    })

    const handleGetAll = () => {
        axios.get(`http://192.168.1.12/employee`).then(resp => {
            console.log(resp)
            setEmployees(resp.data)
        })
    }

    const handleModify = e => {
        const { name, value } = e.target
        setEmployee(prev => ({ ...prev, [name]: value }))
    }

    const handleUpdate = () => {
        axios.post(`http://192.168.1.12/employee`, employee).then(resp => {
            console.log(resp)
        })
    }

    return (
        <div className="App">
            <div>
                <h1>Employee Management</h1>
            </div>
            <fieldset>
                <legend>Update Employee</legend>
                <input
                    type="text"
                    name="emp_id"
                    placeholder="Employee ID"
                    onChange={handleModify}
                />
                <br />
                <input
                    type="text"
                    name="emp_name"
                    placeholder="Employee Name"
                    onChange={handleModify}
                />
                <br />
                <input
                    type="text"
                    name="phone"
                    placeholder="Employee Phone"
                    onChange={handleModify}
                />
                <br />
                <input
                    type="text"
                    name="salary"
                    placeholder="Employee Salary"
                    onChange={handleModify}
                />
                <br />
                <button onClick={handleUpdate}>Update</button>
            </fieldset>
            <fieldset>
                <legend>Search Employees by Name</legend>
                <input type="text" name="name" placeholder="Employee Name" />
                <br />
                <button>Search</button>
            </fieldset>
            <fieldset>
                <legend>Search Employees by Phone</legend>
                <input type="text" name="phone" placeholder="Phone" />
                <br />
                <button>Search</button>
            </fieldset>
            <fieldset>
                <legend>Search Employees by Salary Greater than</legend>
                <input type="text" name="salary" placeholder="Salary" />
                <br />
                <button>Search</button>
            </fieldset>
            <fieldset>
                <legend>Employee List</legend>
                <button onClick={handleGetAll}>Fetch Employees</button>
            </fieldset>
            <fieldset>
                <legend>Delete Employee</legend>
                <input
                    type="text"
                    name="id"
                    placeholder="Employee ID to Delete"
                />
                <br />
                <button>Delete</button>
            </fieldset>
        </div>
    )
}

export default App
