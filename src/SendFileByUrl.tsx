import * as React from 'react';
import {Button, Box, Grid2 as Grid, TextField} from "@mui/material";
import {useState} from 'react';

export function SendFileByUrl(props: {
    idInstance: string,
    apiTokenInstance: string,
    setData(data: string): void,
    setError(error: string): void,
}) {

    const [chatId, setChatId] = useState('');
    const [urlFile, setUrlFile] = useState('');
    const [fileName, setFileName] = useState('');
    const handle = () => {
        try {
            fetch(
                `${process.env.REACT_APP_GREEN_API_HOST}/waInstance${props.idInstance}/sendFileByUrl/${props.apiTokenInstance}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        chatId,
                        urlFile,
                        fileName
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
        <Box
            component="section"
            sx={{ p: 2}}
        >
            <Grid container spacing={2}>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        id="send_file_by_url_chat_id"
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
                        fullWidth
                        id="send_file_by_url_url"
                        label="fileUrl"
                        variant="outlined"
                        value={urlFile}
                        onChange={(event) => {
                            setUrlFile(event.target.value);
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <TextField
                        multiline
                        maxRows={4}
                        fullWidth
                        id="send_file_by_url_file_name"
                        label="fileName"
                        variant="outlined"
                        value={fileName}
                        onChange={(event) => {
                            setFileName(event.target.value);
                        }}
                    />
                </Grid>
                <Grid size={12}>
                    <Button
                        color='primary'
                        variant='outlined'
                        fullWidth
                        onClick={handle}
                    >
                        sendFileByUrl
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}