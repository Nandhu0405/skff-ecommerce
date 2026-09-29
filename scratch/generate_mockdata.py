import json

# Product generator script for 120 SKFF items (60 Flavours, 60 Fragrances)

flavours = [
    # --- A. Dairy Flavours (10) ---
    {
        "id": "flv-d-01", "sku": "SKFF-FLV-DM01", "name": "Vanilla Milk Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Smooth, creamy fresh milk profile infused with natural Madagascan vanilla notes.",
        "detailedDescription": "Specially created for flavoured milks, milkshakes, ice cream bases, and dairy desserts. Delivers a comforting home-made vanilla milk taste profile.",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800",
        "price": 650.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 34, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Flavoured Milk", "Ice Cream", "Yogurt", "Milkshakes"]
    },
    {
        "id": "flv-d-02", "sku": "SKFF-FLV-DM02", "name": "Creamy Milk Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Rich boiled milk notes with authentic lactonic warmth and high mouthfeel impact.",
        "detailedDescription": "Enhances dairy richness in reduced-fat milk, tea whiteners, condensed milk applications, and Indian traditional sweets.",
        "image": "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=800",
        "price": 580.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 22, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Dairy Drinks", "Confectionery", "Tea & Coffee Whiteners"]
    },
    {
        "id": "flv-d-03", "sku": "SKFF-FLV-DM03", "name": "Cultured Butter Essence",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Butter",
        "shortDescription": "Authentic cultured European butter profile with savory diacetyl top notes.",
        "detailedDescription": "Formulated for cookies, spreads, bakery fats, and snack seasonings. High thermal stability for oven baking.",
        "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=800",
        "price": 720.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 40, "availability": "In Stock",
        "packSizes": ["1 kg Container", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Biscuits", "Margarine", "Popcorn Coating", "Bakery Fat"]
    },
    {
        "id": "flv-d-04", "sku": "SKFF-FLV-DM04", "name": "Fresh Cream Profile",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Velvety whipping cream flavor with delicate sweet butterfat aroma.",
        "detailedDescription": "Ideal for desserts, cake frostings, cream fillings, soups, and ready-to-serve gourmet sauces.",
        "image": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800",
        "price": 690.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 18, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Whipping Cream", "Cake Fillings", "Pasta Sauces"]
    },
    {
        "id": "flv-d-05", "sku": "SKFF-FLV-DM05", "name": "Condensed Milk Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Rich caramelized cooked milk profile with deep sugary sweetness.",
        "detailedDescription": "Perfect for Indian mithai, fudge, caramel candies, ice cream ribbons, and specialty coffee drinks.",
        "image": "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&q=80&w=800",
        "price": 610.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 29, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Sweets & Mithai", "Coffee Beverages", "Confectionery"]
    },
    {
        "id": "flv-d-06", "sku": "SKFF-FLV-DM06", "name": "Milk Powder Flavor",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Clean spray-dried skimmed milk powder taste with authentic dairy notes.",
        "detailedDescription": "Enhances dairy perception in chocolate coatings, protein bars, infant formula alternatives, and premixes.",
        "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
        "price": 540.00, "quoteRequired": False, "rating": 4.6, "reviewsCount": 15, "availability": "In Stock",
        "packSizes": ["5 kg Canister", "25 kg Drum"], "moq": "5 kg",
        "applications": ["Premixes", "Chocolate Fillings", "Nutritional Powders"]
    },
    {
        "id": "flv-d-07", "sku": "SKFF-FLV-DM07", "name": "Cheese Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Cheese & Savoury",
        "shortDescription": "Sharp mature cheddar cheese profile with savory tangy richness.",
        "detailedDescription": "Used in potato chips seasonings, extruded corn snacks, cheese dips, crackers, and bakery glazes.",
        "image": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&q=80&w=800",
        "price": 850.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 48, "availability": "In Stock",
        "packSizes": ["1 kg Pouch", "5 kg Drum", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Potato Chips", "Cheese Sauces", "Crackers", "Extruded Snacks"]
    },
    {
        "id": "flv-d-08", "sku": "SKFF-FLV-DM08", "name": "Yogurt Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Fresh lactic acid tang with authentic fermented yogurt top note.",
        "detailedDescription": "Delivers refreshing tartness in fruit yogurts, lassi drinks, candy coatings, and probiotic beverages.",
        "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
        "price": 620.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 21, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Lassi", "Fruit Yogurts", "Hard Candies"]
    },
    {
        "id": "flv-d-09", "sku": "SKFF-FLV-DM09", "name": "Ghee Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Butter",
        "shortDescription": "Traditional nutty roasted clarified butter aroma with rich golden impact.",
        "detailedDescription": "Engineered for bakery fats, sweets, snacks, and cooking oils to provide authentic Indian desi ghee aroma.",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
        "price": 890.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 55, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Barrel"], "moq": "1 kg",
        "applications": ["Indian Sweets", "Bakery Fats", "Snack Frying Oils"]
    },
    {
        "id": "flv-d-10", "sku": "SKFF-FLV-DM10", "name": "Buttermilk Flavour",
        "category": "FLAVOURS", "subcategory": "Dairy Flavours", "flavourType": "Dairy & Milk",
        "shortDescription": "Cooling spiced chhaas profile with subtle cumin and lactic freshness.",
        "detailedDescription": "Designed for instant drink mixes, ready-to-drink spiced buttermilk, and savory dips.",
        "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
        "price": 590.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 19, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["RTD Chhaas", "Instant Powder Mixes", "Dips"]
    },

    # --- B. Bakery & Confectionery Flavours (15) ---
    {
        "id": "flv-b-01", "sku": "SKFF-FLV-BK01", "name": "Chocolate Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Chocolate & Cocoa",
        "shortDescription": "Classic milk chocolate taste profile with sweet cocoa and vanillin balance.",
        "detailedDescription": "Universal chocolate flavor suitable for biscuits, cakes, syrups, ice cream coatings, and milk drinks.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
        "price": 750.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 44, "availability": "In Stock",
        "packSizes": ["1 kg Container", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Cookies", "Milkshakes", "Chocolate Syrups"]
    },
    {
        "id": "flv-b-02", "sku": "SKFF-FLV-BK02", "name": "Dark Chocolate Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Chocolate & Cocoa",
        "shortDescription": "Intense roasted 70% dark cocoa profile with pleasing bitter-sweet finish.",
        "detailedDescription": "Formulated for high-cocoa pastries, dark chocolate truffles, protein powders, and gourmet cookies.",
        "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800",
        "price": 820.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 60, "availability": "In Stock",
        "packSizes": ["1 kg Container", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Dark Chocolates", "Gourmet Cakes", "Nutritional Bars"]
    },
    {
        "id": "flv-b-03", "sku": "SKFF-FLV-BK03", "name": "White Chocolate Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Chocolate & Cocoa",
        "shortDescription": "Smooth cocoa butter aroma blended with sweet milky vanilla cream.",
        "detailedDescription": "Delivers luxurious white chocolate mouthfeel in confectionery coatings, pralines, and dessert toppings.",
        "image": "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=800",
        "price": 780.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 27, "availability": "In Stock",
        "packSizes": ["1 kg Container", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Pralines", "Donut Glazes", "White Chocolate Drinks"]
    },
    {
        "id": "flv-b-04", "sku": "SKFF-FLV-BK04", "name": "Caramel Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Caramel & Sweet",
        "shortDescription": "Rich burnt sugar caramel notes with buttery warm depth.",
        "detailedDescription": "Excellent for coffee syrups, candy chews, ice cream swirls, waffles, and bakery toppings.",
        "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
        "price": 680.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 38, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Coffee Syrups", "Chewy Candies", "Bakery Toppings"]
    },
    {
        "id": "flv-b-05", "sku": "SKFF-FLV-BK05", "name": "Butterscotch Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Caramel & Sweet",
        "shortDescription": "Golden brown sugar and melted butter profile with toasted vanilla notes.",
        "detailedDescription": "Popular across Indian ice creams, hard boiled candies, cookies, and dessert syrups.",
        "image": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800",
        "price": 710.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 51, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Ice Cream", "Hard Candies", "Cakes"]
    },
    {
        "id": "flv-b-06", "sku": "SKFF-FLV-BK06", "name": "Hazelnut Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Nut & Coffee",
        "shortDescription": "Toasted Gianduja hazelnut aroma with rich nutty warmth.",
        "detailedDescription": "Pairs magnificently with chocolate spreads, pralines, specialty coffees, and wafer fillings.",
        "image": "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&q=80&w=800",
        "price": 920.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 43, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Nutella Spreads", "Coffee Flavoring", "Wafers"]
    },
    {
        "id": "flv-b-07", "sku": "SKFF-FLV-BK07", "name": "Almond Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Nut & Coffee",
        "shortDescription": "Sweet marzipan almond profile with delicate benzaldehyde top note.",
        "detailedDescription": "Ideal for macarons, badam milk drinks, marzipan candies, pastries, and biscotti.",
        "image": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=800",
        "price": 840.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 30, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Badam Milk", "Pastries", "Marzipan"]
    },
    {
        "id": "flv-b-08", "sku": "SKFF-FLV-BK08", "name": "Brownie Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Bakery & Cake",
        "shortDescription": "Fudgy baked chocolate brownie taste with warm cakey crust notes.",
        "detailedDescription": "Captures the fresh-out-of-oven fudge brownie experience for protein powders, ice creams, and cookies.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
        "price": 790.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 35, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Protein Shakes", "Ice Cream Swirls", "Biscuits"]
    },
    {
        "id": "flv-b-09", "sku": "SKFF-FLV-BK09", "name": "Cookie Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Bakery & Cake",
        "shortDescription": "Golden baked oat & sugar cookie aroma with subtle vanilla dough notes.",
        "detailedDescription": "Designed for bakery doughs, ice cream inclusions, chocolate bars, and dessert toppings.",
        "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800",
        "price": 730.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 24, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Cookies", "Chocolate Bars", "Dessert Premixes"]
    },
    {
        "id": "flv-b-10", "sku": "SKFF-FLV-BK10", "name": "Cake Batter Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Bakery & Cake",
        "shortDescription": "Sweet raw yellow cake batter aroma with rich buttery vanilla creaminess.",
        "detailedDescription": "Nostalgic cake batter profile popular in birthday cake ice creams, milkshakes, and sweet snacks.",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        "price": 760.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 29, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Birthday Cake Ice Cream", "Milkshakes", "Donut Frosting"]
    },
    {
        "id": "flv-b-11", "sku": "SKFF-FLV-BK11", "name": "Marshmallow Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Caramel & Sweet",
        "shortDescription": "Fluffy powdery vanilla sugar marshmallow scent with delicate spun-sugar sweetness.",
        "detailedDescription": "Adds soft marshmallow sweetness to hot cocoa mixes, cereals, chewing gums, and candies.",
        "image": "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=800",
        "price": 690.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 19, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Hot Chocolate", "Gummy Candies", "Cereals"]
    },
    {
        "id": "flv-b-12", "sku": "SKFF-FLV-BK12", "name": "Toffee Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Caramel & Sweet",
        "shortDescription": "English butter toffee flavor with rich cooked milk sugar depth.",
        "detailedDescription": "Ideal for high-boil toffee candies, chocolate center fillings, and dessert syrups.",
        "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
        "price": 720.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 33, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Toffee Candies", "Chocolate Fillings", "Syrups"]
    },
    {
        "id": "flv-b-13", "sku": "SKFF-FLV-BK13", "name": "Coffee Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Nut & Coffee",
        "shortDescription": "Roasted Arabica coffee bean aroma with balanced bitterness and dark roast depth.",
        "detailedDescription": "Essential for cold coffee drinks, tiramisu, coffee chocolates, candies, and liqueurs.",
        "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
        "price": 880.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 58, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Cold Coffee RTD", "Tiramisu", "Coffee Candies"]
    },
    {
        "id": "flv-b-14", "sku": "SKFF-FLV-BK14", "name": "Mocha Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Nut & Coffee",
        "shortDescription": "Harmonious blend of rich espresso coffee and dark Dutch cocoa.",
        "detailedDescription": "Used in mocha frappes, chocolate-coffee cookies, dessert sauces, and dairy drinks.",
        "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800",
        "price": 850.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 41, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Mocha Frappes", "Baked Goods", "Ice Cream"]
    },
    {
        "id": "flv-b-15", "sku": "SKFF-FLV-BK15", "name": "Praline Flavour",
        "category": "FLAVOURS", "subcategory": "Bakery & Confectionery Flavours", "flavourType": "Caramel & Sweet",
        "shortDescription": "Caramelized pecan and nut praline profile with creamy sweet finish.",
        "detailedDescription": "Delivers sophisticated gourmet nut notes in premium chocolates, ice creams, and pastries.",
        "image": "https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800",
        "price": 910.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 26, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Praline Chocolates", "Gourmet Desserts", "Pastries"]
    },

    # --- C. Fruit Flavours (20) ---
    {
        "id": "flv-f-01", "sku": "SKFF-FLV-FT01", "name": "Mango Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Sweet juicy tropical mango taste profile with ripe aromatic notes.",
        "detailedDescription": "Universal mango flavor for candies, jellies, carbonated drinks, juices, and ice pops.",
        "image": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=800",
        "price": 680.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 52, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Juices", "Candies", "Carbonated Soft Drinks"]
    },
    {
        "id": "flv-f-02", "sku": "SKFF-FLV-FT02", "name": "Alphonso Mango Nectar",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "authentic Ratnagiri Alphonso mango nectar profile with floral honey undertones.",
        "detailedDescription": "Premium mango flavor for high-end juices, RTD nectars, yogurts, and fruit bars.",
        "image": "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&q=80&w=800",
        "price": 850.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 68, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Premium Juices", "Smoothies", "Yogurt Drinks"]
    },
    {
        "id": "flv-f-03", "sku": "SKFF-FLV-FT03", "name": "Strawberry Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Ripe red garden strawberry flavor with sweet-tart berry top notes.",
        "detailedDescription": "Classic berry flavor for milkshakes, yogurts, jellies, hard candies, and bakery fillings.",
        "image": "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=800",
        "price": 640.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 45, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Flavoured Milk", "Jellies", "Chewing Gum"]
    },
    {
        "id": "flv-f-04", "sku": "SKFF-FLV-FT04", "name": "Blueberry Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Juicy wild blueberry taste with subtle botanical skin aroma.",
        "detailedDescription": "Popular in muffins, fruit drinks, cereal bars, yogurts, and effervescent health tablets.",
        "image": "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80&w=800",
        "price": 790.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 39, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Muffins", "Nutritional Drinks", "Fruit Syrups"]
    },
    {
        "id": "flv-f-05", "sku": "SKFF-FLV-FT05", "name": "Raspberry Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Sweet and vibrant red raspberry profile with characteristic tartness.",
        "detailedDescription": "Adds bright berry notes to carbonated beverages, sorbets, hard candies, and chocolate pairings.",
        "image": "https://images.unsplash.com/photo-1577069861033-55d04ace4ef0?auto=format&fit=crop&q=80&w=800",
        "price": 760.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 28, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Sorbets", "Sparkling Water", "Hard Candies"]
    },
    {
        "id": "flv-f-06", "sku": "SKFF-FLV-FT06", "name": "Blackcurrant Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Deep aromatic European blackcurrant with rich winey berry undertones.",
        "detailedDescription": "Extremely popular in soft drinks, fruit cordials, gummies, cough syrups, and hard candies.",
        "image": "https://images.unsplash.com/photo-1568656490369-425020ab220d?auto=format&fit=crop&q=80&w=800",
        "price": 810.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 47, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Fruit Cordials", "Gummies", "Cough Drops"]
    },
    {
        "id": "flv-f-07", "sku": "SKFF-FLV-FT07", "name": "Apple Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Sweet crisp Fuji red apple taste profile with fresh orchard aroma.",
        "detailedDescription": "Clear apple flavor for fruit juices, sparkling ciders, hard candies, and bakery jellies.",
        "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=800",
        "price": 630.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 25, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Juices", "Ciders", "Candy"]
    },
    {
        "id": "flv-f-08", "sku": "SKFF-FLV-FT08", "name": "Green Apple Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Zesty sour Granny Smith green apple profile with vibrant mouthwatering acidity.",
        "detailedDescription": "Famous for sour candy coatings, energy drinks, cocktails, and chewing gums.",
        "image": "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=800",
        "price": 670.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 42, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Sour Candies", "Energy Drinks", "Chewing Gum"]
    },
    {
        "id": "flv-f-09", "sku": "SKFF-FLV-FT09", "name": "Pineapple Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Juicy sweet tropical Queen pineapple with sunny esters and citrus tang.",
        "detailedDescription": "Used in tropical drink blends, fruit cocktails, upside-down cakes, and gummy bears.",
        "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=800",
        "price": 650.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 33, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Tropical Drinks", "Gummies", "Cakes"]
    },
    {
        "id": "flv-f-10", "sku": "SKFF-FLV-FT10", "name": "Orange Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Juicy sweet Valencia orange taste with cold-pressed peel essential oil notes.",
        "detailedDescription": "Essential for carbonated soft drinks, RTD orange juices, effervescent tablets, and candies.",
        "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800",
        "price": 690.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 59, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Soft Drinks", "Effervescent Tablets", "Hard Candies"]
    },
    {
        "id": "flv-f-11", "sku": "SKFF-FLV-FT11", "name": "Lemon Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Crisp zesty yellow lemon profile with fresh peel oil brightness.",
        "detailedDescription": "Formulated for lemonade drinks, bakery biscuits, clearing syrups, and tea infusions.",
        "image": "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800",
        "price": 620.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 31, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Lemonade", "Biscuits", "Iced Tea"]
    },
    {
        "id": "flv-f-12", "sku": "SKFF-FLV-FT12", "name": "Sweet Lime Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Mild sweet Mosambi citrus profile with low acidity and fragrant juice notes.",
        "detailedDescription": "Traditional Indian sweet lime flavor for juices, nectars, fruit candies, and wellness drinks.",
        "image": "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=800",
        "price": 660.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 36, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Mosambi Juice", "Candies", "Flavored Water"]
    },
    {
        "id": "flv-f-13", "sku": "SKFF-FLV-FT13", "name": "Watermelon Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Refreshingly sweet summer red watermelon with subtle green rind freshness.",
        "detailedDescription": "Perfect for summer hydration drinks, ice lollies, chewing gums, and hard candies.",
        "image": "https://images.unsplash.com/photo-1587049352847-81a56d773cae?auto=format&fit=crop&q=80&w=800",
        "price": 640.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 27, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Ice Lollies", "Sports Drinks", "Chewing Gum"]
    },
    {
        "id": "flv-f-14", "sku": "SKFF-FLV-FT14", "name": "Peach Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Juicy sweet yellow peach taste with velvety nectar undertones.",
        "detailedDescription": "Widely used in peach iced teas, fruit nectars, yogurts, gummies, and bakery jams.",
        "image": "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&q=80&w=800",
        "price": 750.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 44, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Peach Iced Tea", "Yogurts", "Gummies"]
    },
    {
        "id": "flv-f-15", "sku": "SKFF-FLV-FT15", "name": "Lychee Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Delicate floral sweet Asian pink lychee profile with juicy translucence.",
        "detailedDescription": "High-demand flavor for fruit juices, jelly drinks, bubble teas, and tropical candies.",
        "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80&w=800",
        "price": 820.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 61, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Bubble Tea", "Jelly Cups", "Fruit Juices"]
    },
    {
        "id": "flv-f-16", "sku": "SKFF-FLV-FT16", "name": "Guava Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Sweet ripe pink guava taste with authentic tropical pulp aroma.",
        "detailedDescription": "Famous for chilli-guava spiced drinks, tropical nectars, hard candies, and ice creams.",
        "image": "https://images.unsplash.com/photo-1536511135764-884826b5275e?auto=format&fit=crop&q=80&w=800",
        "price": 710.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 37, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Chilli Guava Drinks", "Fruit Nectars", "Candies"]
    },
    {
        "id": "flv-f-17", "sku": "SKFF-FLV-FT17", "name": "Passion Fruit Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Exotic aromatic purple passion fruit with bright tangy complexity.",
        "detailedDescription": "Enhances tropical mocktails, artisan sodas, sorbets, and fruit tea formulations.",
        "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=800",
        "price": 880.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 32, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Mocktails", "Artisan Sodas", "Sorbets"]
    },
    {
        "id": "flv-f-18", "sku": "SKFF-FLV-FT18", "name": "Pomegranate Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Tart sweet ruby red pomegranate arils with astringent fruit skin depth.",
        "detailedDescription": "Formulated for health beverages, antioxidant juices, gummies, and syrup drizzles.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 830.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 23, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Health Juices", "Nutraceutical Gelling", "Syrups"]
    },
    {
        "id": "flv-f-19", "sku": "SKFF-FLV-FT19", "name": "Banana Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Sweet ripe Cavendish banana profile with smooth creamy ester warmth.",
        "detailedDescription": "Popular in banana milkshakes, baby food premixes, bakery breads, and ice pops.",
        "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
        "price": 600.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 29, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Banana Milkshake", "Banana Bread", "Baby Foods"]
    },
    {
        "id": "flv-f-20", "sku": "SKFF-FLV-FT20", "name": "Grape Flavour",
        "category": "FLAVOURS", "subcategory": "Fruit Flavours", "flavourType": "Fruit & Citrus",
        "shortDescription": "Juicy sweet Concord black grape with characteristic anthranilate aroma.",
        "detailedDescription": "Classic grape flavor for carbonated sodas, hard candies, fruit jellies, and sports hydration.",
        "image": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=800",
        "price": 660.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 34, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Grape Sodas", "Jellies", "Hydration Drinks"]
    },

    # --- D. Beverage & Culinary Flavours (10) ---
    {
        "id": "flv-c-01", "sku": "SKFF-FLV-BC01", "name": "Cola Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Classic effervescent cola profile with citrus oils, nutmeg, and vanilla sparkle.",
        "detailedDescription": "High-impact cola formulation for carbonated soft drinks, cola candies, and ice slushies.",
        "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
        "price": 720.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 53, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Carbonated Cola CSD", "Cola Chews", "Slushies"]
    },
    {
        "id": "flv-c-02", "sku": "SKFF-FLV-BC02", "name": "Lemon Mint Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Refreshing Limonana blend of zesty yellow lemon and crushed garden spearmint.",
        "detailedDescription": "Extremely popular for mojitos, summer coolers, lemon-mint RTD teas, and chewing gums.",
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
        "price": 690.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 48, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Mojito Mixers", "Iced Teas", "Chewing Gum"]
    },
    {
        "id": "flv-c-03", "sku": "SKFF-FLV-BC03", "name": "Ginger Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Fiery spicy ginger root extract with warm aromatic zesty kick.",
        "detailedDescription": "Designed for ginger ale sodas, masala chai blends, digestive candies, and culinary sauces.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 780.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 31, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Ginger Ale", "Masala Chai", "Digestive Lozenge"]
    },
    {
        "id": "flv-c-04", "sku": "SKFF-FLV-BC04", "name": "Cardamom Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Aromatic green Elaichi profile with sweet camphoric spicy elegance.",
        "detailedDescription": "Essential for Indian mithai, tea premixes, kulfi ice creams, and traditional bakery products.",
        "image": "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800",
        "price": 1250.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 65, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Tea Premixes", "Kulfi", "Indian Sweets"]
    },
    {
        "id": "flv-c-05", "sku": "SKFF-FLV-BC05", "name": "Saffron Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Royal Kashmiri Kesar profile with warm golden floral leather notes.",
        "detailedDescription": "Prestige flavor for Kesar-Badam milks, biryani aromas, luxury ice creams, and royal sweets.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 1650.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 72, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Kesar Milk", "Royal Sweets", "Biryani Essence"]
    },
    {
        "id": "flv-c-06", "sku": "SKFF-FLV-BC06", "name": "Rose Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Sweet fragrant Damask Gulab water profile with gentle floral nectar notes.",
        "detailedDescription": "Popular in Rooh Afza style sherbets, faloodas, Turkish delights, rasgullas, and sodas.",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
        "price": 750.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 40, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Rose Sherbet", "Falooda", "Turkish Delight"]
    },
    {
        "id": "flv-c-07", "sku": "SKFF-FLV-BC07", "name": "Coconut Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Sweet fresh coconut water and grated coconut meat profile with lactonic richness.",
        "detailedDescription": "Used in pina coladas, coconut candies, bakery cookies, curry bases, and hydration drinks.",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
        "price": 680.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 33, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Pina Colada", "Coconut Biscuits", "Coconut Water Drinks"]
    },
    {
        "id": "flv-c-08", "sku": "SKFF-FLV-BC08", "name": "Mint Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Cooling mint sensation with crisp garden peppermint and menthol breeze.",
        "detailedDescription": "Ideal for breath mints, chocolates, cooling beverages, dental pastes, and chewing gums.",
        "image": "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&q=80&w=800",
        "price": 640.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 37, "availability": "In Stock",
        "packSizes": ["1 kg Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Breath Mints", "Mint Chocolates", "Chewing Gum"]
    },
    {
        "id": "flv-c-09", "sku": "SKFF-FLV-BC09", "name": "Masala Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Zesty Indian Chat Masala spice blend with cumin, black salt, and coriander notes.",
        "detailedDescription": "Formulated for snack seasonings, spicy soda drinks (Masala Thums), potato chips, and instant noodles.",
        "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        "price": 790.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 54, "availability": "In Stock",
        "packSizes": ["1 kg Pouch", "5 kg Drum", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Masala Soda", "Potato Chips", "Instant Noodles"]
    },
    {
        "id": "flv-c-10", "sku": "SKFF-FLV-BC10", "name": "Smoky Barbecue Flavour",
        "category": "FLAVOURS", "subcategory": "Beverage & Culinary Flavours", "flavourType": "Beverage & Spice",
        "shortDescription": "Wood-smoked hickory BBQ profile with tangy tomato, garlic, and brown sugar notes.",
        "detailedDescription": "Essential for potato chips, roasted nuts, extruded corn snacks, plant-based meats, and sauces.",
        "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
        "price": 820.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 46, "availability": "In Stock",
        "packSizes": ["1 kg Pouch", "5 kg Drum", "25 kg Drum"], "moq": "1 kg",
        "applications": ["BBQ Chips", "Roasted Almonds", "Sauces"]
    }
]

fragrances = [
    # --- A. Floral Fragrances (12) ---
    {
        "id": "frg-fl-01", "sku": "SKFF-FRG-FL01", "name": "Rose Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral",
        "shortDescription": "Classic Damask rose bouquet with dewy petal freshness and velvet sillage.",
        "detailedDescription": "Crafted for fine perfumery, body lotions, luxury soaps, body mists, and scented candles.",
        "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
        "price": 1450.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 62, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Perfumes", "Body Lotions", "Luxury Soaps"]
    },
    {
        "id": "frg-fl-02", "sku": "SKFF-FRG-FL02", "name": "Jasmine Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral",
        "shortDescription": "Intoxicating night-blooming Sambac jasmine with warm indolic honey floral warmth.",
        "detailedDescription": "High-tenacity floral oil for oriental perfumery, hair oils, body washes, and premium diffusers.",
        "image": "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
        "price": 1650.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 71, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Fine Perfumes", "Hair Oils", "Diffusers"]
    },
    {
        "id": "frg-fl-03", "sku": "SKFF-FRG-FL03", "name": "Lavender Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Herbal",
        "shortDescription": "Calming Provencal lavender with clean herbal camphor and soft herbaceous balsam.",
        "detailedDescription": "Formulated for aromatherapy sprays, fabric softeners, hand soaps, sleep mists, and candles.",
        "image": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&q=80&w=800",
        "price": 1200.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 49, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Aromatherapy", "Fabric Softener", "Hand Soaps"]
    },
    {
        "id": "frg-fl-04", "sku": "SKFF-FRG-FL04", "name": "Lily Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral",
        "shortDescription": "Pristine white Madonna lily with green stem notes and elegant waxy petal scent.",
        "detailedDescription": "Ideal for bridal perfumes, body lotions, liquid hand washes, and laundry detergent bloom.",
        "image": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800",
        "price": 1350.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 35, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Bridal Perfumes", "Body Lotions", "Laundry Detergent"]
    },
    {
        "id": "frg-fl-05", "sku": "SKFF-FRG-FL05", "name": "Tuberose Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral",
        "shortDescription": "Opulent Rajnigandha tuberose with creamy white flower intensity and narcotic sillage.",
        "detailedDescription": "Prestige floral oil for niche extrait de parfums, body oils, and luxury hotel scenting.",
        "image": "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&q=80&w=800",
        "price": 1850.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 56, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Niche Perfumery", "Body Oils", "Hotel Ambiance"]
    },
    {
        "id": "frg-fl-06", "sku": "SKFF-FRG-FL06", "name": "Ylang-Ylang Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Exotic",
        "shortDescription": "Exotic tropical Ylang-Ylang Extra with spicy sweet banana floral undertones.",
        "detailedDescription": "Popular in spa massage oils, tropical body mists, high-end shampoos, and scented candles.",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
        "price": 1400.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 28, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Spa Products", "Massage Oils", "Body Mists"]
    },
    {
        "id": "frg-fl-07", "sku": "SKFF-FRG-FL07", "name": "Violet Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Powdery",
        "shortDescription": "Sweet ionone violet flower with soft powdery iris face cream accords.",
        "detailedDescription": "Used in luxury cosmetics, lipstick scents, talcum powders, and vintage perfumery compositions.",
        "image": "https://images.unsplash.com/photo-1565011523534-747a8601f10a?auto=format&fit=crop&q=80&w=800",
        "price": 1300.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 22, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Lipstick Scents", "Face Powders", "Vintage Perfumes"]
    },
    {
        "id": "frg-fl-08", "sku": "SKFF-FRG-FL08", "name": "Peony Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Fresh",
        "shortDescription": "Fresh blushing spring peony with crisp rosy freshness and airy green notes.",
        "detailedDescription": "Ideal for modern feminine eau de toilettes, hair care series, and luxury hand creams.",
        "image": "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800",
        "price": 1380.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 41, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Feminine EDT", "Hair Conditioners", "Hand Creams"]
    },
    {
        "id": "frg-fl-09", "sku": "SKFF-FRG-FL09", "name": "Magnolia Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Citrus",
        "shortDescription": "Lush white magnolia blossom with subtle lemony citrus radiance.",
        "detailedDescription": "Designed for body washes, facial cleansers, luxury room diffusers, and summer mists.",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
        "price": 1420.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 26, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Facial Cleansers", "Room Diffusers", "Body Washes"]
    },
    {
        "id": "frg-fl-10", "sku": "SKFF-FRG-FL10", "name": "Orange Blossom Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Citrus",
        "shortDescription": "Sunlit Mediterranean Neroli orange blossom with honeyed citrus floral bloom.",
        "detailedDescription": "Versatile perfume oil for fine fragrances, baby skincare lines, and laundry softeners.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1550.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 50, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Fine Perfumes", "Baby Care", "Fabric Care"]
    },
    {
        "id": "frg-fl-11", "sku": "SKFF-FRG-FL11", "name": "Lotus Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral Aquatic",
        "shortDescription": "Serene sacred pink lotus flower with watery transparent aquatic notes.",
        "detailedDescription": "Formulated for holistic spa lines, hydration face creams, bath salts, and zen ambiance sprays.",
        "image": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800",
        "price": 1490.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 33, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Spa Products", "Face Creams", "Bath Salts"]
    },
    {
        "id": "frg-fl-12", "sku": "SKFF-FRG-FL12", "name": "Gardenia Fragrance",
        "category": "FRAGRANCES", "subcategory": "Floral Fragrances", "scentFamily": "Floral",
        "shortDescription": "Velvety cream gardenia bloom with rich lactonic white floral depth.",
        "detailedDescription": "Ideal for luxury body creams, solid perfumes, scented candle wax, and premium soaps.",
        "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
        "price": 1500.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 29, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Body Creams", "Soy Candles", "Solid Perfumes"]
    },

    # --- B. Fruity Fragrances (12) ---
    {
        "id": "frg-fr-01", "sku": "SKFF-FRG-FR01", "name": "Bergamot Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Citrus",
        "shortDescription": "Sparkling Calabrian bergamot peel with Earl Grey tea bitterness and sunshine aura.",
        "detailedDescription": "Top note staple for cologne compositions, unisex shower gels, and refreshing room mists.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1350.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 54, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Colognes", "Shower Gels", "Room Mists"]
    },
    {
        "id": "frg-fr-02", "sku": "SKFF-FRG-FR02", "name": "Lemon Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Citrus",
        "shortDescription": "Zesty Sicilian lemon peel oil with sparkling clean citrus energy.",
        "detailedDescription": "Used in dishwashing liquids, surface cleaners, refreshing hand washes, and aromatherapy.",
        "image": "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800",
        "price": 1100.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 38, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Dishwash Liquids", "Surface Cleaners", "Aromatherapy"]
    },
    {
        "id": "frg-fr-03", "sku": "SKFF-FRG-FR03", "name": "Sweet Orange Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Citrus",
        "shortDescription": "Juicy sweet Florida orange oil with uplifting sunny citrus warmth.",
        "detailedDescription": "Formulated for hand soaps, kitchen cleaners, body mists, and energetic spa scents.",
        "image": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800",
        "price": 1150.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 45, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Hand Soaps", "Kitchen Cleaners", "Body Mists"]
    },
    {
        "id": "frg-fr-04", "sku": "SKFF-FRG-FR04", "name": "Mandarin Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Citrus",
        "shortDescription": "Sweet tangy clementine mandarin with sparkling citrus blossom notes.",
        "detailedDescription": "Popular in children's bath range, body washes, luxury reed diffusers, and citrus colognes.",
        "image": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
        "price": 1250.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 30, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Children's Bath", "Colognes", "Reed Diffusers"]
    },
    {
        "id": "frg-fr-05", "sku": "SKFF-FRG-FR05", "name": "Grapefruit Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Citrus",
        "shortDescription": "Tart pink ruby grapefruit peel with bittersweet invigorating zest.",
        "detailedDescription": "Designed for morning shower gels, body scrubs, anti-perspirants, and gym mists.",
        "image": "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=800",
        "price": 1300.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 36, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Shower Gels", "Body Scrubs", "Deodorants"]
    },
    {
        "id": "frg-fr-06", "sku": "SKFF-FRG-FR06", "name": "Apple Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity",
        "shortDescription": "Crisp green Granny Smith apple aroma with juicy fruit skin accord.",
        "detailedDescription": "Classic scent for shampoo formulations, hair conditioners, dish soaps, and air fresheners.",
        "image": "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&q=80&w=800",
        "price": 1180.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 27, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Shampoos", "Hair Care", "Air Fresheners"]
    },
    {
        "id": "frg-fr-07", "sku": "SKFF-FRG-FR07", "name": "Pear Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity",
        "shortDescription": "Sweet Williams English pear with delicate watery floral undertones.",
        "detailedDescription": "High-demand accord for English Pear & Freesia style fine fragrances, lotions, and body oils.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 1400.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 61, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Fine Perfumes", "Body Lotions", "Body Oils"]
    },
    {
        "id": "frg-fr-08", "sku": "SKFF-FRG-FR08", "name": "Peach Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity",
        "shortDescription": "Velvety Georgia peach flesh with sweet nectarine juiciness.",
        "detailedDescription": "Formulated for bath bombs, body butter creams, hair mists, and summer candle scents.",
        "image": "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?auto=format&fit=crop&q=80&w=800",
        "price": 1280.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 33, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Bath Bombs", "Body Butters", "Candles"]
    },
    {
        "id": "frg-fr-09", "sku": "SKFF-FRG-FR09", "name": "Raspberry Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Berry",
        "shortDescription": "Sweet wild red raspberry with tart berry leaves and sugar dust.",
        "detailedDescription": "Used in lip balms, body mists, fruit shampoos, and laundry scent boosters.",
        "image": "https://images.unsplash.com/photo-1577069861033-55d04ace4ef0?auto=format&fit=crop&q=80&w=800",
        "price": 1320.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 40, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Lip Balms", "Body Mists", "Laundry Boosters"]
    },
    {
        "id": "frg-fr-10", "sku": "SKFF-FRG-FR10", "name": "Blackcurrant Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Berry",
        "shortDescription": "Rich cassis blackcurrant bud with green fruity herbal sophistication.",
        "detailedDescription": "Chic berry note for luxury niche perfumes, reed diffusers, and fine soaps.",
        "image": "https://images.unsplash.com/photo-1568656490369-425020ab220d?auto=format&fit=crop&q=80&w=800",
        "price": 1480.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 46, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Niche Perfumery", "Reed Diffusers", "Luxury Soaps"]
    },
    {
        "id": "frg-fr-11", "sku": "SKFF-FRG-FR11", "name": "Fig Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Woody",
        "shortDescription": "Mediterranean green fig leaf and milky ripe fig fruit with cedar wood.",
        "detailedDescription": "Trendy green fruity scent for boutique hotel amenities, hand lotions, and candles.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 1520.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 51, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Hotel Amenities", "Hand Lotions", "Soy Candles"]
    },
    {
        "id": "frg-fr-12", "sku": "SKFF-FRG-FR12", "name": "Plum Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fruity Fragrances", "scentFamily": "Fruity Oriental",
        "shortDescription": "Dark damson sugar plum with warm cinnamon spice and ambered skin.",
        "detailedDescription": "Deep rich fruity fragrance for evening perfumes, winter body creams, and room diffusers.",
        "image": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=800",
        "price": 1390.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 24, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Evening Perfumes", "Winter Body Creams", "Diffusers"]
    },

    # --- C. Woody & Earthy Fragrances (10) ---
    {
        "id": "frg-w-01", "sku": "SKFF-FRG-WD01", "name": "Sandalwood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody",
        "shortDescription": "Creamy sacred Mysore sandalwood oil with warm balsamic cedar depth.",
        "detailedDescription": "Prestige woody fragrance for niche perfumes, luxury bar soaps, attars, and incense diffusers.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1950.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 85, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Attars & Perfumes", "Bar Soaps", "Incense Diffusers"]
    },
    {
        "id": "frg-w-02", "sku": "SKFF-FRG-WD02", "name": "Cedarwood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody",
        "shortDescription": "Dry aromatic Virginian cedarwood with warm pencil-shaving resinous depth.",
        "detailedDescription": "Used in men's grooming series, beard oils, woody perfumery, and car air fresheners.",
        "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        "price": 1400.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 42, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Beard Oils", "Men's Colognes", "Car Fresheners"]
    },
    {
        "id": "frg-w-03", "sku": "SKFF-FRG-WD03", "name": "Oud Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Oriental",
        "shortDescription": "Smoky Cambodian agarwood Oud with deep leather, amber, and spice accords.",
        "detailedDescription": "Regal oriental scent for prestige perfumes, bakhoor incense, and luxury body oils.",
        "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        "price": 2400.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 94, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Oriental Oud Perfumes", "Bakhoor", "Body Oils"]
    },
    {
        "id": "frg-w-04", "sku": "SKFF-FRG-WD04", "name": "Vetiver Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Earthy",
        "shortDescription": "Earthy green Haitian vetiver root with smoky grapefruit drydown.",
        "detailedDescription": "Classic base note for masculine colognes, aftershaves, soaps, and earthy spa candles.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1600.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 36, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Masculine Colognes", "Aftershaves", "Earthy Soaps"]
    },
    {
        "id": "frg-w-05", "sku": "SKFF-FRG-WD05", "name": "Patchouli Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Earthy",
        "shortDescription": "Rich dark Indonesian patchouli with sweet earthy camphor and chocolate warmth.",
        "detailedDescription": "Fixative oil essential for chypre perfumery, incense sticks, body mists, and soaps.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1550.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 47, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Chypre Perfumes", "Incense Sticks", "Body Mists"]
    },
    {
        "id": "frg-w-06", "sku": "SKFF-FRG-WD06", "name": "Agarwood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Oriental",
        "shortDescription": "Noble Assam resinous agarwood profile with balsamic woody elegance.",
        "detailedDescription": "Crafted for traditional oriental perfumery, attars, room diffusers, and luxury soaps.",
        "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
        "price": 2200.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 68, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Assam Oud Attars", "Diffusers", "Fine Soaps"]
    },
    {
        "id": "frg-w-07", "sku": "SKFF-FRG-WD07", "name": "Amberwood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Amber",
        "shortDescription": "Radiant dry amberwood molecule accord with cedar and musk sillage.",
        "detailedDescription": "Modern niche perfume building block (Baccarat Rouge style radiance) for luxury EDPs.",
        "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
        "price": 1800.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 79, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Niche EDPs", "Luxury Body Oils", "Diffusers"]
    },
    {
        "id": "frg-w-08", "sku": "SKFF-FRG-WD08", "name": "Cashmere Wood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Soft",
        "shortDescription": "Silky Cashmeran wood with soft amber musk and powdery cedar feel.",
        "detailedDescription": "Provides cozy cocooning softness in luxury body creams, fabric softeners, and perfumes.",
        "image": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&q=80&w=800",
        "price": 1650.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 44, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Cashmere Creams", "Fabric Softeners", "Perfumes"]
    },
    {
        "id": "frg-w-09", "sku": "SKFF-FRG-WD09", "name": "Guaiac Wood Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Smoky",
        "shortDescription": "Smoky Paraguayan Palo Santo wood with sweet rosy balsamic smoke.",
        "detailedDescription": "Formulated for artisanal candle wax, niche perfumes, beard balms, and incense blends.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1580.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 31, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Artisan Candles", "Palo Santo Blends", "Beard Balms"]
    },
    {
        "id": "frg-w-10", "sku": "SKFF-FRG-WD10", "name": "Moss Fragrance",
        "category": "FRAGRANCES", "subcategory": "Woody & Earthy Fragrances", "scentFamily": "Woody Earthy",
        "shortDescription": "Damp green forest oakmoss with lichen, wet bark, and earthy chypre depth.",
        "detailedDescription": "Essential foundational element for classic fougere and chypre perfumes, soaps, and lotions.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1450.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 25, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Chypre Perfumes", "Fougere Colognes", "Soaps"]
    },

    # --- D. Fresh & Aquatic Fragrances (10) ---
    {
        "id": "frg-aq-01", "sku": "SKFF-FRG-AQ01", "name": "Ocean Breeze Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Aquatic",
        "shortDescription": "Invigorating sea spray with crisp marine ozone, sea salt, and coastal breeze.",
        "detailedDescription": "Created for shower gels, aquatic perfumes, room sprays, and laundry detergents.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1250.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 58, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Shower Gels", "Aquatic Colognes", "Room Sprays"]
    },
    {
        "id": "frg-aq-02", "sku": "SKFF-FRG-AQ02", "name": "Sea Mist Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Aquatic",
        "shortDescription": "Cool ocean water mist with crushed eucalyptus and sun-bleached driftwood.",
        "detailedDescription": "Ideal for spa body mists, bath salts, car air fresheners, and hand washes.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1280.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 37, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Body Mists", "Bath Salts", "Car Fresheners"]
    },
    {
        "id": "frg-aq-03", "sku": "SKFF-FRG-AQ03", "name": "Aqua Fresh Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Aquatic",
        "shortDescription": "Crisp sparkling water notes with green melon and citrus zest.",
        "detailedDescription": "Formulated for active sport deodorants, fresh body sprays, and liquid laundry detergents.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1190.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 42, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Sport Deodorants", "Body Sprays", "Laundry LiquiDS"]
    },
    {
        "id": "frg-aq-04", "sku": "SKFF-FRG-AQ04", "name": "Rain Fresh Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Aquatic Earthy",
        "shortDescription": "Petrichor wet earth aroma after summer rain with fresh ozonic air.",
        "detailedDescription": "Unique petrichor rain scent for room diffusers, specialty candles, and body lotions.",
        "image": "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=800",
        "price": 1420.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 63, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Petrichor Diffusers", "Specialty Candles", "Body Lotions"]
    },
    {
        "id": "frg-aq-05", "sku": "SKFF-FRG-AQ05", "name": "Green Tea Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Fresh Herbal",
        "shortDescription": "Steamed Japanese Sencha green tea leaves with bamboo water and yuzu zest.",
        "detailedDescription": "Popular across premium hotel bath series, micellar waters, face cleansers, and hand creams.",
        "image": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
        "price": 1380.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 51, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Hotel Cosmetics", "Facial Cleansers", "Hand Creams"]
    },
    {
        "id": "frg-aq-06", "sku": "SKFF-FRG-AQ06", "name": "Fresh Linen Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Fresh Clean",
        "shortDescription": "Sun-dried cotton sheets with crisp aldehydes, white lily, and clean musk.",
        "detailedDescription": "Industry standard for laundry softeners, fabric refresher sprays, and air care diffusers.",
        "image": "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&q=80&w=800",
        "price": 1150.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 57, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Fabric Softeners", "Laundry Sprays", "Air Fresheners"]
    },
    {
        "id": "frg-aq-07", "sku": "SKFF-FRG-AQ07", "name": "Citrus Fresh Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Fresh Citrus",
        "shortDescription": "Uplifting blend of lemon, lime, orange, and sparkling verbena leaf.",
        "detailedDescription": "Used in kitchen soaps, energizing body washes, surface disinfectants, and gym mists.",
        "image": "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800",
        "price": 1120.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 29, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Kitchen Soaps", "Body Washes", "Gym Mists"]
    },
    {
        "id": "frg-aq-08", "sku": "SKFF-FRG-AQ08", "name": "Morning Dew Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Fresh Green",
        "shortDescription": "Dewy green grass blades with white clover and early morning air accord.",
        "detailedDescription": "Designed for botanical shampoos, face toners, natural body washes, and room sprays.",
        "image": "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=80&w=800",
        "price": 1290.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 31, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Botanical Shampoos", "Face Toners", "Natural Washes"]
    },
    {
        "id": "frg-aq-09", "sku": "SKFF-FRG-AQ09", "name": "Cool Water Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Aquatic",
        "shortDescription": "Crisp ocean lavender with peppermint, coriander, and cedarwood sea breeze.",
        "detailedDescription": "Timeless masculine aquatic cologne scent for aftershaves, shower gels, and deodorants.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1360.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 73, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Men's Colognes", "Aftershaves", "Deodorants"]
    },
    {
        "id": "frg-aq-10", "sku": "SKFF-FRG-AQ10", "name": "Alpine Air Fragrance",
        "category": "FRAGRANCES", "subcategory": "Fresh & Aquatic Fragrances", "scentFamily": "Fresh Ozone",
        "shortDescription": "Pristine mountain pine needles with icy ozone, snow air, and white cedar.",
        "detailedDescription": "Formulated for winter room sprays, bath salts, car air fresheners, and pine cleaners.",
        "image": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
        "price": 1240.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 26, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Mountain Pine Sprays", "Car Fresheners", "Pine Cleaners"]
    },

    # --- E. Warm, Sweet & Oriental Fragrances (10) ---
    {
        "id": "frg-or-01", "sku": "SKFF-FRG-OR01", "name": "Vanilla Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Sweet",
        "shortDescription": "Opulent Madagascan vanilla bean pod with warm orchid, caramel, and benzoin balm.",
        "detailedDescription": "Gourmand classic for body mists, luxury body butter, soy candles, and perfume compositions.",
        "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800",
        "price": 1450.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 88, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister", "25 kg Drum"], "moq": "1 kg",
        "applications": ["Gourmet Perfumes", "Body Butters", "Soy Candles"]
    },
    {
        "id": "frg-or-02", "sku": "SKFF-FRG-OR02", "name": "White Musk Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Musk",
        "shortDescription": "Velvety sensual white musk with clean powdery iris and soft amber sillage.",
        "detailedDescription": "Sensual skin scent for fine perfumery, luxury body lotions, attars, and fabric softeners.",
        "image": "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
        "price": 1500.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 92, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Skin Musk Perfumes", "Body Lotions", "Attars"]
    },
    {
        "id": "frg-or-03", "sku": "SKFF-FRG-OR03", "name": "Amber Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Oriental",
        "shortDescription": "Golden oriental crystal amber with labdanum resin, vanilla, and sweet benzoin.",
        "detailedDescription": "Rich oriental base note for evening perfumes, bakhoor incense, and ambient diffusers.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1680.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 53, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Evening EDPs", "Bakhoor Incense", "Diffusers"]
    },
    {
        "id": "frg-or-04", "sku": "SKFF-FRG-OR04", "name": "Frankincense Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Resinous",
        "shortDescription": "Sacred Omani Luban frankincense resin with lemon-peel resinous incense smoke.",
        "detailedDescription": "Sacred oriental oil for spiritual incense, niche perfumery, body oils, and meditation mists.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1750.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 46, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Meditation Mists", "Incense", "Niche Perfumes"]
    },
    {
        "id": "frg-or-05", "sku": "SKFF-FRG-OR05", "name": "Myrrh Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Resinous",
        "shortDescription": "Ancient Red Sea Myrrh gum with warm spicy bitter-sweet balsamic resin notes.",
        "detailedDescription": "Exquisite oriental resin note for high-end perfumery, body balms, and luxury room scenting.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800",
        "price": 1720.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 38, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Oriental Perfumes", "Body Balms", "Room Scenting"]
    },
    {
        "id": "frg-or-06", "sku": "SKFF-FRG-OR06", "name": "Cinnamon Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Spicy",
        "shortDescription": "Spicy Ceylon cinnamon bark with sweet clove and festive winter warmth.",
        "detailedDescription": "Popular in holiday candle collections, potpourri, spicy colognes, and soap bars.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 1380.00, "quoteRequired": False, "rating": 4.8, "reviewsCount": 41, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Holiday Candles", "Spicy Colognes", "Soaps"]
    },
    {
        "id": "frg-or-07", "sku": "SKFF-FRG-OR07", "name": "Tonka Bean Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Gourmand",
        "shortDescription": "Warm Brazilian Tonka bean with coumarin, almond, vanilla, and dark tobacco nuances.",
        "detailedDescription": "Sought-after gourmand accord for luxury male & unisex perfumery, body oils, and candles.",
        "image": "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800",
        "price": 1620.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 67, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Unisex EDPs", "Body Oils", "Gourmand Candles"]
    },
    {
        "id": "frg-or-08", "sku": "SKFF-FRG-OR08", "name": "Cocoa Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Gourmand",
        "shortDescription": "Deep roasted cocoa nibs with dark chocolate, espresso, and vanilla creaminess.",
        "detailedDescription": "Indulgent gourmand scent for body cocoa butter creams, lip balms, and candle collections.",
        "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800",
        "price": 1490.00, "quoteRequired": False, "rating": 4.9, "reviewsCount": 35, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Cocoa Butter Creams", "Lip Balms", "Candles"]
    },
    {
        "id": "frg-or-09", "sku": "SKFF-FRG-OR09", "name": "White Pepper Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Spicy",
        "shortDescription": "Sharp dry white pepper corn with woody cedar and radiant elemi resin.",
        "detailedDescription": "Modern spicy accent for niche woody colognes, aftershaves, and artisanal shower gels.",
        "image": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
        "price": 1440.00, "quoteRequired": False, "rating": 4.7, "reviewsCount": 21, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Woody Colognes", "Aftershaves", "Shower Gels"]
    },
    {
        "id": "frg-or-10", "sku": "SKFF-FRG-OR10", "name": "Saffron Fragrance",
        "category": "FRAGRANCES", "subcategory": "Warm, Sweet & Oriental Fragrances", "scentFamily": "Warm Oriental",
        "shortDescription": "Golden Persian saffron thread with warm metallic leather, rose, and amber sillage.",
        "detailedDescription": "Opulent luxury oriental note for niche perfumes, oriental bakhoor, and prestige body oils.",
        "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800",
        "price": 2100.00, "quoteRequired": False, "rating": 5.0, "reviewsCount": 82, "availability": "In Stock",
        "packSizes": ["1 kg Aluminum Bottle", "5 kg Canister"], "moq": "1 kg",
        "applications": ["Niche Saffron EDPs", "Bakhoor", "Body Oils"]
    }
]

print(f"Total Flavours generated: {len(flavours)}")
print(f"Total Fragrances generated: {len(fragrances)}")
print(f"Total Catalogue count: {len(flavours) + len(fragrances)}")
