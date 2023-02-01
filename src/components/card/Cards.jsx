import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Card.css';
const NativeSelectDemo=({label,values})=>{
  console.log(values)
  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {label}
        </InputLabel>
        
        <NativeSelect
          inputProps={{
            name: 'quantity',
            id: 'uncontrolled-native',
          }}
        >
          {values.map(value=>{
            return(
              <option value={value}>{value}</option>
          )
          })}
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default function Cards({FoodName,Text,image}) {
  return (
    <Card sx={{ maxWidth: 345 }} class="card">
      <CardActionArea class="card-action">
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FoodName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {Text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <NativeSelectDemo label={"Quantiy"} values={[1,2,3,4,5,6]}/>
        <NativeSelectDemo label={"Size"} values={["half","full"]}/>
        <Button size="medium" color="secondary">
          Order Now
        </Button>     
      </CardActions>

    </Card>
  );
}