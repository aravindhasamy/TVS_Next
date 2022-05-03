import React, { useEffect, useState } from "react";
import politicsStyles from "./Politics.module.css";
import axios from "axios";
import { NewsHeaderCard } from "react-ui-cards";

const Politics = (props) => {
  const [apiData, setApiData] = useState([]);
  const baseUrl =
    "https://madrid.quintype.io/api/v1/stories?section-id=83";

  useEffect(() => {
    console.log("useeffect running");
    apiCallHandler();
  }, []);

  const apiCallHandler = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        console.log("response", response.data.stories["hero-image-s3-key"]);
        setApiData(response.data.stories);
      })
      .catch((error) => {
        console.log("error catch", error);
      });
  };

  
  return (
    <div className={politicsStyles.container}>
      <div className={politicsStyles.innerContainer}>
        <div className={politicsStyles.header}>
          <div className={politicsStyles.heading}>Politics</div>
        </div>
        <div className={politicsStyles.newsContainer}>
          <div className={politicsStyles.leftContainer}>
            <div className={politicsStyles.banner}>
              {apiData.map((item) => {

                return (
                  <div className={politicsStyles.innerBanner} onClick={()=>{window.open(item.url)}}>
                  <NewsHeaderCard                  
                    thumbnail={`https://gumlet.assettype.com/${item["hero-image-s3-key"]}`}
                    title={item.headline}
                  />
                 </div>
                );
                
              })}
            </div>
            <div className={politicsStyles.smallBanner}>
            {apiData.map((item) => {
               
                return (
                  <NewsHeaderCard
                    thumbnail={`https://gumlet.assettype.com/${item["hero-image-s3-key"]}`}
                    title={item.subheadline}
                  />
                
                );
                
              })}
            </div>
          </div>
          <div className={politicsStyles.rightContainer}>
            {apiData.map((item) => {
              return (
                <div className={politicsStyles.card} onClick={()=>{window.open(item.url)}}>
                  <p className={politicsStyles.headline}>{item.headline}</p>
                  <p className={politicsStyles.author}>{item["author-name"]}</p>
                  {/* <p>{item.name}</p>
                <p>{item.age}</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Politics;
