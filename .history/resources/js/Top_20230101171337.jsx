import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';

//navigation
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';

//list
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

//tab
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function Top(){
    //const [totalList,setTotalList]=useState({fixedList:[],unfixedList:[]});
    const [tabValue, setTabValue] = useState("1");
    const [navigation]=useState(0);

    /*
    useEffect(()=>{
        const url="http://127.0.0.1:8000/fixList";
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setTotalList(data);
            });
    },[]);
    */


    /*
                                    <TableBody>
                                {totalList.fixedList.map((item,i) => (
                                    <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row" align="center">{item.id}</TableCell>
                                    <TableCell align="center">{item.type}</TableCell>
                                    <TableCell align="center">{item.parse}</TableCell>
                                    <TableCell align="center">{item.eng}</TableCell>
                                    <TableCell align="center">{item.jpn1}</TableCell>
                                    <TableCell align="center">{item.jpn2}</TableCell>
                                    <TableCell align="center">{item.jpn3}</TableCell>
                                    <TableCell align="center">{item.created_at}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>

                                */
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
                <BottomNavigationAction label="Word" icon={<ListIcon />} component={Link} to=".." />
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
                    <Tab label="meditation" value="1" />
                    <Tab label="sleep" value="2" />
                    <Tab label="weight" value="3" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                    key={1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="center">Date</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value="2">
                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                    key={1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="center">Date</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value="3">
                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow
                                    key={1}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="center">Date</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                </TabPanel>

            </TabContext>
            </Box>
        </div>
        <br></br>

        </>
    );
}


