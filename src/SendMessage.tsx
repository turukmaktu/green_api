import * as React from 'react';
import {Button, Box, Grid2 as Grid, TextField} from "@mui/material";
import {useState} from 'react';

export function SendMessage(props: {
    idInstance: string,
    apiTokenInstance: string,
    setData(data: string): void,
    setError(error: string): void,
}) {

    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');
    const handle = () => {
        try {
            fetch(
                `${process.env.REACT_APP_GREEN_API_HOST}/waInstance${props.idInstance}/sendMessage/${props.apiTokenInstance}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        chatId,
                        message,
                    })
                }
            )
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
    };

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        data-testid="send_message_chat_id"
                        label="chatId"
                        variant="outlined"
                        value={chatId}
                        onChange={(event) => {
                            setChatId(event.target.value);
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField
                        multiline
                        maxRows={4}
                        fullWidth
                        data-testid="send_message_message"
                        label="Message"
                        variant="outlined"
                        value={message}
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <Button
                        data-testid='send_message_action'
                        color='primary'
                        variant='outlined'
                        fullWidth
                        onClick={handle}
                    >
                        sendMessage
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}