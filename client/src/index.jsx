import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Allmale from "../src/components/Allmale.jsx";
import Allfemale from "../src/components/Allfemale.jsx";
import Onem from "./components/Onem.jsx";
import Onef from "./components/Onef.jsx";
import Createm from "./components/Createm.jsx";
import Createf from "./components/Createf.jsx";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const App = () => {
  const [view, setView] = useState("App");
  const [ref, setRef] = useState(false);
  const [dataM, setDataM] = useState([]);
  const [dataF, setdataF] = useState([]);
  const [one, setOne] = useState({});

  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/male/getAll")
      .then((dataM) => {
        console.log(dataM.data), setDataM(dataM.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/api/female/getAll")
      .then((dataF) => {
        console.log(dataF.data), setdataF(dataF.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);



  const changeView = (newView, one) => {
    setView(newView);
    setOne(one);
  };

  const handleSearch = (event)=> {
    if(!event.target.value) {setRef(!ref)}
 if (view==="Allfemale") {
  setdataF(dataF.filter((el)=>el.name.includes(event.target.value)))
 }
 else
  setDataM(dataM.filter((el)=>el.name.includes(event.target.value)))
 
  }

  const renderView = () => {
    if (view === "Allmale") {
      return <Allmale dataM={dataM} changeView={changeView} />;
    } else if (view === "Allfemale") {
      return <Allfemale dataF={dataF} changeView={changeView} />;
    } else if (view === "Onem") {
      return <Onem ele={one} changeView={changeView} setRef={setRef} />;
    } else if (view === "Onef") {
      return <Onef ele={one} changeView={changeView} setRef={setRef} />;
    } else if (view === "Createm") {
      return <Createm changeView={changeView} setRef={setRef} />;
    } else if (view === "Createf") {
      return <Createf changeView={changeView} setRef={setRef} />;
    }
  };

  
  return (
    <div> {showNavBar &&  (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <Toolbar
         
          >
  
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 ,position:"absolute", left: 1}}
              onClick={()=> {view==="Allmale" || view==="Allfemale" ?(changeView('App'),setShowNavBar(false)): view==="Createm" ||  view==="Onem" ? changeView('Allmale'):changeView('Allfemale')}}


            > {"< "}Back |
            </IconButton>
            <IconButton
              size="large"
             
              color="inherit"
              aria-label="open drawer"
              onClick={()=> {view==="Createm" || view==="Allmale" ||  view==="Onem" ?changeView('Allmale'):changeView('Allfemale')}}

              sx={{ mr: 2  ,position:"absolute", right: "600px" }}
            >All products
            </IconButton>
     
            <IconButton
              size="large"
             
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2  ,position:"absolute", right: "400px" }}
              onClick={()=> {view==="Allmale" || view==="Createm" ||  view==="Onem"?changeView('Createm'):changeView('Createf')}}
            >Create
            </IconButton>
           
            <Search
            
             edge="start"
              sx={{ mr: 2  ,position:"absolute", right:1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
            
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearch}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    )}  
    
    <div>
    {!showNavBar && (
      <div>
        <div className="title">Welcome to Parfum X</div>
        <div className="category-page">
          <div className="male-div">
            <button
              className="male"
              onClick={() => {
                changeView("Allmale");
                setShowNavBar(true)
              }}
            >
              male
            </button>
          </div>
          <div className="female-div">
            <button
              className="female"
              onClick={() => {
                changeView("Allfemale");
                setShowNavBar(true);
               
              }}
            >
              female
            </button>
          </div>
        </div>
      </div>
    )}
  
  </div>
  {renderView()}
  </div>
  
  
  
   
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
