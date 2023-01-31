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
          {Array.from(Array(values),(e,i)=>{
            return(
              <option key={i+1 } value={i+1}>{i+1}</option>
          )
          })}
          
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default function Cards({FoodName,Text,image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
        <Button size="large" color="secondary">
          Share
        </Button>
        <NativeSelectDemo label={"Quantiy"} values={6}/>
      </CardActions>

    </Card>
  );
}