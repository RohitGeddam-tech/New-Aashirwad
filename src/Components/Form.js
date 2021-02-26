import React, { useState } from 'react'
import logo from './Photos/logo.svg';
import useForm from './useForm';
import validate from './ValidateInfo';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';



const Form = () => {

    const [errors, setErrors] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const afterClick = () => {
        if (!values.name, !values.email, !values.mobile, !values.select, !values.textField) {
            alert('fill in the values')
        } else if (values.name, values.email, values.mobile, values.select, values.textField) {
            alert('Your Form is Submitted. Please click on the submitted button to go back to the home page');
            setSubmit(true);
        }
    }

    const { handleChange, values } = useForm(validate);

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        // if(!values.name, !values.email, !values.mobile, !values.select, !values.textField){
        //     alert('fill in the values')
        // }else if(values.name, values.email, values.mobile, values.select, values.textField){
        //     alert('form submitted');
        // }
    }


    return (
        <div className='form'>
            <div className='popup'>
                <h2>Book an appointment</h2>
                <p>by filling in your details </p>
                <form onSubmit={handleSubmit}>
                        <TextField
                            style={{marginTop:'10px !important'}}
                            className='textfield'
                            type='name'
                            name='name'
                            id='outlined-basic'
                            variant="outlined"
                            label={errors.name && <h4 className='errorp'>{errors.name}</h4> || 'Your Name*'}
                            value={values.name}
                            onChange={handleChange}
                        // required
                        />
                        <TextField
                            className='textfield'
                            type='email'
                            name='email'
                            id='outlined-basic'
                            variant="outlined"
                            label={errors.email && <h4 className='errorp'>{errors.email}</h4> || 'Your Email*'}
                            value={values.email}
                            onChange={handleChange}
                        // required
                        />
                        <TextField
                            className='textfield'
                            type='tel'
                            name='mobile'
                            id='outlined-basic'
                            variant="outlined"
                            label={errors.mobile && <h4 className='errorp'>{errors.mobile}</h4> || 'Your Mobile No.*'}
                            value={values.mobile}
                            onChange={handleChange}
                            pattern='[0-9]{10}'
                        // required
                        />
                        <FormControl variant="outlined">
                            {/* <InputLabel htmlFor="outlined-age-native-simple" style={{ marginTop: '17.5px' }}>Select</InputLabel> */}
                            <Select
                                native
                                className='select'
                                value={values.select}
                                onChange={handleChange}
                                inputProps={{
                                    name: 'select',
                                    id: 'outlined-age-native-simple',
                                }}
                            >
                                <option value=''>Test & Packages</option>   
                                <option value='black' style={{ color: 'black !important' }}>Black</option>
                                <option value='blue' style={{ color: 'black !important' }}>Blue</option>
                                <option value='red' style={{ color: 'black !important' }}>Red</option>
                            </Select>
                        </FormControl>
                        {errors.select && <h4 className='errorp'>{errors.select}</h4>}
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            value={values.textField}
                            name='textField'
                            className='date'
                            onChange={handleChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        {errors.textField && <h4 className='errorp'>{errors.textField}</h4>}
                        <div>
                            {isSubmit ? <Link to='/New-Aashirwad'><button className='ui button'>Submitted</button></Link>: 
                            <button type='submit' onClick={afterClick} className='ui button newbtn'>Submit</button>}
                        </div>
                    </form>
                <h3>OR</h3>
                <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
            </div>
        </div>
    )
}

export default Form
