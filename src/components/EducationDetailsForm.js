import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { EducationData } from "./FormData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2%",
    marginTop: "50px",
    fontFamily: "Roboto, sans-serif",
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
    fontFamily: "Roboto, sans-serif",
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
  InputFields: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "orange",
    color: "white",
    "&:hover": {
      backgroundColor: "darkorange",
    },
  },
  errorMessage: {
    color: "red",
  },
}));

const durationOptions = [
  { value: 1, label: "1 year" },
  { value: 2, label: "2 years" },
  { value: 3, label: "3 years" },
  { value: 4, label: "4 years" },
  { value: 5, label: "5 years" },
  // Add more options as needed
];

const validationSchema = Yup.object({
  instituteName: Yup.string().required("Institute Name is required"),
  duration: Yup.number().required("Duration is required"),
});

const EducationDetailsForm = ({ onFormSubmit }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        instituteName: "",
        duration: 1,
        currentlyPresent: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        EducationData.push(values);
        console.log("Submitted data:", EducationData);
        onFormSubmit();
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className={classes.root}>
          <Form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.InputFields}>
              <Field
                as={TextField}
                label="Institute Name"
                name="instituteName"
                className={classes.input}
                required
                InputProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
                InputLabelProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
              />
              {touched.instituteName && errors.instituteName && (
                <div className={classes.errorMessage}>
                  {errors.instituteName}
                </div>
              )}

              <Field
                as={TextField}
                select
                label="Duration"
                name="duration"
                className={classes.input}
                required
                InputProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
                InputLabelProps={{
                  style: { color: "orange", fontFamily: "Raleway, sans-serif" },
                }}
              >
                {durationOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    style={{
                      color: "orange",
                      fontFamily: "Raleway, sans-serif",
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
              {touched.duration && errors.duration && (
                <div className={classes.errorMessage}>{errors.duration}</div>
              )}
            </div>

            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={values.currentlyPresent}
                    onChange={handleChange}
                    name="currentlyPresent"
                    style={{ color: "orange" }}
                  />
                }
                label={
                  <Typography style={{ fontFamily: "Raleway, sans-serif" }}>
                    Currently Present
                  </Typography>
                }
              />
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

export default EducationDetailsForm;
