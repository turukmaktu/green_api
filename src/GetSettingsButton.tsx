import * as React from 'react';
import {Button, Box} from "@mui/material";

export function GetSettingsButton(props: {
    idInstance: string,
    apiTokenInstance: string,
    setData(data: string): void,
    setError(error: string): void,
}) {

    const handle = () => {
        try {
            fetch(`${process.env.REACT_APP_GREEN_API_HOST}/waInstance${props.idInstance}/getSettings/${props.apiTokenInstance}`)
                .then(async data => {
                    if (data.status === 200) {
                        props.setData(JSON.stringify(await data.json()))
                    } else {
                        props.setError(data.statusText)
                    }
                })
                .catch(e => {
                    props.setError(e?.toString() || '')
                })

        } catch (e) {
            props.setError(e?.toString() || '')
        }
    }

    return (
        <Box
            component="section"
            sx={{ p: 2}}
        >
            <Button
                color='primary'
                variant='outlined'
                fullWidth
                onClick={handle}
                data-testid='actions_get_settings_button'
            >
                getSettings
            </Button>
        </Box>
    );
}