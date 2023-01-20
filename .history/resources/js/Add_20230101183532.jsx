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
    const [meditation,setMeditation] = useState(dayjs('today'));

    const [sleep,setSleep]=useState('');
    const [weightDate,setWeightDate]=useState('');
    const [weight,setWeight]=useState('');

    /*
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs("2014-08-18T21:11:54")
    );
    */

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

        <div id="tab">
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onChangeTab} aria-label="lab API tabs example" centered>
                    <Tab label="Add" value="1" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography align="center">
                    <div id="addMeditation">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>

                        <Box sx={{'& > :not(style)': { m: 1, width: '15ch' },}}>
                        <TextField id="sleepOutlined" label="sleep-date" variant="outlined" onChange={onChangeSleep} />
                        <TextField id="weightOutlined" label="weight-date" variant="outlined" onChange={onChangeWeightDate} />
                        <TextField id="weightOutlined" label="weight" variant="outlined" onChange={onChangeWeight} />
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={meditation}
                            onChange={onChangeMeditation}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </Box><br></br>
                        <Button type="button" onClick={onClickAdd} variant="contained" endIcon={<SendIcon />}>Send</Button>
                        </Stack>
                    </LocalizationProvider>
                    </div>
                    </Typography>
                </TabPanel>
            </TabContext>
            </Box>
        </div>
        </>
    );
}




