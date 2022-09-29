import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Project.css";

function ProjectCard(props) {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        alt="green iguana"
        height="150"
        image={props.imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a style={{ textDecoration: "none" }} href={props.code}>
            See the Code
          </a>
        </Button>
        <Button size="small">
          <a style={{ textDecoration: "none" }} href={props.demo}>
            Live Demo
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
