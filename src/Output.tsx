
import * as React from 'react';
import {Box, TextField} from "@mui/material";

export function Output(props: { error: boolean; text: string; }) {

    return(
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '100%', height: '100%'},
                '&.MuiBox-root': {height: '100%'},
                '& .MuiInputBase-root, & .MuiInputBase-input': {height: '100%!important'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                error={props.error}
                data-testid='green_api_output'
                label="Ответ:"
                multiline
                maxRows={4}
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
                value={props.text}
            />
        </Box>
    );
}