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

  const fakeApiData = [
    {
      "author-name": "Greeshma",
      headline: "India vs China Battle",
      slug: "politics/India-vs-China-Battle",
      "last-published-at": 1519975157133,
      subheadline: null,
      alternative: {},
      sections: [
        {
          "domain-slug": null,
          slug: "politics",
          name: "Politics",
          "section-url": "https://madrid.quintype.io/politics",
          id: 83,
          "parent-id": null,
          "display-name": "Politics & More",
          collection: {
            slug: "the-quint",
            name: "Most Popular",
            id: 4364,
          },
          data: null,
        },
      ],
      "hero-image-metadata": {
        width: 1600,
        height: 1068,
        "mime-type": "image/jpeg",
        "focus-point": [971, 601],
      },
      "published-at": 1519975157133,
      id: "7e803bcc-cb40-4f4d-b810-ae9ace8ba4c1",
      "hero-image-s3-key":
        "quintype-demo/2018-01/5c55eaab-9c97-49f9-8b14-64b661d9a763/1 - Thumb Tac Paper Lanterns Glowing Tall.jpg",
      url: "https://madrid.quintype.io/politics/India-vs-China-Battle",
      "author-id": 482995,
      "first-published-at": 1499594657010,
      "story-template": null,
      metadata: {
        "card-share": {
          shareable: true,
        },
      },
    },
    {
      "author-name": "Kuruvilla Choolackal",
      headline: "Behind coal tug-of-war, more Gupta strings",
      slug: "politics/behind-coal-tug-of-war-more-gupta-strings",
      "last-published-at": 1606728313688,
      subheadline:
        "An obscure Swiss company fights to buy the crown jewels of what remains of the family’s SA assets. Are the Guptas trying to do a deal with themselves?",
      alternative: {},
      sections: [
        {
          "domain-slug": null,
          slug: "politics",
          name: "Politics",
          "section-url": "https://madrid.quintype.io/politics",
          id: 83,
          "parent-id": null,
          "display-name": "Politics & More",
          collection: {
            slug: "the-quint",
            name: "Most Popular",
            id: 4364,
          },
          data: null,
        },
      ],
      "hero-image-metadata": {
        width: 300,
        "mime-type": "image/jpeg",
        "focus-point": [193, 94],
        height: 168,
      },
      "published-at": 1606728313688,
      id: "1d23e3e9-452c-4b21-b307-dcb9175c55ac",
      "hero-image-s3-key":
        "quintype-demo/2016-12/350d3732-9dfe-47f7-b071-dc10f087c59e/J-1.jpeg",
      url: "https://madrid.quintype.io/politics/behind-coal-tug-of-war-more-gupta-strings",
      "author-id": 2040,
      "first-published-at": 1544103001976,
      "story-template": "text",
      metadata: {
        "card-share": {
          shareable: true,
        },
      },
    },
    {
      "author-name": "Philson Joseph",
      headline:
        "اہم خبریں: مہاراشٹر گورنر نے ارنب گوسوامیکی سیکورٹی کو لیکر وزیر داخلہ سے کی گفتگو",
      slug: "politics/httpswwwqaumiawazcomnationallatest-news-and-breaking-today-live-updates-9th-november-2020",
      "last-published-at": 1604914993107,
      subheadline:
        "مہاراشٹر گورنر نے ارنب گوسوامی کی سیکورٹی کو لیکر وزیر داخلہ سے کی گفتگو",
      alternative: {},
      sections: [
        {
          "domain-slug": null,
          slug: "politics",
          name: "Politics",
          "section-url": "https://madrid.quintype.io/politics",
          id: 83,
          "parent-id": null,
          "display-name": "Politics & More",
          collection: {
            slug: "the-quint",
            name: "Most Popular",
            id: 4364,
          },
          data: null,
        },
      ],
      "hero-image-metadata": {
        width: 750,
        height: 422,
        "mime-type": "image/jpeg",
        "file-size": 25415,
        "file-name":
          "qaumiawaz_2020-10_190289a2-bfbc-42ed-9cce-73b26032d457_arnab.jpg",
      },
      "published-at": 1604914993107,
      id: "97ad7e03-371f-44ed-829f-8df55f3cf474",
      "hero-image-s3-key":
        "quintype-demo/2020-11/894be45e-c323-4d7c-b65e-2b8870499355/qaumiawaz_2020_10_190289a2_bfbc_42ed_9cce_73b26032d457_arnab.jpg",
      url: "https://madrid.quintype.io/politics/httpswwwqaumiawazcomnationallatest-news-and-breaking-today-live-updates-9th-november-2020",
      "author-id": 1311246,
      "first-published-at": 1604914993107,
      "story-template": "text",
      metadata: {
        "card-share": {
          shareable: true,
        },
      },
    },
    {
      "author-name": "Ashrita Jessica",
      headline:
        "Unfassbar Donald Trump drängt Reporter, gegen Corona-Regel zu verstoßen",
      slug: "politics/unfassbar-donald-trump-drngt-reporter-gegen-corona-regel-zu-verstoen",
      "last-published-at": 1599633601450,
      subheadline: "08.09.20, 22:14 Uhr",
      alternative: {},
      sections: [
        {
          "domain-slug": null,
          slug: "politics",
          name: "Politics",
          "section-url": "https://madrid.quintype.io/politics",
          id: 83,
          "parent-id": null,
          "display-name": "Politics & More",
          collection: {
            slug: "the-quint",
            name: "Most Popular",
            id: 4364,
          },
          data: null,
        },
      ],
      "hero-image-metadata": {
        width: 940,
        height: 469,
        "mime-type": "image/jpeg",
        "file-size": 43007,
        "file-name": "donald-trump.jpg",
      },
      "published-at": 1599633601450,
      id: "472ce3fc-3711-45f0-ae3c-c92badc7c802",
      "hero-image-s3-key":
        "quintype-demo/2020-09/a27e92a9-85bd-433c-93a2-7c95c2477ff6/donald_trump.jpg",
      url: "https://madrid.quintype.io/politics/unfassbar-donald-trump-drngt-reporter-gegen-corona-regel-zu-verstoen",
      "author-id": 1448811,
      "first-published-at": 1599633601450,
      "story-template": "text",
      metadata: {
        "card-share": {
          shareable: true,
        },
      },
    },
  ];
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
