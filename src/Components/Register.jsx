import React, { useState } from 'react'
import Header from './Header'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import bg from '../assets/BG.png'
import { Button, Form } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { registerAPI } from '../services/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dropdown } from 'primereact/dropdown';









function Register() {
  const cities = [
    { name: 'Biology'},
    { name: 'Chemistry'},
    { name: 'Physics'},
    { name: 'Maths'},
    { name: 'English'}
  ];

  const [studentData, setStudentData] = useState({ firstname: "", lastname: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "" })

  const handleRegister = async (e) => {
    e.preventDefault()
    console.log(studentData);
    const { firstname, lastname, address, email, gender, mobile, password, dob, course } = studentData
    if (!firstname || !lastname || !address || !email || !gender || !mobile || !password || !dob || !course) {
      toast.info('Please fill the form completly!!')
    } else {
      // toast.succes('Proceed to call api ')
      try {
        const result = await registerAPI(studentData)
        console.log(result);
        if (result.status === 200) {
          setStudentData({ firstname: "", lastname: "", address: "", email: "", gender: "", mobile: "", password: "", dob: "", course: "" })
          setTimeout(() => {
            navigate('/login')
          }, 3000);
        }
        else {
         console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Header />
      <div style={{ margin: '7%', marginLeft: '7%', marginTop: '3%' }}>

        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} >
              <Item><div style={{ height: '70vh' }}>
                <img src={bg} alt="" style={{ width: '30% ', marginLeft: '-70%', marginTop: '-5%' }} /> <br />
                <div style={{ marginLeft: '-70%', marginTop: '-4%' }}> <h2>Welcome</h2><br />
                  <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. Omnis velit veniam</p>
                </div>


                <div width="60%" style={{ height: '350px', width: '500px', marginLeft: '30%', marginTop: '-25%', borderRadius: '10px' }}>

                  <Form action="POST" className='w-100' >

                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}> First Name</p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your First Name"
                       onChange={e=>setStudentData({...studentData,firstname:e.target.value})} value={studentData.firstname}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>


                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}> Last Name</p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your Last Name"
                       onChange={e=>setStudentData({...studentData,lastname:e.target.value})} value={studentData.lastname}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>

                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}> Address</p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your Address"
                       onChange={e=>setStudentData({...studentData,address:e.target.value})} value={studentData.address}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>


                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}> Email</p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your  Email"
                       onChange={e=>setStudentData({...studentData,email:e.target.value})} value={studentData.email}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>
                  
                    <div style={{ width: '50%' }}>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          <p style={{ marginLeft: '-130%', fontSize: '17px' }}> Gender </p>  </FormLabel>
                        <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"  
                         onChange={e=>setStudentData({...studentData,gender:e.target.value})} value={studentData.gender} >
                          <div style={{ marginLeft: '-30%', fontSize: '17px' }} >
                            <FormControlLabel value="female" 
                              control={<Radio />} label="Female" />
                            <FormControlLabel value="male" 
                             control={<Radio />} label="Male" />
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </Form>
                </div>

                <div width="60%" style={{ height: '350px', width: '500px', marginLeft: '65%', marginTop: '-32.3%', borderRadius: '10px' }}>

                  <Form action="POST" className='w-100' >


                  <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}> Mobile </p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your  Mobile number"
                       onChange={e=>setStudentData({...studentData,mobile:e.target.value})} value={studentData.mobile}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>

                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-86%', fontSize: '15px' }}>Password</p>
                      <Form.Control /*id="email"*/ type="text" placeholder="Enter Your  Password"
                       onChange={e=>setStudentData({...studentData,password:e.target.value})} value={studentData.password}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>

                    <Form.Group id="forInpCol" className="mb-3" >
                      <p style={{ marginLeft: '-89%', fontSize: '15px' }}>Date of Birth</p>
                      <Form.Control /*id="password"*/ type="date" placeholder="Date of Birth"
                        onChange={e=>setStudentData({...studentData,dob:e.target.value})} value={studentData.dob}
                        style={{ marginTop: '-2%', width: '50%' }} />
                    </Form.Group>


                    <div className="card flex justify-content-center" style={{ marginTp: '4%', width: '50%' ,height:'10%'}} >
                      <Dropdown   value={studentData.course}  onChange={(e) =>setStudentData({...studentData,course:e.target.value})}  options={cities} optionLabel="name"
                        editable placeholder="Select a Course" className="w-full md:w-14rem" 
                        />
                    </div>
                    <div style={{ marginLeft: '-88%'  ,marginTop:'5%'}}>
                      <Button onClick={handleRegister} variant="primary">Submit</Button>{' '}
                    </div>
                  </Form>
                </div>
              </div></Item>
            </Grid>
          </Grid>
        </Box>
        <ToastContainer autoClose={2000} theme="colored" position="top-center" />
      </div>
    </>
  )
}

export default Register
