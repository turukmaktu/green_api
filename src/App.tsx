import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import {Credentials} from "./Credentials";
import {useState} from "react";
import {Output} from "./Output";
import {GetSettingsButton} from "./GetSettingsButton";
import {GetStateInstanceButton} from "./GetStateInstanceButton";
import {SendMessage} from "./SendMessage";
import {SendFileByUrl} from "./SendFileByUrl";

function App() {

  const [outputError, setOutputError] = useState(false);
  const [outputData, setOutputData] = useState('');

  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');

  const handleError = (error: string) => {
    setOutputError(true);
    setOutputData(error);
    setTimeout(() => {
      setOutputError(false);
      setOutputData('')
    }, 2000);
  }

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Paper>
              <Grid container spacing={1}>
                <Grid size={12}>
                  <Credentials
                      idInstance={idInstance}
                      setIdInstance={setIdInstance}
                      apiTokenInstance={apiTokenInstance}
                      setTokenInstance={setApiTokenInstance}
                  ></Credentials>
                </Grid>
                <Grid size={12}>
                  <GetSettingsButton
                      idInstance={idInstance}
                      apiTokenInstance={apiTokenInstance}
                      setData={setOutputData}
                      setError={handleError}
                  />
                </Grid>
                <Grid size={12}>
                  <GetStateInstanceButton
                      idInstance={idInstance}
                      apiTokenInstance={apiTokenInstance}
                      setData={setOutputData}
                      setError={handleError}
                  />
                </Grid>
                <Grid size={12}>
                  <SendMessage
                      idInstance={idInstance}
                      apiTokenInstance={apiTokenInstance}
                      setData={setOutputData}
                      setError={handleError}
                  />
                </Grid>
                <Grid size={12}>
                  <SendFileByUrl
                      idInstance={idInstance}
                      apiTokenInstance={apiTokenInstance}
                      setData={setOutputData}
                      setError={handleError}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid size={6}>
            <Output error={outputError} text={outputData}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
