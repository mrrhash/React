import {TextField , Button,Grid, Typography} from '@mui/material';
import React from 'react';
import {useFormik} from 'formik'
import { signUpSchema } from '../schemas';

const initialValues = {
  name: '',
  email: '',
  pass : '',
  conf_pass : ''
}

const Index = () => {

 const {values,handleBlur,handleChange,touched, handleSubmit,errors} = useFormik({
   initialValues : initialValues,
   validationSchema : signUpSchema,
   onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
   }
 })

  return (
   <form onSubmit={handleSubmit} autoComplete='off'>
    <Grid container sx={{backgroundColor:"white",boxShadow:20}}>
      <Grid item xs={12} md={6} p={2}>
        <Typography align='center' variant='h3' mb={2}>
          Sign Up
        </Typography>

        <TextField
          error={errors.name  && touched.name}
          helperText={errors.name  && touched.name ? errors.name : null}
          autoComplete='off'
          name='name'
          sx={{marginBottom:2}} fullWidth
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"/>
          
        <TextField
          error={errors.email && touched.email }
          helperText={errors.email  && touched.email ? errors.email : null}
          autoComplete='off'
          name='email'
          sx={{marginBottom:2}} fullWidth
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"/>

        <TextField
          error={errors.pass  && touched.pass}
          helperText={errors.pass  && touched.pass ? errors.pass : null}
          autoComplete='off'
          name='pass'
          type='password'
          sx={{marginBottom:2}} fullWidth
          label="Password"
          value={values.pass}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"/>

        <TextField
          error={errors.conf_pass  && touched.conf_pass }
          helperText={errors.conf_pass  && touched.conf_pass ? errors.conf_pass : null}
          autoComplete='off'
          name='conf_pass'
          type='password'
          sx={{marginBottom:2}} fullWidth
          label="Confirm Password"
          value={values.conf_pass}
          onChange={handleChange}
          onBlur={handleBlur}
          variant="outlined"/>

        <Button fullWidth type='submit' variant="contained" size="large">Submit</Button>
      </Grid>
      <Grid item xs={12} md={6}>
      <img style={{height:"100%",width:"100%"}} src="/img.jpg" alt=""  />
      </Grid>
    </Grid>
  </form>
  )
}

export default Index;
