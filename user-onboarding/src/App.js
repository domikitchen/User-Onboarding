import React, { useState, useEffect } from 'react';
import './App.css';
import * as Yup from 'yup';
import axios from 'axios';
import formSchema from './validation/formSchema'

import Form from './components/Form'
import Employees from './components/Employees'
import { initalFormvalues } from './components/initalFormValues'

const initalFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '' || 'Disagree',
}

const initalEmployees = [];
const initalDisabled = true;

function App() {
  const [employee, setEmployee] = useState(initalEmployees);
  const [formValues, setFormValuse] = useState(initalFormvalues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalDisabled);
  const [currentTeam, setCurrentTeam] = useState([]);

  const getEmployees = () => {
    axios.get(`https://reqres.in/api/users`)
    
  }

  useEffect(() => {
    axios.get(`https://reqres.in/api/users`)
      .then(response => {
        console.log(response.data.data);
        setCurrentTeam(response.data.data);
      })
      .catch(heck => {
        console.log(heck);
      });
  }, [])

  const postNewEmployee = newEmployee => {
    axios.post(`https://reqres.in/api/users`, newEmployee)
      .then(response => {
        console.log(response.data);
        setEmployee([...employee, response.data]);
      })
      .catch(error => {
        console.log(`FIX THIS NERD: ${error}`)
      })
      .finally(() => {
        setFormValuse(initalFormvalues);
      });
  }

  const onInputChange = evt => {
    const { name, value } = evt.target;

    Yup 
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

    setFormValuse({
      ...formValues,
      [name]: value
    })

  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target;

    setFormValuse({
      ...formValues,
      exp: {
        ...formValues.exp,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault();

    const newEmployee = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      exp: Object.keys(formValues.exp)
        .filter(language => (formValues.exp[language] === true))
    }
    postNewEmployee(newEmployee);
  }
  useEffect(() => {
    getEmployees();
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])
  
  return (
    <div className="App">
      <h1>Meet the team!</h1>
      <div className = "team">
      {
        currentTeam.map(team => {
          return (
            <div key = {team.id}>
              <img src = {`${team.avatar}`}/>
              <p>{team[`first_name`]} {team[`last_name`]}</p>
              <p>{team.email}</p>
            </div>
          );
        })
      }
      </div>
      <h2>Join our team!</h2>
      <Form 
        values = {formValues}
        onInputChange = {onInputChange}
        onCheckboxChange = {onCheckboxChange}
        onSubmit = {onSubmit}
        disabled = {disabled}
      />
      <h2>Applicants</h2>
      <div className = 'applicants'>
      {
        employee.map(employ => {
          return(
            <Employees key = {employ.id} details = {employ} />
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
