import * as React from 'react';
import {Box, Grid2 as Grid, TextField} from "@mui/material";

export function Credentials(props: {
    idInstance: string,
    setIdInstance(value: string): void;
    apiTokenInstance: string,
    setTokenInstance(value: string): void;
}) {

    return (
        <Box
            component="section"
            sx={{ p: 2}}
        >
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        inputProps={{ 'data-testid': 'id_instance' }}
                        label="idInstance"
                        variant="outlined"
                        value={props.idInstance}
                        onChange={(event) => {
                            props.setIdInstance(event.target.value);
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        inputProps={{ 'data-testid': 'api_token_instance' }}
                        label="apiTokenInstance"
                        variant="outlined"
                        value={props.apiTokenInstance}
                        onChange={(event) => {
                            props.setTokenInstance(event.target.value)
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}