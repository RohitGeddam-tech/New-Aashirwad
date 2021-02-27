import React,{useState} from 'react'
import useForm from './useForm';
import validate from './ValidateInfo';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { BsX } from 'react-icons/bs';

const Popup = () => {
    const [isModal, setModal] = useState(false);const [isSubmit, setSubmit] = useState(false)

    const afterClick = () => {
        if (!values.name, !values.email, !values.mobile, !values.select, !values.textField) {
            console.log('form errors', errors)
        } else if (values.name, values.email, values.mobile, values.select, values.textField) {
            setSubmit(true);
        }
    }

    const handleOpen = () => {
        setModal(true);
    };

    const handleClose = () => {
        setModal(false);
    };
    const [errors, setErrors] = useState({})

    const { handleChange, values } = useForm(validate);

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));

        if(!values.name, !values.email, !values.mobile, !values.select, !values.textField){
            alert('fill in the values')
        }else if(values.name, values.email, values.mobile, values.select, values.textField){
            setModal(false)
        }
    }

    return(
        <div> 
                    <button className='ui button btnrea' onClick={handleOpen}>Book Now</button>
                    <Modal className='modal' open={isModal} onClose={handleClose}>
                        <div className='popup'>
                            <BsX size='35px' style={{marginLeft:'310px', cursor:'pointer'}} onClick={handleClose}/>
                            <h2>Book an appointment</h2>
                            <p>by filling in your details </p>
                            <form onSubmit={handleSubmit}>
                        <TextField
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
                            <button type='submit' onClick={afterClick} className='ui button newbtn'>Submit</button>
                        </div>
                    </form>
                        <h3>OR</h3>
                        <h5 className='ptag'>Call Us at :<a href='tel:+919876509876' className='popupa'>+91 98765 09876</a></h5>
                        </div>
                    </Modal>
                    <Modal className='mobmodal' open={isSubmit}>
                        <div className='mobpopup'>
                            <h5 className='formsubmit'> Your Form is Submitted please click on Submitted to return </h5>
                            <button className='ui button newbtn' onClick={()=>{setSubmit(false)}}>Submitted</button>
                        </div>
                    </Modal>
        </div>
    )
}

export default Popup;