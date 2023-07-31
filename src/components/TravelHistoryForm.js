import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import { Formik, Field, FieldArray, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { TravelData } from "./FormData";
import DisplayFormData from "./DisplayFormData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
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
  addButton: {
    color: "orange",
    position: "relative",
    display: "content",
  },
  placeCityContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: "orange",
    color: "white",
  },
}));

const validationSchema = Yup.object({
  places: Yup.array()
    .of(Yup.string().required("Place Name is required"))
    .required("At least one Place Name is required"),
  cities: Yup.array()
    .of(Yup.string().required("City is required"))
    .required("At least one City is required"),
});

const TravelHistoryForm = ({ onFormSubmit }) => {
  // const [TravelFormData, setTravelFormData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const classes = useStyles();

  const handleFormSubmit = (values) => {
    onFormSubmit();
    TravelData.push(values);
    setSubmitted(true);
    console.log("Submitted data:", TravelData);
  };

  return (
    <div className={classes.root}>
      {submitted && <DisplayFormData />}

      {!submitted && (
        <Formik
          initialValues={{ places: [""], cities: [""] }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values }) => (
            <Form className={classes.form}>
              <FieldArray name="places">
                {({ push, remove }) => (
                  <>
                    {values.places.map((_, index) => (
                      <div key={index} className={classes.placeCityContainer}>
                        <Field
                          as={TextField}
                          label="Place Name"
                          name={`places.${index}`}
                          className={classes.input}
                          required
                          InputProps={{
                            style: {
                              color: "orange",
                              fontFamily: "Raleway, sans-serif",
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "orange",
                              fontFamily: "Raleway, sans-serif",
                            },
                          }}
                        />
                        <ErrorMessage
                          name={`places.${index}`}
                          component="div"
                          className={classes.errorMessage}
                        />
                        <Field
                          as={TextField}
                          label="City"
                          name={`cities.${index}`}
                          className={classes.input}
                          required
                          InputProps={{
                            style: {
                              color: "orange",
                              fontFamily: "Raleway, sans-serif",
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "orange",
                              fontFamily: "Raleway, sans-serif",
                            },
                          }}
                        />
                        <ErrorMessage
                          name={`cities.${index}`}
                          component="div"
                          className={classes.errorMessage}
                        />
                      </div>
                    ))}
                    <Button
                      type="button"
                      onClick={() => push("")}
                      className={classes.addButton}
                    >
                      <AddCircleIcon
                        style={{
                          backgroundColor: "orange",
                          color: "black",
                          borderRadius: "50%",
                        }}
                      />
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  fontFamily: "Roboto Slab, sans-serif",
                }}
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default TravelHistoryForm;
