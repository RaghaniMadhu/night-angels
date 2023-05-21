import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "Assorted Tank top",
    description:
      "This is a stylish, trendy and modern tank top from the house of Clovia. It features a high degree of stretchability due to its fabric. Also, it is considered as an ideal choice for activewear. For those looking for a fine blend of comfort and style, this is a perfect choice. As it is a sleeveless tank top, it further adds to the glam quotient and makes one look all the more appealing.",
    original_price: "499",
    price: "159",
    rating: "4.1",
    sizesAvailable: ["S", "M", "L"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-assorted-tank-top-572829.jpg",
    category: "Topwear",
    fabric: "lycra",
    color: "red",
    new_arrivals: false,
    reviews: "4.5K",
    delivery_time: "2",
  },
  {
    _id: uuid(),
    title: "Tank Top in White",
    description:
      "Team this white-coloured tank top with a pair of comfy jeans and sneakers and your stylish look is complete. Made with cotton fabric, it is soft and comfortable to wear. Additionally, this sleeveless tank top has a round neckline and a racerback. This tank top features four-way stretchable fabric that is crease-free and doesn’t roll up. This fabric has a high degree of flexibility, which makes this top ideal for workouts. You can also use this tank top as a layering canvas over a shrug of your choice.",
    original_price: "499",
    price: "299",
    rating: "2.3",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-cotton-racerback-tank-top-1-355314.jpg",
    category: "Topwear",
    fabric: "cotton",
    color: "white",
    new_arrivals: true,
    reviews: "200",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Quirky Text Top in Dark Pink",
    description:
      "Dark pink T-shirt crafted with 100% cotton fabric.Designed with quirky text print on the chest.Has a round neckline and short sleeves.",
    original_price: "999",
    price: "349",
    rating: "3.5",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-quirky-text-top-in-dark-pink-100-cotton-677199.jpg",
    category: "Topwear",
    fabric: "cotton",
    color: "pink",
    new_arrivals: false,
    reviews: "172",
    delivery_time: "2",
  },
  {
    _id: uuid(),
    title: "Music Magic Top in Dark Pink",
    description:
      "Dark pink T-shirt crafted with 100% cotton fabric. Designed with cool headphone and text print at the chest. Has a round neckline and short sleeves.",
    original_price: "999",
    price: "329",
    rating: "4.1",
    sizesAvailable: ["S", "M", "L", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lt0124f14-726353.JPG",
    category: "Topwear",
    fabric: "cotton",
    color: "pink",
    new_arrivals: true,
    reviews: "297",
    delivery_time: "2",
  },
  {
    _id: uuid(),
    title: "Chic Basic Top in Black",
    description:
      "Black top crafted with soft cotton rich fabric. Designed with round neck & short sleeves.",
    original_price: "899",
    price: "329",
    rating: "2.7",
    sizesAvailable: ["M", "L", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-top-in-black-cotton-rich-1-898972.jpg",
    category: "Topwear",
    fabric: "cotton",
    color: "black",
    new_arrivals: false,
    reviews: "3.7K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "But First Coffee Top in Blue",
    description:
      "Light grey printed top crafted with premium cotton fabric. Designed wtih round neckline and short sleeves.",
    original_price: "999",
    price: "399",
    rating: "4.5",
    sizesAvailable: ["S", "M", "L", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-printed-top-in-light-grey-100-cotton-937622.jpg",
    category: "Topwear",
    fabric: "cotton",
    color: "blue",
    new_arrivals: true,
    reviews: "79",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Pyjama in Blue",
    description:
      "Blue pyjama crafted with soft crepe fabric. Elasticated waistband & pockets on both sides.",
    original_price: "1299",
    price: "399",
    rating: "1.7",
    sizesAvailable: [],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0186p08-829429.JPG",
    category: "Bottomwear",
    fabric: "crepe",
    color: "blue",
    new_arrivals: false,
    reviews: "187",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Pretty Florals Pyjama in Multicolour",
    description:
      "Multicolour pyjama crafted with soft velour fabric. Designed with floral print all over. Has an elasticated waistband for snug fit. Pockets on both sides.",
    original_price: "2749",
    price: "749",
    rating: "3.5",
    sizesAvailable: ["S", "M", "L"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0139a19-479514.jpg",
    category: "Bottomwear",
    fabric: "cotton",
    color: "multi",
    new_arrivals: false,
    reviews: "978",
    in_stock: false,
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Cuffed Joggers in Light Grey",
    description:
      "Light grey joggers crafted with super-soft loop knit fleece fabric. Has an elasticated waistband with a fastening drawstring. Cuffed leg openings for comfort fit. Has pockets on both sides.",
    original_price: "1899",
    price: "569",
    rating: "3.2",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-cuffed-joggers-in-light-grey-loop-knit-683076.jpg",
    category: "Bottomwear",
    fabric: "knitted",
    color: "grey",
    new_arrivals: true,
    reviews: "87",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Wide Leg Pants in Maroon",
    description:
      "Maroon wide leg pants crafted with soft rayon fabric. Has a button closure & loops at the waist. Pockets on both sides.",
    original_price: "1999",
    price: "592",
    rating: "2.1",
    sizesAvailable: ["XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0192p09-476683.jpg",
    category: "Bottomwear",
    fabric: "rayon",
    color: "maroon",
    new_arrivals: true,
    reviews: "3.6K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Print Me Pretty Boxer Shorts in White",
    description:
      "White boxer shorts crafted with soft 100% cotton fabric. Designed with heart print all over. Has an elasticated waist for a snug fit. Has pockets on each side.",
    original_price: "1099",
    price: "399",
    rating: "3.5",
    sizesAvailable: ["S", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0174k18-452064.jpg",
    category: "Bottomwear",
    fabric: "cotton",
    color: "white",
    new_arrivals: true,
    reviews: "3K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Sassy Stripes Boxer Shorts in White",
    description:
      "White & black striped boxer shorts crafted with soft & premium 100% cotton fabric. Has an elasticated waist for a snug fit. Pockets on each side.",
    original_price: "999",
    price: "399",
    rating: "3.8",
    sizesAvailable: ["S", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0174y18-911802.jpg",
    category: "Bottomwear",
    fabric: "cotton",
    color: "white",
    new_arrivals: false,
    reviews: "156",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Print Me Pretty Pyjama in Red",
    description:
      "Red pyjama crafted with soft rayon fabric. Designed with triangle print all over. Elasticated waistband for a snug fit. Pockets on both sides.",
    original_price: "2049",
    price: "772",
    rating: "3.5",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-lb0179e04-309727.jpg",
    category: "Bottomwear",
    fabric: "rayon",
    color: "red",
    new_arrivals: true,
    reviews: "546",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Print Me Pretty Kaftan Top & Pyjama in Sky Blue",
    description:
      "Sky blue printed kaftan top & pyjama set crafted with soft & premium 100% cotton fabric. Kaftan top has a V-neckine & short sleeves. Has an elasticated underbust with tie-up detail. Matching pyjama has an elasticated waistband for snug fit. Pockets on both side.",
    original_price: "2599",
    price: "1698",
    rating: "1.9",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0592r03-589836.jpg",
    category: "Loungewear",
    fabric: "cotton",
    color: "blue",
    new_arrivals: true,
    reviews: "77",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Button Down Shirt & Pyjama Set in Soft Pink",
    description:
      "Soft pink button down shirt & pyjama set crafted with soft cotton modal fabric. Shirt with full button placket & short sleeves. Has frilled edges at the sleeves & hemline. Matching pyjama with elasticated waistband & drawstring fastening for a snug fit. Pockets on both sides.",
    original_price: "2499",
    price: "1999",
    rating: "4.1",
    sizesAvailable: ["S", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-button-me-up-shirt-pyjama-set-in-soft-pink-modal-759952.jpg",
    category: "Loungewear",
    fabric: "modal",
    color: "pink",
    new_arrivals: false,
    reviews: "59",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Top & Pyjama Set in Baby Pink",
    description:
      "Baby pink top and pyjama set crafted with soft & cosy velour fabric. Top has a round neck & full sleeves with elasticated cuffs. Matching pyjama with soft elastic at the waistband. Pockets on both sides.",
    original_price: "3499",
    price: "2799",
    rating: "2.5",
    sizesAvailable: ["S", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-top-pyjama-set-in-baby-pink-velour-326603.jpg",
    category: "Loungewear",
    fabric: "velour",
    color: "pink",
    new_arrivals: false,
    reviews: "59",
    delivery_time: "4",
  },
  {
    _id: uuid(),
    title: "Chic Basic Top, Pyjama & Shrug Set in Black",
    description:
      "Black top, pyjama & shrug set crafted with soft & cosy velour fabric. Cami top with a round neck. Comes with a matching shrug that has full sleeves. Pyjama with an elasticated waistband for a snug fit. Has pockets on both sides.",
    original_price: "3299",
    price: "2799",
    rating: "3.9",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-top-pyjama-shrug-set-in-black-velour-572703.jpg",
    category: "Loungewear",
    fabric: "velour",
    color: "black",
    new_arrivals: true,
    reviews: "5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Button Down Shirt & Pyjama Set in Dusky Pink",
    description:
      "Dusky pink button-down shirt & pyjama set crafted with smooth rayon fabric. Has a full button placket & 3/4 sleeves. Matching pyjama with elasticated waistband for snug fit. Pockets on both sides.",
    original_price: "999",
    price: "789",
    rating: "1.9",
    sizesAvailable: ["S", "L", "XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-button-me-up-shirt-pyjama-set-in-dusky-pink-satin-426522.jpg",
    category: "Loungewear",
    fabric: "rayon",
    color: "pink",
    new_arrivals: false,
    reviews: "270",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Sassy Stripes 3 Piece Set- Top, Pyjama & Robe in Maroon",
    description:
      "Top, pyjama, and robe set crafted with rayon fabric. Maroon striped top designed with a round neck and 3/4 sleeves. Matching pyjama with an elasticated waistband for a snug fit. Pockets on both sides. Comes with a stylish robe with 3/4 sleeves and tie-ups.",
    original_price: "2499",
    price: "1007",
    rating: "3.5",
    sizesAvailable: ["S", "L", "XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-sassy-stripes-top-pyjama-robe-set-in-maroon-rayon-513226.jpg",
    category: "Loungewear",
    fabric: "rayon",
    color: "maroon",
    new_arrivals: false,
    reviews: "3.8K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Cotton Rich Pyjama In Black",
    description:
      "Made using the soft and breathable rich-cotton fabric for maximum ease and comfort all day long, this stylish pyjama comes with soft and flexible elastic band at the waistline to avoid slide down and provide a better and comfortable fit. Its fabric gives a smooth feel on the skin. The pyjama is coloured in black. Also, it has pockets on both sides.",
    original_price: "899",
    price: "349",
    rating: "1.5",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-cotton-rich-pyjama-1-729815.jpg",
    category: "Loungewear",
    fabric: "cotton",
    color: "black",
    new_arrivals: true,
    reviews: "2K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Fish Print Top in Sky Blue & Pyjama in Maroon",
    description:
      "Top & pyjama set crafted with soft & premium 100% cotton fabric. Sky blue top designed with fish print at the chest. Has a round neckline with 3/4th sleeves. Maroon pyjama designed with fish print all over. Has an elasticated waistband for snug fit. Pockets on both sides.",
    original_price: "3749",
    price: "855",
    rating: "2.1",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0680a08-624984.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "blue",
    new_arrivals: true,
    reviews: "200",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Animal Print Top & Capri Set in Olive Green",
    description:
      "Olive green top & capri set crafted with soft rayon fabric. Designed with animal print all over. Top has a round neck & short sleeves with frilled edges. Matching pyjama with frilled hems. Has an elasticated waistband for snug fit. Pockets on both sides.",
    original_price: "3249",
    price: "735",
    rating: "3.1",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0696p17-542461.jpg",
    category: "Nightsuit",
    fabric: "rayon",
    color: "green",
    new_arrivals: false,
    reviews: "178",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Print Me Pretty Button Down Shirt & Pyjama Set in Pink",
    description:
      "Lilac button down shirt & pyjama set crafted with premium 100% cotton fabric. Designed with bee & rainbow print all over. Shirt has 3/4th sleeves & a full button placket. Matching pyjama with soft elastic at the waistband & drawstring fastening for a snug fit. Pockets on both sides.",
    original_price: "4099",
    price: "932",
    rating: "3.1",
    sizesAvailable: ["S", "M", "L", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-print-me-pretty-button-down-shirt-pyjama-set-in-lilac-100-cotton-188179.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "pink",
    new_arrivals: false,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Graphic & Text Print Top in Yellow & Chic Basic Joggers in Purple",
    description:
      "Top & pyjama set crafted with soft & premium 100% cotton fabric. Yellow top designed with graphic & text print at the front. Has a round neckline with contrast piping & 3/4th sleeves. Purple joggers with elasticated waistband & drawstring fastening for a snug fit. Pockets on both sides.",
    original_price: "3699",
    price: "836",
    rating: "2.1",
    sizesAvailable: ["S", "M", "L", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0581p07-279215.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "yellow",
    new_arrivals: false,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Print Me Pretty Top in Sky Blue & Chic Basic Shorts in Baby Pink",
    description:
      "Top & shorts set crafted with soft & premium 100% cotton fabric. Baby blue top designed with duck & text print at the front. Has a round neckline & 3/4th sleeves. Baby pink shorts with elasticated waistband & drawstring fastening for a snug fit. Pockets on both sides.",
    original_price: "2949",
    price: "668",
    rating: "1.9",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-print-me-pretty-top-in-baby-blue-chic-basic-shorts-in-baby-pink-100-cotton-909764.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "blue",
    new_arrivals: false,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Butterfly Print Top & Shorts Set in Yellow",
    description:
      "Yellow top & shorts set crafted with soft & premium 100% cotton fabric. Top has round neck & short sleeves with lettuce hem edges. Designed with butterfly print on one side. Matching shorts with elasticated waistband for a snug fit. Designed with butterfly print all over & has lettuce hemline. Pockets on both sides.",
    original_price: "2499",
    price: "549",
    rating: "4.5",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0555a02-397620.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "yellow",
    new_arrivals: false,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Dot Print Button Down Shirt & Pyjama Set in Baby Pink",
    description:
      "Baby pink button down shirt & pyjama set crafted with soft & premium 100% fabric. Designed with multicolour dot print all over. Has a full button placket & short sleeves. Matching pyjama with elasticated waistband for a snug fit. Pockets on both sides.",
    original_price: "4099",
    price: "932",
    rating: "3.5",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0645d22-106857.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "pink",
    new_arrivals: false,
    reviews: "200",
    delivery_time: "2",
  },
  {
    _id: uuid(),
    title: "Heart Print Cami Top & Shorts Set in White",
    description:
      "White cami top & shorts set crafted with premium 100% cotton fabric. Designed with heart print all over. Top has round neckline. Has scalloped lace along the neckline & under the armholes. Has adjustable black spaghetti straps. Matching shorts has an elasticated waistband for snug fit. Has scalloped lace on the hemline. Pockets on both sides.",
    original_price: "2499",
    price: "489",
    rating: "3.9",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ls0516g18-168815.jpg",
    category: "Nightsuit",
    fabric: "cotton",
    color: "white",
    new_arrivals: true,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Pretty Florals Long Nighty in Maroon",
    description:
      "Maroon long nightdress crafted with soft cotton rich fabric. Designed with white & green floral print. Has a round neck with a short button placket. Designed with 3/4 sleeves and a ruffled bottom.",
    original_price: "2099",
    price: "811",
    rating: "3.1",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ns1359p09-444585.jpg",
    category: "Nightdress",
    fabric: "cotton",
    color: "maroon",
    new_arrivals: true,
    reviews: "2.5K",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Leaf Print Long Kaftan in Black",
    description:
      "Black kaftan crafted with smooth crepe fabric. Designed with red leaf print all over. Has an elasticated underbust with tie-ups for a comfy snug fit. Has a V-neckline & short sleeves.",
    original_price: "1899",
    price: "851",
    rating: "3.1",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ns0865e13-868120.jpg",
    category: "Nightdress",
    fabric: "crepe",
    color: "black",
    new_arrivals: true,
    reviews: "271",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Pretty Florals Short Night Dress in Grey",
    description:
      "Grey short night dress crafted with soft & premium 100% cotton fabric. Has a round neck and short sleeves with ruffled hems. Designed with white & peach floral print all over. Has pockets on both sides.",
    original_price: "999",
    price: "799",
    rating: "1.5",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-pretty-florals-short-nightdress-in-grey-100-cotton-947912.jpg",
    category: "Nightdress",
    fabric: "cotton",
    color: "grey",
    new_arrivals: false,
    reviews: "21",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Tie-Dye Print Short Night Dress in Multicolour",
    description:
      "Multicolour short nightdress crafted with soft & premium 100% cotton fabric. Designed with blue, pink & yellow tie-dye print all over. Has deep U-neckine, adjustable shoulder straps & tie-up waistbelt. Pockets on both sides.",
    original_price: "1199",
    price: "999",
    rating: "3.1",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-tie-dye-print-short-night-dress-in-multicolour-100-cotton-274925.jpg",
    category: "Nightdress",
    fabric: "cotton",
    color: "multi",
    new_arrivals: false,
    reviews: "841",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Giraffe Print Short Night Dress in Sky Blue",
    description:
      "Sky blue short night dress crafted with soft & premium 100% cotton fabric. Designed with giraffe print all over. Has a round neckline, short button placket & a chest pocket. Racerback for added appeal. Pocket on both sides.",
    original_price: "1899",
    price: "489",
    rating: "3.1",
    sizesAvailable: ["S", "XL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-giraffe-print-short-night-dress-in-sky-blue-100-cotton-893875.jpg",
    category: "Nightdress",
    fabric: "cotton",
    color: "blue",
    new_arrivals: false,
    reviews: "631",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Chic Basic Short Nighty & Cactus Print Robe Set in White",
    description:
      "White robe & baby pink short nighty set crafted with luxurious satin fabric. Short nighty has V-neckline & armhole embellished with lace. Has spaghetti straps & ruching under the bust. The robe has a pink tie-up belt at the waistline & 3/4th sleeves. Designed with green cactus print.",
    original_price: "1699",
    price: "875",
    rating: "3.1",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-ns1145r18-905361.jpg",
    category: "Nightdress",
    fabric: "satin",
    color: "white",
    new_arrivals: true,
    reviews: "21",
    delivery_time: "3",
  },
  {
    _id: uuid(),
    title: "Pretty Florals Robe in Rust Brown",
    description:
      "Rust brown robe crafted with luxurious satin fabric. Has 3/4th floral print sleeves & upper half back. Comes with a matching floral print fabric belt.",
    original_price: "1199",
    price: "899",
    rating: "4.8",
    sizesAvailable: ["S", "M", "L", "XL", "XXL", "3XL"],
    image:
      "https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-chic-basic-robe-short-nighty-set-in-rust-brown-satin-896300.jpg",
    category: "Nightdress",
    fabric: "satin",
    color: "brown",
    new_arrivals: true,
    reviews: "3.9K",
    delivery_time: "3",
  },
];