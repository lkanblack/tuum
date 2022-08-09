import "./styles/App.scss";
import React, { Suspense } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import industry from "./constants/industry";
import geography from "./constants/geography";
const Field = React.lazy(() => import("./components/Field"));
const FlagField = React.lazy(() => import("./components/FlagField"));
const SelectField = React.lazy(() => import("./components/SelectField"));
const Textarea = React.lazy(() => import("./components/Textarea/Textarea"));
const ContactRow = React.lazy(() =>
  import("./components/ContactRow/ContactRow")
);
const CheckboxRow = React.lazy(() =>
  import("./components/Checkbox/CheckboxRow")
);
const PrivacyCheckBox = React.lazy(() =>
  import("./components/Checkbox/PrivacyCheckBox")
);
const Btn = React.lazy(() => import("./components/Btn/Btn"));

function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Suspense fallback={<CircularProgress />}>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}></Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h4">Contact us</Typography>
              </Grid>
              <Grid item sm={12} md={4}>
                <div>
                  <ContactRow
                    email="press@tuumplatform.com"
                    text="Media enquiries:"
                  />
                  <ContactRow
                    email="careers@tuumplatform.com"
                    text="Career questions:"
                  />
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <Grid container spacing={3}>
                    <Field
                      label="First Name"
                      placeholder="First Name"
                      required
                    />
                    <Field label="Last Name" placeholder="Last Name" />
                    <Field label="Email" placeholder="Email" required />
                    <Field label="Job title" placeholder="Job title" />
                    <Field
                      label="Company name"
                      placeholder="Company name"
                      required
                    />
                    <SelectField value={industry} label="Industry" required />
                    <FlagField />
                    <SelectField value={geography} label="Oprating geography" />
                    <Textarea
                      name="about"
                      label="What would you like to talk about?"
                    />
                  </Grid>
                  <PrivacyCheckBox
                    text="By submitting this form I accept"
                    anch="privacy policy and cookie policy"
                    link="https://tuumplatform.com/privacy-policy/"
                    name="termsAccepted"
                  />
                  <CheckboxRow
                    name="newsletter"
                    content="I would like to receive your newsletter."
                  />
                  <Btn />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Suspense>
      </Box>
    </div>
  );
}

export default App;
