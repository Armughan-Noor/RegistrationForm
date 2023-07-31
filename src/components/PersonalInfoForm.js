import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { PersonalData } from "./FormData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  InputFields: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  form: {
    width: "400px",
    padding: theme.spacing(2),
    boxShadow: "0px 2px 4px orange",
    backgroundColor: "black",
    color: "orange",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    border: "2px solid white",
    borderRadius: "20px",
  },
  input: {
    marginBottom: theme.spacing(2),
    "& label.Mui-focused": {
      color: "orange",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "orange",
      },
      "&:hover fieldset": {
        borderColor: "orange",
      },
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
  },
  RadioButtons: {
    display: "block",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "orange",
    color: "white",
    "&:hover": {
      backgroundColor: "darkorange", // Custom hover color
    },
  },
  errorMessage: {
    color: 'red',
  },
}));

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d*$/, "Invalid phone number"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  gender: Yup.string().required("Gender is required"),
});

const PersonalInfoForm = ({ onFormSubmit }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "", gender: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        
        PersonalData.push(values);
        console.log("Submitted data:", PersonalData);
        // Call the onFormSubmit function to move to the next step
        onFormSubmit();
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className={classes.root}>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.InputFields}>
              <Field
                as={TextField}
                label="Name"
                name="name"
                className={classes.input}
                required
                InputProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
                InputLabelProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
              />
              {touched.name && errors.name && (
                <div className={classes.errorMessage}>{errors.name}</div>
              )}

              <Field
                as={TextField}
                label="Phone"
                name="phone"
                className={classes.input}
                required
                InputProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
                InputLabelProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
              />
              {touched.phone && errors.phone && (
                <div className={classes.errorMessage}>{errors.phone}</div>
              )}

              <Field
                as={TextField}
                label="Email"
                name="email"
                className={classes.input}
                required
                InputProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
                InputLabelProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
              />
              {touched.email && errors.email && (
                <div className={classes.errorMessage}>{errors.email}</div>
              )}
            </div>

            <div>
              <FormLabel
                component="legend"
                className={classes.input}
                style={{ color: "orange", fontFamily: "Raleway, sans-serif" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                className={classes.RadioButtons}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio style={{ color: "orange" }} />}
                  label={
                    <Typography style={{ fontFamily: "Raleway, sans-serif" }}>
                      Male
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="female"
                  control={<Radio style={{ color: "orange" }} />}
                  label={
                    <Typography style={{ fontFamily: "Raleway, sans-serif" }}>
                      Female
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="other"
                  control={<Radio style={{ color: "orange" }} />}
                  label={
                    <Typography style={{ fontFamily: "Raleway, sans-serif" }}>
                      Other
                    </Typography>
                  }
                />
              </RadioGroup>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  fontFamily: "Roboto Slab, serif",
                }}
                className={classes.submitButton}
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
