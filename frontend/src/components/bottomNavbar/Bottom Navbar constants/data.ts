export interface Amazingview {
    id: number;
    src: string;
    location: string;
    views: string;
    dates: string;
    price: number;
    details: string;

}
export interface Amazingpool {
    id:number;
    location: string;
    distance: string;
    dates: string;
    price_per_night: number;
    image_link:string;

}

export interface Luxe  {
    id: number;
    image_url:string ;
    location: string;
    distance: string;
    dates: string;
    price: number ;

}
export interface Farms{
    id:number;
    image_url:string;
    Location:string;
    distance:string;
    dates:string;
    price_per_night:number;

}

export interface Historicalhomes{
    id:number;
    image_url:string;
    location:string;
    distance:string;
    date:string;
    price:number;
}

export interface Castles{
    id:number;
    image_url:string;
    location:string;
    distance:string;
    date:string;
    price:number;
}
export interface omg{
    id:number;
    image_url:string;
    location:string;
    distance:string;
    date:string;
    price:number;
}
export interface Countryside{
    id:number;
    image_url:string;
    location:string;
    distance:string;
    date:string;
    price:number;
}

export interface categories {
    Amazingview: Amazingview[];
    Amazingpools:Amazingpool[];
    Luxe:Luxe[];
    Farms:Farms[];
    Historicalhomes:Historicalhomes[];
    Castles:Castles[];
    omg:omg[];
    Countryside:Countryside[];
}

//Amazingview example data
// {
//     "id": 1,
//     "href": "https://www.airbnb.co.in/rooms/694576369161952366?adults=1&category_tag=Tag%3A8536&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1490989377&search_mode=flex_destinations_search&check_in=2024-05-13&check_out=2024-05-18&source_impression_id=p3_1715259893_3AjpCzooZWlfX89M&previous_page_section_name=1000&federated_search_id=6c0d7322-9ca6-4fe0-af69-491784469f4b",
//     "src": "https://a0.muscache.com/im/pictures/miso/Hosting-694576369161952366/original/0f692363-ea7b-4710-89d6-ad4bef9c4528.jpeg?im_w=720",
//     "location": "Mashobra, India",
//     "views": "Mountain views",
//     "dates": "13–18 May",
//     "price": "₹26,535",
//     "details": "₹26,535 per night"
//   }

//Amazingpool example data
// {
//     "id": 1,
//     "location": "Vadholi, India",
//     "distance": "805 kilometres away",
//     "dates": "12–17 May",
//     "price_per_night": "₹16,076",
//     "image_link": "https://a0.muscache.com/im/pictures/miso/Hosting-777908525036300828/original/8b0f4942-ab59-4286-9961-d30b5e120345.jpeg?im_w=720"
//   }

//Luxe example data
// {
//     "id": 1,
//     "url": "https://www.airbnb.co.in/luxury/listing/873064690436431918?adults=1&category_tag=Tag%3A8253&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1657858726&search_mode=flex_destinations_search&check_in=2024-05-31&check_out=2024-06-05&source_impression_id=p3_1715279921_t%2BHFxKD8IGI1vq%2BM&previous_page_section_name=1000&federated_search_id=54501108-30c3-46dd-b232-057792c11ddb",
//     "image_url": "https://a0.muscache.com/im/pictures/miso/Hosting-873064690436431918/original/d6e4af21-a43d-4d41-af78-735d43d5c085.jpeg?im_w=720",
//     "location": "Mahabaleshwar, India",
//     "distance": "1,024 kilometres away",
//     "dates": "31 May – 5 Jun",
//     "price": "₹60,500",
//     "per_night": "₹60,500 per night"
//   }

//Farms example data
// {
//     "id": 1,
//     "url": "https://www.airbnb.co.in/rooms/52735115?adults=1&category_tag=Tag%3A8175&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1266342977&search_mode=flex_destinations_search&check_in=2024-05-12&check_out=2024-05-17&source_impression_id=p3_1715277447_4dTA4MUiWVdU1apd&previous_page_section_name=1000",
//     "image_link": "https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=720",
//     "location": "Pharog, India",
//     "distance": "508 kilometres away",
//     "dates": "12–17 May",
//     "price_per_night": "₹7,999",
//     "average_rating": "₹7,999 per night"
//   }

//Historicalhomes example data
// {
//     "id": 1,
//     "listing_url": "https://www.airbnb.co.in/rooms/22352795?adults=1&category_tag=Tag%3A8524&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=424225351&search_mode=flex_destinations_search&check_in=2024-05-10&check_out=2024-05-15&source_impression_id=p3_1715282644_g4pa%2BctW5sYsiECI&previous_page_section_name=1000&federated_search_id=095d9289-4bf7-4f70-90b1-d93b99a1a259",
//     "image_url": "https://a0.muscache.com/im/pictures/454710cc-6052-4669-9019-d347e87d9a26.jpg?im_w=720",
//     "location": "Udaipur, India",
//     "distance": "336 kilometres away",
//     "date_range": "10–15 May",
//     "price": "₹7,189",
//     "price_per_night": "₹7,189 per night",
//     "average_rating": "4.94 out of 5",
//     "guest_favorite": "Guest favourite"
//   }

//Castles example data
// {
//     "id": 1,
//     "listing_url": "https://www.airbnb.co.in/rooms/53519419?adults=1&category_tag=Tag%3A8047&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1566070964&search_mode=flex_destinations_search&check_in=2024-05-15&check_out=2024-05-20&source_impression_id=p3_1715283192_r34wA90WA5m77%2B2d&previous_page_section_name=1000&federated_search_id=0f3ac1eb-f852-45be-b8bd-4c50cefb54c1",
//     "image_url": "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720",
//     "location": "Bujra, India",
//     "distance": "Built in 2020",
//     "date_range": "15–20 May",
//     "price": "₹80,000",
//     "price_per_night": "₹80,000 per night",
//     "average_rating": null,
//     "guest_favorite": null
//   }

//omg example data
// {
//     "id": 1,
//     "listing_url": "https://www.airbnb.co.in/rooms/45694252?adults=1&category_tag=Tag%3A8225&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1075780878&search_mode=flex_destinations_search&check_in=2024-05-19&check_out=2024-05-24&source_impression_id=p3_1715281779_c0xnXGS%2FleJl6Iul&previous_page_section_name=1000",
//     "image_url": "https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=720",
//     "location": "Sindun-myeon, Icheon-si, South Korea",
//     "distance": "4,930 kilometres away",
//     "date_range": "19–24 May",
//     "price": "₹6,312",
//     "price_per_night": "₹6,312 per night",
//     "average_rating": "4.83 out of 5",
//     "guest_favorite": null
//   }

//Countryside example data
// {
//     "id": 1,
//     "url": "https://www.airbnb.co.in/rooms/837315422629442025?adults=1&category_tag=Tag%3A4104&children=0&enable_m3_private_room=true&infants=0&pets=0&photo_id=1597722063&search_mode=flex_destinations_search&check_in=2024-05-10&check_out=2024-05-15&source_impression_id=p3_1715280865_EmC30PZOpvzMBwHR&previous_page_section_name=1000&federated_search_id=f832aaec-4c25-4047-876d-16d6c14916b4",
//     "image_url": "https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720",
//     "location": "Nagla Megha, India",
//     "distance": "326 kilometres away",
//     "dates": "10–15 May",
//     "price": "₹19,478",
//     "per_night": "₹19,478 per night"
//   }