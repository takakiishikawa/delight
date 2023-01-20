import {Link} from "react-router-dom";
import {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';



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

//Date
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";


export default function Add(){
    const [tabValue, setTabValue] = useState("1");
    const now=dayjs();
    const [meditation,setMeditation] = useState(now);

    const [sleep,setSleep]=useState(now);
    const [weightDate,setWeightDate]=useState(now);
    const [weight,setWeight]=useState('');

    const onChangeMeditation=(event)=>{
        setMeditation(event.$d);
        console.log(meditation);l
    }

    const onChangeSleep=(event)=>{
        setSleep(event);
    }

    const onChangeWeightDate=(event)=>{
        setWeightDate(event);
    }

    /*
    const onChangeWeight=(event)=>{
        setWeight(event.target.value);
    }
    */

    const onClickAdd=()=>{
        const url="http://127.0.0.1:8000/add";
        fetch(url,{
            method:'POST',
            body:JSON.stringify([meditation,sleep,weightDate,weight]),
        }).then(response=>console.log(response)).then(error=>console.log(error));
    }

    //タブ切り替え
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

        <Box sx={{ width: '50%', typography: 'body1' }}>



                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <Stack spacing={3}>


                        <DesktopDatePicker
                            label="Meditation-Date"
                            inputFormat="MM/DD/YYYY"
                            value={meditation}
                            onChange={onChangeMeditation}
                            renderInput={(params) => <TextField {...params} />}
                        />

                        <DateTimePicker
                            label="BedIn-Date"
                            value={sleep}
                            onChange={onChangeSleep}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <DesktopDatePicker
                            label="Weight-Date"
                            inputFormat="MM/DD/YYYY"
                            value={weightDate}
                            onChange={onChangeWeightDate}
                            renderInput={(params) => <TextField {...params} />}
                        />

                        </Stack>

                        </LocalizationProvider>
                        <br></br>
                        <Button type="button" onClick={onClickAdd} variant="contained" endIcon={<SendIcon />}>Send</Button>
            </Box>
        </>
    );
}

//                        <TextField id="weightOutlined" label="Weight-Kg" variant="outlined" onChange={onChangeSleep} />
