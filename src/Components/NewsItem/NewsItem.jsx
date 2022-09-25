import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
const NewsItem = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description} ...
          </Typography>
          <Typography>{props.author}</Typography>
          <CardActions>
            <Link href={props.webUrl} target='_blank' underline="none">
              {"Read More"}
            </Link>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default NewsItem;
