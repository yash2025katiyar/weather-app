import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./SearchBox.css"
export default function InfoBox({info}) {
  let HOT_URL="https://images.unsplash.com/photo-1464660439080-b79116909ce7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
  let COLD_URL="https://images.unsplash.com/photo-1614734292826-78010d348dfc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL="https://images.unsplash.com/photo-1526720259772-150e99ad1e58?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let IMG_URL = info.humidity>80? RAIN_URL :info.temp>15 ? HOT_URL : COLD_URL;
  let SIGN_URL =info.humidity>80? <ThunderstormIcon/> :info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>;
    
    return (
        <div className="InfoBox">
            <div className="cards">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {info.city}&nbsp;{SIGN_URL}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temperature :{info.temp}&deg;C</p>
            <p>Humidity :{info.humidity}</p>
            <p>MinTemperature :{info.tempMin}&deg;C</p>
            <p>MaxTemperature :{info.tempMax}&deg;C</p>
            <p>Weather can be described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike }&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}