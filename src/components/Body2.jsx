/* eslint-disable no-unused-vars */
import React from "react";
import Card1 from "./Card1.jsx";
import Stack from "@mui/material/Stack";
import template from "../images/template-3.jpg";
import { Link } from "react-router-dom";

export default function Body2() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent={"space-around"}
        spacing={2}
        style={{ marginTop: "50px" }}
      >
        <Link to="/Greenplaza">
          <Card1
            name="Hilton Alexandria Green Plaza "
            title="Hilton Alexandria Green Plaza"
            src={template}
          />
        </Link>
        <Link to="/Chorniche">
          <Card1
            name="Hilton Alexandria Corniche "
            title="Hilton Alexandria Corniche"
            src={template}
          />
        </Link>
        <Link to="/King">
          <Card1
            name="Hilton Alexandria King's Ranch "
            title="Hilton Alexandria King's Ranch"
            src={template}
          />
        </Link>
      </Stack>

      <Stack
        direction="row"
        justifyContent={"space-around"}
        spacing={2}
        style={{ marginTop: "50px" }}
      >
        <Link to="/Conrad">
          <Card1 name="Conrad Cairo " title="Conrad Cairo" src={template} />
        </Link>
        <Link to="/Heliop">
          <Card1
            name="Hilton Cairo Heliopolis"
            title="Hilton Cairo Heliopolis"
            src={template}
          />
        </Link>
        <Link to="/Golf">
          <Card1
            name="Hilton Pyramids Golf"
            title="Hilton Pyramids Golf"
            src={template}
          />
        </Link>
      </Stack>
      <Stack
        direction="row"
        justifyContent={"space-around"}
        spacing={2}
        style={{ marginTop: "50px" }}
      >
        <Link to="/Woldorf">
          <Card1
            name="Waldorf Astoria Cairo "
            title="Waldorf Astoria Cairo"
            src={template}
          />
        </Link>
        <Link to="/Ramses">
          <Card1
            name="Cairo Ramses Hilton Hotel "
            title="Cairo Ramses Hilton Hotel"
            src={template}
          />
        </Link>
        <Link to="/Zamalek">
          <Card1
            name="Hilton Cairo Zamalek Residences "
            title="Hilton Cairo Zamalek Residences"
            src={template}
          />
        </Link>
      </Stack>
      <Stack
        direction="row"
        justifyContent={"space-around"}
        spacing={2}
        style={{ marginTop: "50px" }}
      >
        <Link to="/Hurghada">
          <Card1
            name="Hilton Hurghada Plaza "
            title="Hilton Hurghada Plaza"
            src={template}
          />
        </Link>
        <Link to="/Luxor">
          <Card1 name="Hilton Luxor " title="Hilton Luxor" src={template} />
        </Link>
        <Link to="/Marsa">
          <Card1
            name="Hilton Marsa Alam Nubian Resort "
            title="Hilton Marsa Alam Nubian Resort"
            src={template}
          />
        </Link>
      </Stack>
      <Stack
        direction="row"
        justifyContent={"space-around"}
        spacing={2}
        style={{ marginTop: "50px" }}
      >
        <Link to="/Doubletree">
          <Card1
            name="Doubletree DoubleTree by Hilton Sharm El Sheikh - Sharks Bay Resort "
            title="Doubletree DoubleTree by Hilton Sharm El Sheikh - Sharks Bay Resort"
            src={template}
          />
        </Link>
      </Stack>
    </>
  );
}
