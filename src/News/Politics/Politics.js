import React, { useEffect, useState } from "react";
import politicsStyles from "./Politics.module.css";
import axios from "axios";
import { NewsHeaderCard } from "react-ui-cards";
import { getPolitics, getCulture } from "../../network/HttpBaseClient";

const Politics = (props) => {
  const [apiPoliticsData, setApiPoliticsData] = useState([]);
  const [apiCultureData, setApiCultureData] = useState([]);
  const baseUrl = "https://madrid.quintype.io/api/v1/stories?section-id=83";

  useEffect(() => {
    console.log("useeffect running");
    apiCallHandler();
  }, []);

  const apiCallHandler = () => {
    console.log("apiCallHandler running");
    getPolitics()
      .then((response) => {
        console.log("response from politics", response);
        setApiPoliticsData(response.data.stories);
      })
      .catch((error) => {
        console.log("error catch", error);
      });

    getCulture()
      .then((response) => {
        console.log("response from culture", response);
        setApiCultureData(response.data.stories);
      })
      .catch((error) => {
        console.log("error catch", error);
      });

    // axios
    //   .get(baseUrl)
    //   .then((response) => {
    //     console.log("response", response.data.stories["hero-image-s3-key"]);
    //     setApiData(response.data.stories);
    //   })
    //   .catch((error) => {
    //     console.log("error catch", error);
    //   });
  };

  return (
    <div className={politicsStyles.container}>
      <div className={politicsStyles.innerContainer}>
        <div className={politicsStyles.header}>
          <div className={politicsStyles.heading}>Politics</div>
          <div className={politicsStyles.culture}>Culture</div>
        </div>
        <div className={politicsStyles.newsContainer}>
          <div className={politicsStyles.leftContainer}>
            <div className={politicsStyles.banner}>
              {apiPoliticsData.map((item) => {
                return (
                  <div
                    className={politicsStyles.innerBanner}
                    onClick={() => {
                      window.open(item.url);
                    }}
                  >
                    <NewsHeaderCard
                      thumbnail={`https://gumlet.assettype.com/${item["hero-image-s3-key"]}`}
                      title={item.headline}
                    />
                  </div>
                );
              })}
            </div>
            <div className={politicsStyles.smallBanner}>
              <div className={politicsStyles.innerSmallBanner}>
                {apiCultureData.map((item) => {
                  return (
                    // <div className={politicsStyles.innerSmallBanner}>
                    //  <p>hello</p>
                    //   <div className={politicsStyles.smallBannerImage}>
                    //     <div >
                    //     <img src={require(`https://gumlet.assettype.com/${item["hero-image-s3-key"]}`)}/>
                    //     </div>
                    //   </div>
                    //   <div className={politicsStyles.smallBannerText}></div>
                    // </div>
                    <NewsHeaderCard
                      thumbnail={`https://gumlet.assettype.com/${item["hero-image-s3-key"]}`}
                      title={item.subheadline}
                      data-testid="politics_card"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className={politicsStyles.rightContainer}>
            {apiCultureData.map((item) => {
              return (
                <div
                  className={politicsStyles.card}
                  onClick={() => {
                    window.open(item.url);
                  }}
                >
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
