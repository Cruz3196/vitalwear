import BlackShortsProduct1 from './BlackShortsProduct1 .jpeg';
import AmericanMuscleShirt from './AmericanMuscleShirt .jpeg';
import Tank from './Tank.jpeg'
import leggings from './leggings.jpeg';
import Cutoff from './Cutoff .jpeg';
import slimtank from './slimtank .jpeg';
import liftingstraps from './liftingstraps .jpeg'
import socks from './socks.jpeg'; 
import waterbottle from './waterbottle.jpeg';
import mencollection from './mencollection.jpeg';
import womencollection from './womencollection.jpeg';
import liftingGear from './liftingGear .jpeg';



const Products = [
    {
        "id": 1,
        "title": "SPORT SHORTS",
        "price": 37,
        "image": BlackShortsProduct1,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 4.5
    },
    {
        "id": 2,
        "title": "MUSCLE T-SHIRT",
        "price": 25,
        "image": AmericanMuscleShirt,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. A pellentesque sit amet porttitor eget. Malesuada fames ac turpis egestas sed. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Scelerisque fermentum dui faucibus in ornare quam. Ac ut consequat semper viverra nam libero justo laoreet sit. Leo in vitae turpis massa",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 3.5
    },
    {
        "id": 3,
        "title": "ATHLETIC TEE",
        "price": 48,
        "image": Tank,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. A pellentesque sit amet porttitor eget. Malesuada fames ac turpis egestas sed. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Scelerisque fermentum dui faucibus in ornare quam. ",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 3.0
    },
    {
        "id": 4,
        "title": "LEGGINGS",
        "price": 38,
        "image": leggings,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 4.0
    },
    {
        "id": 5,
        "title": "CUT OFF TANK",
        "price": 40,
        "image": Cutoff,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 4.5
    },
    {
        "id": 6,
        "title": "ARRIVAL TANK",
        "price": 20,
        "image": slimtank,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 2.5
    },
    {
        "id": 7,
        "title": "LIFTING STRAPS",
        "price": 16,
        "image": liftingstraps,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 5.0
    },
    {
        "id": 8,
        "title": "CREW SOCKS 3PK",
        "price": 16,
        "image": socks,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. A pellentesque sit amet porttitor eget.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 3.5
    },
    {
        "id": 9,
        "title": "74OZ WATER BOTTLE",
        "price": 18,
        "image": waterbottle,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. A pellentesque sit amet porttitor eget.",
        "brand": "Brand A",
        "category": "Category ",
        "sku": "SKU001",
        "availability": true,
        "size": ["S", "M", "L"],
        "reviews": 45,
        "rating": 2.5
    }
];

const PromosList = [
    {
        "id": 1,
        "title": "Men's collection",
        "imageURL": mencollection,
        "link": "/mens-collection"
    },
    {
        "id": 2,
        "title": "Women's Collection",
        "imageURL": womencollection,
        "link": "womens-collection"
    },
    {
        "id": 3,
        "title": "Lifting Gear",
        "imageURL": liftingGear,
        "link": "/lifting-gear"
    }
]; 

const HeroData = [
    {
        id: 1, 
        title: "FULL CHARGE",
        image: "https://www.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F2H5ERqks2j6eF9rtn4SZZN%2F2b5d9ade931d28987127d45b5c755c49%2Fdesktop-banner.jpg&w=3840&q=85",
        h2: "Energy + powers you through your thoughest Sets",
        buttons: [
            { text: "CHARGE UP", link: '/Products'},
        ],
        customClass: 'hero-full-charge' 
    },
    {
        id: 2, 
        title: "NEW STUFF JUST DROPPED",
        image: "https://images.ctfassets.net/wl6q2in9o7k3/43afnXy5BKoGWPFCc78mUE/c82e722eb97907da6e6fbe789ea755f4/A_Collection_Banner_3840x1096.jpg",
        h2: "Discover your potential",
        buttons: [
            { text: "SHOP MEN", link: '/Products' },
            { text: "SHOP WOMEN", link: '/Products' }
        ],
        customClass: 'hero-new-section'
    }
];

export { Products, PromosList, HeroData };
