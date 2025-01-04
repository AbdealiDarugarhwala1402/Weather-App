import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

    const INIT_URL = "https://media.istockphoto.com/id/1163921165/photo/dark-storm-clouds-in-the-sky-background.jpg?s=2048x2048&w=is&k=20&c=tjDo4fof3LsezPMlRrdKAFlEuIoKK60asX877BjU2O8=";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://www.shutterstock.com/image-photo/winter-forest-south-park-sofia-600nw-2483073899.jpg";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="weather_image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}&deg; C</p>
            <p>temp_min: {info.temp_min}</p>
            <p>temp_max: {info.temp_max}</p>
            <p>humidity: {info.humidity}</p>
            <p>wind_speed: {info.wind_speed}</p>
            <p>description: {info.description}</p>
          </Typography>
        </CardContent>
        </Card>
    );
}