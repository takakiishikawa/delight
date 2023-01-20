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

    /*
    const [count,setCount]=useState('');
    const [countMemo,setCountMemo]=useState('');

    const [parse,setParse]=useState('');
    const [type,setType]=useState('word');
    const [eng,setEng]=useState('');
    const [jpn1,setJpn1]=useState('');
    const [jpn2,setJpn2]=useState('');
    const [jpn3,setJpn3]=useState('');
    const [navigation]=useState(2);
    const [tabValue, setTabValue] = useState("1");


    //textfield初期化
    const inputCountElm=useRef('');
    const inputEngElm=useRef('');
    const inputJpn1Elm=useRef('');
    const inputJpn2Elm=useRef('');
    const inputJpn3Elm=useRef('');

    //pastFixedCount
    const onChangePastFixed=(event)=>{
        setCount(event.target.value);
    }
    const onChangeCountMemo=(event)=>{
        setCountMemo(event.target.value);
    }

    const onClickPastFixed=()=>{
        const url="http://127.0.0.1:8000/add/pastFixed";
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                'count':count,
                'type':type,
                'countMemo':countMemo,
            }),
        }).then(response=>console.log(response)).then(error=>console.log(error));
        console.log(count);
        console.log(type);
        inputCountElm.current.value="";

    }

    //////new word
    //type
    const onChangeType = (event) => {
        setType(event.target.value);
    };

    //parse
    const onChangeParse = (event) => {
        setParse(event.target.value);
    };

    //eng
    const onChangeEng=(event)=>{
        setEng(event.target.value);
        console.log(inputEngElm.current.value);

    }

    const onChangeJpn1=(event)=>{
        setJpn1(event.target.value);
    }

    const onChangeJpn2=(event)=>{
        setJpn2(event.target.value);
    }

    const onChangeJpn3=(event)=>{
        setJpn3(event.target.value);
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


    //タブ切り替え
    const onChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };
    */


    return (
        <>
        <div id="navigation">
        <Box sx={{ width: 1000 }}>
            <BottomNavigation
                showLabels
                value={navigation}
            >
                <BottomNavigationAction label="Word" icon={<QuizIcon />} component={Link} to=".." />
                <BottomNavigationAction label="Idiom" icon={<QuizIcon />} component={Link} to="/idiom"   />
                <BottomNavigationAction label="Add" icon={<AddIcon />}  component={Link} to="/add" />
                <BottomNavigationAction label="List" icon={<ListAltIcon />}  component={Link} to="/list" />
            </BottomNavigation>
        </Box>
        </div>
        <br></br>

        <div id="tab">
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onChangeTab} aria-label="lab API tabs example" centered>
                    <Tab label="Add new word" value="1" />
                    <Tab label="Add fixed count" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Typography align="center">
                    <div id="addNewWord">
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="currentLabel">Type</InputLabel>
                            <Select
                            labelId="currentLabel"
                            id="label"
                            value={type}
                            label="Type"
                            onChange={onChangeType}
                            >
                            <MenuItem value={"word"}>word</MenuItem>
                            <MenuItem value={'idiom'}>idiom</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel id="currentLabel">Parse</InputLabel>
                            <Select
                            labelId="currentLabel"
                            id="label"
                            value={parse}
                            label="Parse"
                            onChange={onChangeParse}
                            >
                            <MenuItem value={"n"}>n</MenuItem>
                            <MenuItem value={'pron'}>pron</MenuItem>
                            <MenuItem value={'v'}>v</MenuItem>
                            <MenuItem value={'adj'}>adj</MenuItem>
                            <MenuItem value={'adv'}>adv</MenuItem>
                            <MenuItem value={'aux'}>aux</MenuItem>
                            <MenuItem value={'prep'}>prep</MenuItem>
                            <MenuItem value={'art'}>art</MenuItem>
                            <MenuItem value={'con'}>con</MenuItem>
                            <MenuItem value={'int'}>int</MenuItem>
                            <MenuItem value={'-'}>-</MenuItem>
                            </Select>
                        </FormControl><br></br>
                        {console.log(parse)}

                        <Box sx={{'& > :not(style)': { m: 1, width: '15ch' },}}>
                        <TextField id="countOutlined" label="Eng" variant="outlined" onChange={onChangeEng} inputRef={inputEngElm} />
                        <TextField id="countOutlined" label="Jpn1" variant="outlined" onChange={onChangeJpn1} inputRef={inputJpn1Elm} /><br></br>
                        <TextField id="countOutlined" label="Jpn2" variant="outlined" onChange={onChangeJpn2} inputRef={inputJpn2Elm} />
                        <TextField id="countOutlined" label="Jpn3" variant="outlined" onChange={onChangeJpn3} inputRef={inputJpn3Elm} />
                        </Box><br></br>

                        <Button type="button" onClick={onClickNewWord} variant="contained" endIcon={<SendIcon />}>Send</Button>
                    </div>
                    </Typography>
                </TabPanel>
                <TabPanel value="2">
                <Typography align="center">
                <div id="addPastFixed">
                    {/*部分未理解*/}
                    <Box sx={{'& > :not(style)': { m: 1, width: '33ch' },}}>
                    <TextField id="countOutlined"  label="WordCount" variant="outlined" onChange={onChangePastFixed} inputRef={inputCountElm} />
                    <br></br>
                    <TextField id="countOutlined" label="countMemo" variant="outlined" onChange={onChangeCountMemo} />
                    <br></br>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="currentLabel">Type</InputLabel>
                            <Select
                            labelId="currentLabel"
                            id="label"
                            value={type}
                            label="Type"
                            onChange={onChangeType}
                            >
                            <MenuItem value={"word"}>word</MenuItem>
                            <MenuItem value={'idiom'}>idiom</MenuItem>
                            </Select>
                        </FormControl>
                    </Box><br></br>
                    <Button type="button" onClick={onClickPastFixed} variant="contained" endIcon={<SendIcon />}>Send</Button>
                </div>
                </Typography>
                </TabPanel>
            </TabContext>
            </Box>
        </div>
        </>
    );
}





