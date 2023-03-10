import {Link} from "react-router-dom";
import {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';

//parse select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import QuizIcon from '@mui/icons-material/Quiz';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';

import Typography from '@mui/material/Typography';

//tab
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { countBy } from 'lodash';


export default function Add(){
    const [tabValue, setTabValue] = useState("1");
    const [meditation,setMeditation]=useState('');
    const [sleep,setSleep]=useState('');
    const [weightDate,setWeightDate]=useState('');
    const [weight,setWeight]=useState('');


    const onChangeMeditation=(event)=>{
        setMeditation(event.target.value);
    }

    const onChangeSleep=(event)=>{
        setSleep(event.target.value);
    }

    const onChangeWeightDate=(event)=>{
        setWeightDate(event.target.value);
    }

    const onChangeWeight=(event)=>{
        setWeight(event.target.value);
    }

    const onClickAdd=()=>{
        const url="http://127.0.0.1:8000/add";
        fetch(url,{
            method:'POST',
            body:JSON.stringify([meditation,sleep,weightDate,weight]),
        }).then(response=>console.log(response)).then(error=>console.log(error));
    }








    const onClickNewWord=()=>{
        const url="http://127.0.0.1:8000/add/newWord";
        fetch(url,{
            method:'POST',
            body:JSON.stringify([type,parse,eng,jpn1,jpn2,jpn3]),
        }).then(response=>console.log(response)).then(error=>console.log(error));
        inputEngElm.current.value="";
        inputJpn1Elm.current.value="";
        inputJpn2Elm.current.value="";
        inputJpn3Elm.current.value="";
        setEng('');
        setJpn1('');
        setJpn2('');
        setJpn3('');
    }


    //??????????????????
    const onChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };



    return (
        <>
        <div id="navigation">
        <Box sx={{ width: 1000 }}>
            <BottomNavigation
                showLabels
                value={navigation}
            >
                <BottomNavigationAction label="List" icon={<ListAltIcon />} component={Link} to=".." />
                <BottomNavigationAction label="Add" icon={<AddIcon />}  component={Link} to="/add" />
            </BottomNavigation>
        </Box>
        </div>
        <br></br>

        <div id="tab">
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onChangeTab} aria-label="lab API tabs example" centered>
                    <Tab label="Meditation" value="1" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography align="center">
                    <div id="addMeditation">
                        <Box sx={{'& > :not(style)': { m: 1, width: '15ch' },}}>
                        <TextField id="meditationOutlined" label="meditation-date" variant="outlined" onChange={onChangeMeditation} />
                        <TextField id="sleepOutlined" label="sleep-date" variant="outlined" onChange={onChangeSleep} />
                        <TextField id="weightOutlined" label="weight-date" variant="outlined" onChange={onChangeWeightDate} />
                        <TextField id="weightOutlined" label="weight" variant="outlined" onChange={onChangeWeight} />
                        </Box><br></br>
                        <Button type="button" onClick={onClickAdd} variant="contained" endIcon={<SendIcon />}>Send</Button>
                    </div>
                    </Typography>
                </TabPanel>
            </TabContext>
            </Box>
        </div>
        </>
    );
}





