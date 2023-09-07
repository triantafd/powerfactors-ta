import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';

interface ILoginModal {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const initialValues: ILoginFormValues = {
  username: '',
  password: '',
  remember: false,
};

const LoginForm: React.FC<ILoginModal> = ({ isModalOpen, setIsModalOpen }) => {


  const handleSubmit = () => {
    setIsModalOpen(false)
  };

  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="username"
                label="Username"
                variant="outlined"
                margin="normal"
              />
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="remember"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <DialogActions>
                <Button onClick={() => setIsModalOpen(false)} color="primary">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}

export default LoginForm;