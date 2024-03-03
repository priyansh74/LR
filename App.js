import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://marketplace.canva.com/EAEzOw_ovvE/1/0/1600w/canva-watercolor-food-logo-0GcpZ9_7Xls.jpg" alt="Web-icon" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  );
};

const resList = [
  {
  "info": {
  "id": "198493",
  "name": "Leon's - Burgers & Wings (Leon Grill)",
  "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
  "locality": "Whitefield",
  "areaName": "Whitefield",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "American",
  "Snacks",
  "Turkish",
  "Portuguese",
  "Continental"
  ],
  "avgRating": 4.3,
  "parentId": "371281",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "promoted": true,
  "adTrackingId": "cid=11603576~p=1~eid=0000018d-fb5d-a0f1-18ca-f05b00b00156~srvts=1709319233777~45826",
  "sla": {
  "deliveryTime": 26,
  "lastMileTravel": 0.3,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "0.3 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=198493",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "659739",
  "name": "La Pino'z Pizza",
  "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
  "locality": "Yoshitha HiTech International",
  "areaName": "120 B Epip Industrial Area",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Italian",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4,
  "parentId": "4961",
  "avgRatingString": "4.0",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 30,
  "lastMileTravel": 4.2,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.1 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 04:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=659739",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "23822",
  "name": "Domino's Pizza",
  "cloudinaryImageId": "jbtagog4oobstqti68kj",
  "locality": "Doddanekkundi",
  "areaName": "Mahadevpura",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Pizzas",
  "Italian",
  "Pastas",
  "Desserts"
  ],
  "avgRating": 4.4,
  "parentId": "2456",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 25,
  "serviceability": "SERVICEABLE",
  "slaString": "25 mins",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:59:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=23822",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "314429",
  "name": "Natural Ice Cream",
  "cloudinaryImageId": "c6qq2z231kv64qacyg5y",
  "locality": "Hagdur Road",
  "areaName": "Whitefield",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.6,
  "veg": true,
  "parentId": "2093",
  "avgRatingString": "4.6",
  "totalRatingsString": "1K+",
  "promoted": true,
  "adTrackingId": "cid=11637945~p=2~eid=0000018d-fb5d-a0f1-18ca-f05c00b00203~srvts=1709319233777~45826",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 2.9,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=314429",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "634166",
  "name": "Burger King",
  "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  "locality": "Nexus Whitefield Mall",
  "areaName": "Whitefield",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.1,
  "parentId": "166",
  "avgRatingString": "4.1",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 32,
  "lastMileTravel": 4.1,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 03:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹129"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=634166",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "1327",
  "name": "Baskin Robbins - Ice Cream Desserts",
  "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
  "locality": "Varthur Main Road",
  "areaName": "Whitefield",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "5588",
  "avgRatingString": "4.4",
  "totalRatingsString": "5K+",
  "sla": {
  "deliveryTime": 19,
  "lastMileTravel": 0.6,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 06:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "D",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "30% OFF",
  "subHeader": "UPTO ₹75"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=1327",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "736188",
  "name": "Olio - The Wood Fired Pizzeria",
  "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
  "locality": "Prashanth Extension",
  "areaName": "Whitefield",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Fast Food",
  "Snacks",
  "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "11633",
  "avgRatingString": "4.3",
  "totalRatingsString": "100+",
  "promoted": true,
  "adTrackingId": "cid=11623616~p=4~eid=0000018d-fb5d-a0f1-18ca-f05e00b0044f~srvts=1709319233777~45826",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 0.2,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "0.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 05:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  }
  ]
  },
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "description": "",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=736188",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "622345",
  "name": "The sandwich juice shop",
  "cloudinaryImageId": "650247e550001c5e6dd650a5c29a0d5a",
  "locality": "Gandhipuram",
  "areaName": "Whitefield",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Healthy Food",
  "Beverages",
  "Snacks"
  ],
  "avgRating": 4.4,
  "parentId": "370444",
  "avgRatingString": "4.4",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 26,
  "lastMileTravel": 2.2,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "2.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 23:59:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "shortDescription": "brand",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x"
  }
  }
  ]
  },
  "textBased": {},
  "imageBased": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=622345",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "193319",
  "name": "The Sandwich Station",
  "cloudinaryImageId": "ugvzryoxa6f0shpictff",
  "locality": "Siddapura Main Road",
  "areaName": "Whitefield",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Continental",
  "Beverages",
  "Juices"
  ],
  "avgRating": 4.2,
  "veg": true,
  "parentId": "21247",
  "avgRatingString": "4.2",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 3.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {},
  "textBased": {},
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=193319",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "393934",
  "name": "Grameen Kulfi",
  "cloudinaryImageId": "lrstc491jly6qaam4qog",
  "locality": "Prasanth Pai Layout",
  "areaName": "Whitefield",
  "costForTwo": "₹120 for two",
  "cuisines": [
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.8,
  "veg": true,
  "parentId": "12175",
  "avgRatingString": "4.8",
  "totalRatingsString": "500+",
  "promoted": true,
  "adTrackingId": "cid=11626557~p=5~eid=0000018d-fb5d-a0f1-18ca-f05f00b0050a~srvts=1709319233777~45826",
  "sla": {
  "deliveryTime": 16,
  "lastMileTravel": 0.5,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=393934",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "376442",
  "name": "Lakeview Milk Bar",
  "cloudinaryImageId": "qyqkbiryjgqn7w9gujfx",
  "locality": "Whitefield",
  "areaName": "Whitefield",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Ice Cream"
  ],
  "avgRating": 4.3,
  "parentId": "585",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 2.3,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 00:55:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "20% OFF",
  "subHeader": "UPTO ₹50"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=376442",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "23686",
  "name": "McDonald's",
  "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
  "locality": "Forum Neighbourhood Mall",
  "areaName": "Whitefield",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Beverages",
  "Cafe",
  "Desserts"
  ],
  "avgRating": 4.3,
  "parentId": "630",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 30,
  "lastMileTravel": 4.1,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:45:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "description": "",
  "shortDescription": "options available"
  }
  }
  ]
  },
  "textBased": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=23686",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "702864",
  "name": "TrueCakes - Fresh | Eggless | Cakes",
  "cloudinaryImageId": "622231ea5bffa83e95109aee02019c90",
  "locality": "Vijayanagar",
  "areaName": "Whitefield",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Bakery",
  "Desserts"
  ],
  "avgRating": 4.5,
  "veg": true,
  "parentId": "465380",
  "avgRatingString": "4.5",
  "totalRatingsString": "100+",
  "promoted": true,
  "adTrackingId": "cid=11610787~p=6~eid=0000018d-fb5d-a0f1-18ca-f06000b0063d~srvts=1709319233777~45826",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 1.3,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 01:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {},
  "textBased": {},
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=702864",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "558768",
  "name": "HRX by EatFit",
  "cloudinaryImageId": "d8d85afa5c5e92461d30ff2ca867a587",
  "locality": "Ramagondanahalli",
  "areaName": "Whitefield",
  "costForTwo": "₹450 for two",
  "cuisines": [
  "Healthy Food",
  "Salads",
  "Keto",
  "Pastas"
  ],
  "avgRating": 4.5,
  "parentId": "335529",
  "avgRatingString": "4.5",
  "totalRatingsString": "100+",
  "sla": {
  "deliveryTime": 27,
  "lastMileTravel": 3.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 01:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "description": "",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  }
  ]
  },
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=558768",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "749777",
  "name": "Sorbetto - Ice Creams",
  "cloudinaryImageId": "8e7a7b397bedfd0c2f040d20c2e75968",
  "locality": "Mahadevapura",
  "areaName": "Whitefield",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "488911",
  "avgRatingString": "4.3",
  "totalRatingsString": "100+",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 2.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 05:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {},
  "textBased": {},
  "imageBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=749777",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "767238",
  "name": "Asha Sweet Center - Since 1951",
  "cloudinaryImageId": "6d990316fc359969f8fe3e77290ff2a3",
  "locality": "Hagdur Road",
  "areaName": "Whitefield",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Bakery",
  "Sweets"
  ],
  "avgRating": 4.2,
  "veg": true,
  "parentId": "472555",
  "avgRatingString": "4.2",
  "totalRatingsString": "50+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 2.9,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "10% OFF",
  "subHeader": "UPTO ₹40"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=767238",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "395214",
  "name": "McDonald's Gourmet Burger Collection",
  "cloudinaryImageId": "q8yin26kovdptx2txacy",
  "locality": "Whitefield Main Road",
  "areaName": "Whitefield",
  "costForTwo": "₹600 for two",
  "cuisines": [
  "Burgers",
  "Beverages",
  "Cafe",
  "Desserts"
  ],
  "avgRating": 4.1,
  "parentId": "10761",
  "avgRatingString": "4.1",
  "totalRatingsString": "100+",
  "sla": {
  "deliveryTime": 31,
  "lastMileTravel": 3.6,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "3.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=395214",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "588442",
  "name": "The Dessert Heaven - Pure Veg",
  "cloudinaryImageId": "bca418d5554239d48ac1f8ba84a42d79",
  "locality": "Hope Farm Junction",
  "areaName": "Ambedkar Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Sweets",
  "Ice Cream"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "350292",
  "avgRatingString": "4.3",
  "totalRatingsString": "100+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 0.1,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "0.1 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 02:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "options available",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x",
  "description": "",
  "shortDescription": "options available"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=588442",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "46461",
  "name": "Glen's Bakehouse",
  "cloudinaryImageId": "goavau2g0nrsnjidoypo",
  "locality": "Whitefield",
  "areaName": "Whitefield",
  "costForTwo": "₹800 for two",
  "cuisines": [
  "Desserts",
  "Bakery",
  "Beverages",
  "Continental",
  "Italian"
  ],
  "avgRating": 4.4,
  "parentId": "3220",
  "avgRatingString": "4.4",
  "totalRatingsString": "10K+",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 2.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 00:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  }
  ]
  },
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=46461",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "704724",
  "name": "Juno's Pizza - The Thin Crust Pizzeria",
  "cloudinaryImageId": "2fa2444b7ce09ae4702b0e5928366b8a",
  "locality": "Varthur Main Road",
  "areaName": "Whitefield",
  "costForTwo": "₹270 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Fast Food",
  "Snacks",
  "Beverages"
  ],
  "avgRating": 4.1,
  "parentId": "360477",
  "avgRatingString": "4.1",
  "totalRatingsString": "10+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 3.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 05:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {},
  "textBased": {},
  "imageBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹249",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=704724",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "376697",
  "name": "Big Bowl",
  "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
  "locality": "Thubarahalli",
  "areaName": "Whitefield",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "North Indian",
  "Chinese",
  "Tibetan",
  "Desserts"
  ],
  "avgRating": 4,
  "parentId": "434792",
  "avgRatingString": "4.0",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 31,
  "lastMileTravel": 5.9,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "5.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 03:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textExtendedBadges": {},
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹169"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=376697",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "550793",
  "name": "Bakingo",
  "cloudinaryImageId": "fa68ac0434f668bba1322abda36570b3",
  "locality": "Hagdur Road",
  "areaName": "Whitefield",
  "costForTwo": "₹299 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Beverages",
  "Snacks"
  ],
  "avgRating": 4.3,
  "parentId": "3818",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 2.7,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 01:00:00",
  "opened": true
  },
  "badges": {
  "textExtendedBadges": [
  {
  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
  "shortDescription": "Perfect Cake Delivery",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {},
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "shortDescription": "Perfect Cake Delivery",
  "fontColor": "#7E808C",
  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
  "description": ""
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=550793",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "739398",
  "name": "Salad Days",
  "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
  "locality": "Arya Hub Mall",
  "areaName": "Whitefield",
  "costForTwo": "₹500 for two",
  "cuisines": [
  "Salads"
  ],
  "avgRating": 4.6,
  "parentId": "796",
  "avgRatingString": "4.6",
  "totalRatingsString": "500+",
  "sla": {
  "deliveryTime": 19,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 01:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "newg.png",
  "description": "Gourmet"
  }
  }
  ]
  },
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "description": "",
  "shortDescription": "brand",
  "fontColor": "#7E808C",
  "iconId": "guiltfree/GF_Logo_android_3x"
  }
  }
  ]
  },
  "textBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "40% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=739398",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "779830",
  "name": "Wendy's Burgers",
  "cloudinaryImageId": "f1aa621021a2826088089b89842d4e7c",
  "locality": "HAGDUR ROAD",
  "areaName": "WHITEFIELD",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "American",
  "Fast Food",
  "Snacks",
  "Beverages"
  ],
  "avgRating": 4,
  "parentId": "972",
  "avgRatingString": "4.0",
  "totalRatingsString": "100+",
  "sla": {
  "deliveryTime": 31,
  "lastMileTravel": 2.9,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 03:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textExtendedBadges": {},
  "textBased": {},
  "imageBased": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹149"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "isNewlyOnboarded": true,
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=779830",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  },
  {
  "info": {
  "id": "255814",
  "name": "Great Indian Khichdi by EatFit",
  "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
  "locality": "Hope Farm Junction",
  "areaName": "Whitefield",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Home Food",
  "Indian",
  "North Indian",
  "Healthy Food",
  "Snacks",
  "Desserts",
  "Rajasthani",
  "South Indian",
  "Maharashtrian",
  "Sweets"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "319582",
  "avgRatingString": "4.3",
  "totalRatingsString": "1K+",
  "sla": {
  "deliveryTime": 21,
  "lastMileTravel": 0.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "0.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2024-03-02 01:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ],
  "textExtendedBadges": [
  {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "textBased": {},
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  }
  ]
  },
  "textExtendedBadges": {
  "badgeObject": [
  {
  "attributes": {
  "iconId": "guiltfree/GF_Logo_android_3x",
  "description": "",
  "shortDescription": "brand",
  "fontColor": "#7E808C"
  }
  }
  ]
  }
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {},
  "cta": {
  "link": "swiggy://menu?restaurant_id=255814",
  "text": "RESTAURANT_MENU",
  "type": "DEEPLINK"
  }
  }
  ]
const RestaurantCard = (props) =>{
   const {resData} = props;

   const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
   const {deliveryTime} = resData?.info?.sla;
   
   //const imgSrc = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/";
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/" +cloudinaryImageId}/>
      <h4> {name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} mins</h4> 
      <h4>{costForTwo}</h4>
     </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
        ))}
          
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

