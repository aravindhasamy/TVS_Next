import {CONSTANTS} from "../utils/Constants";
import axios from "axios";
const {REACT_APP_POLITICS_SECTION_ID, REACT_APP_CULTURE_SECTION_ID} = process.env


export const getPolitics = () => {
    console.log("get function running")
    console.log("SERVER", CONSTANTS.SERVER.BASEURL)
 
 return new Promise(function (success, failed) {
   try {
    axios
    .get(`${CONSTANTS.SERVER.BASEURL}/api/v1/stories?section-id=${REACT_APP_POLITICS_SECTION_ID}`)
    .then((response) => {
      console.log("response from http base client politics", response.data);
      success(response);
    //   setApiData(response.data.stories);
    })
    .catch((error) => {
      console.log("error catch", error);
    });
   } catch (error) {
     console.log('exception in get call', error);
     failed(error)
    
   }
 }
);
}

export const getCulture = () => {
    console.log("get function running")
    console.log("SERVER", CONSTANTS.SERVER.BASEURL)
 
 return new Promise(function (success, failed) {
   try {
    axios
    .get(`${CONSTANTS.SERVER.BASEURL}/api/v1/stories?section-id=${REACT_APP_CULTURE_SECTION_ID}`)
    .then((response) => {
      console.log("response from http base client culture", response.data);
      success(response);
    //   setApiData(response.data.stories);
    })
    .catch((error) => {
      console.log("error catch", error);
    });
   } catch (error) {
     console.log('exception in get call', error);
     failed(error)
    
   }
 }
);
}

// export default {get}