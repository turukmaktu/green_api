import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';

function App() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Paper>
              <Grid container spacing={1}>
                <Grid size={12}>
                  todo create credentials input
                </Grid>
                <Grid size={12}>
                  todo create get settings button
                </Grid>
                <Grid size={12}>
                  todo create get instance button
                </Grid>
                <Grid size={12}>
                  todo create send message component
                </Grid>
                <Grid size={12}>
                  todo create sed file by url component
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid size={6}>
            todo create output component
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
