import React from 'react'
import { Button } from "@mui/material";
import { useEffect } from "react";
import "./Result.css";
import { useNavigate } from 'react-router-dom';

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/result");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Name: {name}</span>
      <span className="title">Your Score is: {score} out of 10</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;