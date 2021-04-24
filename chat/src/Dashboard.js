import dog from './1.jpg';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core';

import {CTX} from './Store';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex : {
      display: 'flex',
      alignItems: 'center'
    },
    chatWindow: {
      width: '70%',
      height: '300px',
      padding: '20px'
    },
    chatBox: {
      width: '85%'
    },
    button: {
      width: '15%'
    },
  }));

export default function Dashboard(){
    const classes = useStyles();

  // CTX store
  const [allChats] = React.useContext(CTX);
  const topics = Object.keys(allChats);

  // local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [ textValue, changeTextValue ] = React.useState('');
    
    return (
      <div>
        <Paper className={classes.root}>
        <Typography variant="h4" component="h4" >
          채팅APP
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
            <div className={classes.chatWindow}>
                {
                  allChats[activeTopic].map((chat, i)=>(
                    <div className={classes.flex} key={i}>
                      <Chip avatar={<Avatar alt="Natacha" src={dog} />} variant="outlined" label="비전"/> 
                       <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                      </div>
                  ))
                }
            </div>
        </div>
        <div className={classes.flex}>
        <TextField 
        id="standard-basic" 
        label="채팅 입력창" 
        className={classes.chatBox}
        value={textValue}
        onChange={e => changeTextValue(e.target.value)}
        />
        <Button variant="contained" color="primary">
        전송
        </Button>
        </div>
      </Paper>
      </div>
    );
}