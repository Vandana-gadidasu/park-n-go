import { Accordion, AccordionDetails, AccordionSummary, Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { getParkingLotData } from '../../api/bff/getParkingLotData';

const homePage = () => {
const [city, setCity] = useState("");
const [place, setPlace] = useState("");

const [hour, setHour] = useState<string | undefined>("hour");
const [minutes, setMinutes] = useState<string | undefined>("minutes");

const [timeFormat, setTimeFormat] = useState<string | undefined>("am/pm");

const getMinutes = () => new Array(60).fill(undefined).map((_, index) => (<MenuItem value={index + 1}>{index + 1}</MenuItem>
   ));



const getHour = () => new Array(12).fill(undefined).map((_, index) => 
        (<MenuItem value={index + 1}>{index + 1}</MenuItem>)
         );

         const search = () => {
            getParkingLotData(city, place, `${hour}:${minutes} ${timeFormat}`)
                .then((res) => {
                    console.log(res);
                    
                })
         }
         
 

  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }}>
        <Box sx={{
            display: "flex",
            marginTop: "2rem"
        }}>
            <TextField sx={{width: "35rem", borderRadius: "4px 0 0 4px"}} id="outlined-basic" label="City" variant="outlined" placeholder="City" onChange={(e) => setCity(e.target.value)}/>            
            <Button disabled={city === ""} sx={{width: "10rem", borderRadius: "0 4px 4px 0"}} variant="contained" onClick={() => search()}>
                <SearchIcon />
            </Button>
        </Box>
        <Box sx={{marginTop:"1rem", display: "flex", justifyContent: "flex-start"}}>
        <Accordion sx={{minWidth: "45rem"}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Advance search</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <TextField sx={{width: "35rem", borderRadius: "4px 0 0 4px"}} id="outlined-basic" label="Place" variant="outlined" placeholder="place" onChange={(e) => setPlace(e.target.value)}/>
<Box sx={{marginTop: "1rem", display: "flex"}}>
<Box>
<InputLabel id="hour">Hour</InputLabel>

        <Select
        labelId="hour"
        sx={{
            marginRight: "1rem",
            width: "5rem"
        }}
            value={hour}
            label="hour"
            onChange={(e) => setHour(e.target.value)}
        >
            {getHour()}
        </Select>
        </Box>
        <Box>
<InputLabel id="min">Minutes</InputLabel>

        <Select
        labelId="min"
        sx={{
            marginRight: "1rem",
            width: "5rem"
        }}
            value={minutes}
            label="Minutes"
            onChange={(e) => setMinutes(e.target.value)}
        >
            {getMinutes()}
        </Select>
        </Box>
        <Box>
<InputLabel id="format">Format</InputLabel>

        <Select
        labelId="format"
        sx={{
            width: "5rem"
        }}
            value={timeFormat}
            label="AM/PM"
            onChange={(e) => setTimeFormat(e.target.value)}
        >
            <MenuItem value={"AM"}>AM</MenuItem>
            <MenuItem value={"PM"}>PM</MenuItem>
        </Select>
        </Box>
        </Box>
        </AccordionDetails>
      </Accordion>
        </Box>
    </Box>
  )
}

export default homePage