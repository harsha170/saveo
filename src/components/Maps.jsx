import React,{useEffect} from 'react'
import { Map, GoogleApiWrapper } from "google-maps-react";

const Maps = (props) => {
    useEffect(()=>{
        console.log(props)
    },[])
    return (
      
        <Map
          google={props.google}
          zoom={8}
          style={{width:'50%',height:'80%',left:'50%'}}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    
    )
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCooit3zslIZZ6SYNfFqmSwRo7cCC4l6-k",
})(Maps)