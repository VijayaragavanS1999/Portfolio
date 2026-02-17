import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Project.css";

function ProjectCard(props) {
  console.log(props)
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
        <Typography
          style={{ fontSize: "1rem", marginTop: "1rem" }}
          variant="h6"
          color="text.primary"
        >
          Technologies Used;
        </Typography>
        <Typography
          style={{ marginLeft: "1rem" }}
          variant="body2"
          color="text.secondary"
        >
          {props.tech}
        </Typography>
      </CardContent>
      <CardActions>
  {props.code ? (
    <Button size="small">
      <a
        style={{ textDecoration: "none" }}
        href={props.code}
        target="_blank"
        rel="noopener noreferrer"
      >
        See the Code
      </a>
    </Button>
  ) : (
    <Button size="small" disabled>
      Private
    </Button>
  )}

  <Button size="small">
    <a
      style={{ textDecoration: "none" }}
      href={props.demo}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  </Button>
</CardActions>

    </Card>
  );
}

export default ProjectCard;
