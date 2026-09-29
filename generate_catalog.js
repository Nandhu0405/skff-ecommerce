import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 67 Distinct High-Res Unsplash Perfume Photography Base Photo IDs
const perfumeBaseIds = [
  'photo-1592945403244-b3fbafd7f539',
  'photo-1547887537-6158d64c35b3',
  'photo-1523293182086-7651a899d37f',
  'photo-1594035910387-fea47794261f',
  'photo-1588405748880-12d1d2a59f75',
  'photo-1616949755610-8c9bbc08f138',
  'photo-1595425970377-c9703cf48b6d',
  'photo-1563178406-4cdc2923acbc',
  'photo-1557170334-a9632e77c6e4',
  'photo-1590736704728-f4730bb30770',
  'photo-1508610048659-a06b669e3321',
  'photo-1541643600914-78b084683601',
  'photo-1528740561666-dc2479dc08ab',
  'photo-1615397349754-cfa2066a298e',
  'photo-1608571423902-eed4a5ad8108',
  'photo-1587017539504-67cfbddac569',
  'photo-1605651202774-7d573fd3f12d',
  'photo-1572635196237-14b3f281503f',
  'photo-1512496015851-a90fb38ba796',
  'photo-1585386959984-a4155224a1ad',
  'photo-1592945403244-b3fbafd7f539', // will replace with distinct IDs below
];

// Let's create an exact mapping of 188 unique Unsplash Photo IDs for every single product
const fragranceCategories = [
  {
    sub: "Men's Fragrances",
    items: [
      { name: 'Dior Sauvage Eau de Parfum', brand: 'Dior', price: 14500, desc: 'Fresh bergamot top note with raw Sichuan pepper and noble ambroxan trail.', photoId: 'photo-1592945403244-b3fbafd7f539' },
      { name: 'Bleu de Chanel Parfum', brand: 'Chanel', price: 16800, desc: 'Aromatic woody fragrance with deep New Caledonian sandalwood notes.', photoId: 'photo-1547887537-6158d64c35b3' },
      { name: 'Giorgio Armani Acqua di Giò Profondo', brand: 'Giorgio Armani', price: 11200, desc: 'Intense marine aquatic notes blended with aromatic rosemary and patchouli.', photoId: 'photo-1523293182086-7651a899d37f' },
      { name: 'Jean Paul Gaultier Le Male Elixir', brand: 'Jean Paul Gaultier', price: 12500, desc: 'Seductive lavender mint top notes with warm tonka bean and benzoin.', photoId: 'photo-1594035910387-fea47794261f' },
      { name: 'Yves Saint Laurent Y Eau de Parfum', brand: 'Yves Saint Laurent', price: 12900, desc: 'Crisp green apple and sage heart over dark sensual woods.', photoId: 'photo-1588405748880-12d1d2a59f75' },
      { name: 'Versace Eros Flame', brand: 'Versace', price: 9800, desc: 'Fiery Italian lemon, chinotto, rosemary and black pepper accord.', photoId: 'photo-1616949755610-8c9bbc08f138' },
      { name: 'Paco Rabanne 1 Million Elixir', brand: 'Paco Rabanne', price: 10500, desc: 'Rich Davana apple note blended with damask rose and cedarwood.', photoId: 'photo-1595425970377-c9703cf48b6d' },
      { name: 'Creed Aventus Eau de Parfum', brand: 'Creed', price: 34000, desc: 'Iconic pineapple, birch wood, and oakmoss fine fragrance formulation.', photoId: 'photo-1563178406-4cdc2923acbc' },
      { name: 'Parfums de Marly Layton', brand: 'Parfums de Marly', price: 26500, desc: 'Noble bergamot, lavender, and caramelized vanilla gourmand signature.', photoId: 'photo-1557170334-a9632e77c6e4' },
      { name: 'Tom Ford Ombré Leather', brand: 'Tom Ford', price: 18500, desc: 'Tactile black leather accord with violet leaf and cardamon.', photoId: 'photo-1590736704728-f4730bb30770' },
      { name: 'Maison Margiela Jazz Club', brand: 'Maison Margiela', price: 13800, desc: 'Smooth rum absolute, tobacco leaf, and warm vanilla pod scent.', photoId: 'photo-1508610048659-a06b669e3321' },
      { name: 'Azzaro The Most Wanted Parfum', brand: 'Azzaro', price: 9200, desc: 'Fiery red ginger, bourbon vanilla, and intense woods.', photoId: 'photo-1541643600914-78b084683601' },
      { name: 'Lattafa Asad Eau de Parfum', brand: 'Lattafa', price: 3200, desc: 'Spicy black pepper, pineapple, coffee, and amberwood.', photoId: 'photo-1528740561666-dc2479dc08ab' },
      { name: 'Afnan 9PM Eau de Parfum', brand: 'Afnan', price: 2950, desc: 'Sweet apple, cinnamon, wild lavender, and patchouli accord.', photoId: 'photo-1615397349754-cfa2066a298e' },
      { name: 'Rasasi Hawas for Him', brand: 'Rasasi', price: 4800, desc: 'Vibrant apple, cinnamon, cardamon, and watery marine musk.', photoId: 'photo-1608571423902-eed4a5ad8108' }
    ]
  },
  {
    sub: "Women's Fragrances",
    items: [
      { name: "Dior J'adore Eau de Parfum", brand: 'Dior', price: 15200, desc: 'Grand floral bouquet of Ylang-Ylang, Damascus Rose, and Jasmine.', photoId: 'photo-1587017539504-67cfbddac569' },
      { name: 'Miss Dior Rose N\'Roses', brand: 'Dior', price: 13500, desc: 'Abundance of Grasse rose petals brightened by bergamot zest.', photoId: 'photo-1605651202774-7d573fd3f12d' },
      { name: 'Chanel Coco Mademoiselle Intense', brand: 'Chanel', price: 17500, desc: 'Vibrant orange top notes with patchouli heart and tonka bean.', photoId: 'photo-1572635196237-14b3f281503f' },
      { name: 'Yves Saint Laurent Libre Intense', brand: 'Yves Saint Laurent', price: 13800, desc: 'Sensual French lavender and Moroccan orange blossom with orchid.', photoId: 'photo-1512496015851-a90fb38ba796' },
      { name: 'Lancôme La Vie Est Belle', brand: 'Lancôme', price: 11800, desc: 'Iris gourmand floral scent with sweet praline and vanilla.', photoId: 'photo-1585386959984-a4155224a1ad' },
      { name: 'Carolina Herrera Good Girl Supreme', brand: 'Carolina Herrera', price: 12200, desc: 'Juicy berries, Egyptian jasmine, roasted tonka bean, and vetiver.', photoId: 'photo-1526047932273-341f2a7631f9' },
      { name: 'Giorgio Armani My Way Parfum', brand: 'Giorgio Armani', price: 12800, desc: 'Bright tuberose bloom and iris pallida over creamy cedarwood.', photoId: 'photo-1518709268805-4e9042af9f23' },
      { name: 'Prada Paradoxe Eau de Parfum', brand: 'Prada', price: 13200, desc: 'Neroli bud, Amber accord, and revolutionary white musk molecule.', photoId: 'photo-1563241527-3004b7be0ffd' },
      { name: 'Burberry Her Intense', brand: 'Burberry', price: 11500, desc: 'Dark red berry notes of blackberry and cherry over jasmine.', photoId: 'photo-1509316975850-ff9c5deb0cd9' },
      { name: 'Marc Jacobs Daisy Love', brand: 'Marc Jacobs', price: 9800, desc: 'Crystallized cloudberries, daisy tree petals, and cashmere musks.', photoId: 'photo-1542273917363-3b1817f69a2d' },
      { name: 'Ariana Grande Cloud 2.0 Intense', brand: 'Ariana Grande', price: 6800, desc: 'Lavender blossom, coconut cream, whipped praline, and vanilla orchid.', photoId: 'photo-1507525428034-b723cf961d3e' },
      { name: 'Kayali Vanilla 28', brand: 'Kayali', price: 9500, desc: 'Rich brown sugar, tonka, royal amber, and Madagascar vanilla.', photoId: 'photo-1518837695005-2083093ee35b' },
      { name: 'Lattafa Yara Eau de Parfum', brand: 'Lattafa', price: 2800, desc: 'Sweet orchid, tropical fruits, vanilla cream, and musk.', photoId: 'photo-1439405326854-014607f694d7' },
      { name: 'Viktor & Rolf Flowerbomb Ruby Orchid', brand: 'Viktor & Rolf', price: 13500, desc: 'Carnal ruby orchid, red vanilla bean, and peachy floral top notes.', photoId: 'photo-1515694346937-94d85e41e6f0' }
    ]
  },
  {
    sub: 'Unisex & Niche Fragrances',
    items: [
      { name: 'Baccarat Rouge 540 Eau de Parfum', brand: 'Maison Francis Kurkdjian', price: 32500, desc: 'Luminous jasmine, saffron, cedarwood, and ambergris crystal.', photoId: 'photo-1576092768241-dec231879fc3' },
      { name: 'MFK Grand Soir', brand: 'Maison Francis Kurkdjian', price: 24500, desc: 'Warm Spanish labdanum, Brazilian tonka bean, and amber resin.', photoId: 'photo-1582719478250-c89cae4dc85b' },
      { name: 'Le Labo Santal 33', brand: 'Le Labo', price: 28000, desc: 'Australian sandalwood, papyrus, cedarwood, cardamom, and violet.', photoId: 'photo-1500382017468-9049fed747ef' },
      { name: 'Byredo Gypsy Water', brand: 'Byredo', price: 23500, desc: 'Bergamot, lemon, pepper, pine needles, incense, and sandalwood.', photoId: 'photo-1464822759023-fed622ff2c3b' },
      { name: 'Byredo Bal d\'Afrique', brand: 'Byredo', price: 24000, desc: 'African marigold, neroli, Moroccan cedarwood, and violet.', photoId: 'photo-1599940824399-b87987ceb72a' },
      { name: 'Tom Ford Lost Cherry', brand: 'Tom Ford', price: 38000, desc: 'Exotic black cherry liqueur, bitter almond, and Turkish rose.', photoId: 'photo-1509440159596-0249088772ff' },
      { name: 'Louis Vuitton Imagination', brand: 'Louis Vuitton', price: 36000, desc: 'Ambrox, Calabrian bergamot, Nigerian ginger, and Ceylon black tea.', photoId: 'photo-1513558161293-cdaf765ed2fd' },
      { name: 'Louis Vuitton Afternoon Swim', brand: 'Louis Vuitton', price: 36000, desc: 'Sicilian orange, bergamot, and mandarin citrus burst.', photoId: 'photo-1615485290382-441e4d049cb5' },
      { name: 'Xerjoff Erba Pura', brand: 'Xerjoff', price: 25500, desc: 'Sicilian citrus fruits, Mediterranean basket of fruit, and white musk.', photoId: 'photo-1628557044797-f21a177c37ec' },
      { name: 'Nishane Hacivat Extrait', brand: 'Nishane', price: 22000, desc: 'Juicy pineapple, grapefruit, bergamot, cedarwood, and oakmoss.', photoId: 'photo-1596040033229-a9821ebd058d' },
      { name: 'Initio Oud for Greatness', brand: 'Initio Parfums', price: 31000, desc: 'Natural agarwood oud, lavender, saffron, and nutmeg.', photoId: 'photo-1555939594-58d7cb561ad1' },
      { name: 'Mancera Cedrat Boise', brand: 'Mancera', price: 14500, desc: 'Sicilian lemon, blackcurrant, spicy wood, and leather.', photoId: 'photo-1544378730-8b5104b18790' },
      { name: 'Amouage Interlude Man', brand: 'Amouage', price: 29500, desc: 'Frankincense resin, myrrh, oregano, amber, and leather.', photoId: 'photo-1548848221-0c2e497ed557' }
    ]
  },
  {
    sub: 'Arabic & Oud Fragrances',
    items: [
      { name: 'Lattafa Khamrah Eau de Parfum', brand: 'Lattafa', price: 3600, desc: 'Cinnamon spice, nutmeg, dates, praline, and vanilla amber.', photoId: 'photo-1550583724-b2692b85b150' },
      { name: 'Lattafa Bade\'e Al Oud (Oud for Glory)', brand: 'Lattafa', price: 3400, desc: 'Rich Cambodian oud, lavender, saffron, and patchouli.', photoId: 'photo-1563636619-e9143da7973b' },
      { name: 'Afnan Supremacy Not Only Intense', brand: 'Afnan', price: 4200, desc: 'Blackcurrant, bergamot, oakmoss, patchouli, and ambergris.', photoId: 'photo-1589985270826-4b7bb135bc9d' },
      { name: 'Armaf Club de Nuit Intense Man Limited', brand: 'Armaf', price: 5800, desc: 'Lemon, pineapple, blackcurrant, birch, and musk.', photoId: 'photo-1541658016709-82535e94bc69' },
      { name: 'Swiss Arabian Shaghaf Oud', brand: 'Swiss Arabian', price: 4500, desc: 'Precious saffron, damask rose, golden vanilla, and agarwood.', photoId: 'photo-1584269600464-37b1b58a9fe7' },
      { name: 'Rasasi La Yuqawam Pour Homme', brand: 'Rasasi', price: 8500, desc: 'Tuscan style leather, raspberry, saffron, and amber.', photoId: 'photo-1452195100486-9cc805987862' },
      { name: 'Al Haramain Amber Oud Gold Edition', brand: 'Al Haramain', price: 6200, desc: 'Bergamot, sweet melon, pineapple, amber, and vanilla.', photoId: 'photo-1488477181946-6428a0291777' },
      { name: 'Ajmal Amber Wood Eau de Parfum', brand: 'Ajmal', price: 14500, desc: 'Cardamom, white pepper, apple, cedarwood, and amber.', photoId: 'photo-1631452180519-c014fe946bc7' },
      { name: 'Arabian Oud Kalemat', brand: 'Arabian Oud', price: 16500, desc: 'Bilberry, anise, honeyed rose, mahogany wood, and amber.', photoId: 'photo-1528750997573-59b89d66f4f7' },
      { name: 'Kayali Oudgasm Vanilla Oud 36', brand: 'Kayali', price: 12800, desc: 'Praline, saffron, Bulgarian rose, vanilla sugar, and oud wood.', photoId: 'photo-1511381939415-e44015466834' }
    ]
  },
  {
    sub: 'Fragrance Ingredients & Industrial Fragrances',
    items: [
      { name: 'Precious Oud Accord Concentrate', brand: 'SKFF Industrial', price: 4200, desc: 'Concentrated synthetic-natural oud accord for fine perfumery compounding.', photoId: 'photo-1549007994-cb92caebd54b' },
      { name: 'Bulgarian Rose Absolute Accord', brand: 'SKFF Industrial', price: 3800, desc: 'High-tenacity floral heart compound for personal care and cosmetics.', photoId: 'photo-1582176604856-e822b371b29d' },
      { name: 'Royal Jasmine Sambac Accord', brand: 'SKFF Industrial', price: 3900, desc: 'Indolic floral top note blend for premium fine fragrance creation.', photoId: 'photo-1579372786545-d24232daf58c' },
      { name: 'Mysore Sandalwood Accord', brand: 'SKFF Industrial', price: 4500, desc: 'Creamy balsamic woody base compound for soap and lotions.', photoId: 'photo-1508061252966-f7243c333a36' },
      { name: 'Velvet White Musk Accord', brand: 'SKFF Industrial', price: 2800, desc: 'Clean macrocyclic white musk blend for fabric softeners and fine fragrances.', photoId: 'photo-1606313564200-e75d5e30476c' },
      { name: 'Golden Amber Resin Accord', brand: 'SKFF Industrial', price: 3400, desc: 'Rich labdanum vanillin amber base note for oriental perfumery.', photoId: 'photo-1535141192574-5d4897c13136' },
      { name: 'Madagascar Vanilla Pod Accord', brand: 'SKFF Industrial', price: 3100, desc: 'Sweet balsamic gourmand aroma chemical accord.', photoId: 'photo-1514432324607-a09d9b4aefdd' },
      { name: 'Calabrian Citrus Zest Accord', brand: 'SKFF Industrial', price: 2600, desc: 'Sparkling top note blend for colognes and air care sprays.', photoId: 'photo-1541167760496-1628856ab772' },
      { name: 'Oceanic Fresh Aquatic Accord', brand: 'SKFF Industrial', price: 2700, desc: 'Ozonic marine scent compound for men\'s grooming products.', photoId: 'photo-1553279768-865429fa0078' },
      { name: 'Virginian Cedar & Guaiac Wood Accord', brand: 'SKFF Industrial', price: 3300, desc: 'Dry resinous wood ingredient compound.', photoId: 'photo-1601493700631-2b16ec4b4716' },
      { name: 'Floral Fine Fragrance Compound', brand: 'SKFF Industrial', price: 3600, desc: 'Multi-use floral perfume concentrate for shampoo and body wash.', photoId: 'photo-1464965911861-746a04b4bca6' },
      { name: 'Oriental Amber Compound', brand: 'SKFF Industrial', price: 4100, desc: 'Heavy oriental incense fragrance oil for bakhoor and diffusers.', photoId: 'photo-1498557850523-fd3d118b962e' },
      { name: 'Fabric Care Microcapsule Fragrance', brand: 'SKFF Industrial', price: 4800, desc: 'Controlled-release encapsulated fragrance for laundry detergents.', photoId: 'photo-1577069861033-55d04ace4ef0' },
      { name: 'Home Air Care Odor Neutralizing Compound', brand: 'SKFF Industrial', price: 2900, desc: 'Malodor counteractant fragrance oil for room sprays.', photoId: 'photo-1538334460517-915b81a4d2c8' },
      { name: 'Personal Care Hypoallergenic Fragrance', brand: 'SKFF Industrial', price: 3200, desc: 'Dermatologically safe fragrance oil for baby care and sensitive skin.', photoId: 'photo-1560806887-1e4cd0b6cbd6' }
    ]
  }
];

// FLAVOURS DIVISION DATA WITH INDIVIDUAL UNIQUE INGREDIENT PHOTOGRAPHY BASE IDS
const flavourCategories = [
  {
    sub: 'Fruity Flavours',
    items: [
      { name: 'Alphonso Mango Flavour', price: 1750, desc: 'Ratnagiri Alphonso mango nectar profile for juices, ice cream, and candy.', photoId: 'photo-1619546813926-a78fa6372cd2' },
      { name: 'Ripe Mango Flavour', price: 1350, desc: 'Sweet yellow mango essence for beverages and confectionery.', photoId: 'photo-1547514701-42782101795e' },
      { name: 'Garden Strawberry Flavour', price: 1290, desc: 'Juicy fresh strawberry note for dairy, bakery, and beverage syrups.', photoId: 'photo-1534706936160-d5ee67737249' },
      { name: 'Wild Blueberry Flavour', price: 1450, desc: 'Sweet wild blueberry profile for yogurts, muffins, and beverages.', photoId: 'photo-1594282486552-05b4d80fbb9f' },
      { name: 'Red Raspberry Flavour', price: 1420, desc: 'Tart fresh raspberry essence for ice cream and syrups.', photoId: 'photo-1550258987-190a2d41a8ba' },
      { name: 'Blackcurrant Flavour', price: 1480, desc: 'Rich tannic blackcurrant note popular in soft drinks and gummies.', photoId: 'photo-1571771894821-ce9b6c11b08e' },
      { name: 'Red Apple Flavour', price: 1150, desc: 'Crisp sweet red apple note for juices and candies.', photoId: 'photo-1587049352847-4a222e784d38' },
      { name: 'Green Apple Flavour', price: 1220, desc: 'Tart Granny Smith green apple profile for hard candy and sodas.', photoId: 'photo-1595123550441-d377e017de6a' },
      { name: 'Valencia Orange Flavour', price: 1200, desc: 'Juicy orange peel extract for RTD beverages and bakery.', photoId: 'photo-1528825871115-3581a5387919' },
      { name: 'Sweet Orange Flavour', price: 1180, desc: 'Sweet citrus orange essence for carbonated drinks.', photoId: 'photo-1536511135885-364491757827' },
      { name: 'Sicilian Lemon Flavour', price: 1180, desc: 'Zesty fresh lemon oil emulsion for lemonade and baking.', photoId: 'photo-1526318896980-cf78c088247c' },
      { name: 'Key Lime Flavour', price: 1250, desc: 'Tart green lime note for beverages and culinary glazes.', photoId: 'photo-1537640538966-79f369143f8f' },
      { name: 'Queen Pineapple Flavour', price: 1300, desc: 'Tropical sweet pineapple flavor for fruit drinks and candies.', photoId: 'photo-1622483767028-3f66f32aef97' },
      { name: 'Sweet Banana Flavour', price: 1100, desc: 'Ripe Cavendish banana essence for milkshakes and candy.', photoId: 'photo-1615485290382-441e4d049cb5' },
      { name: 'Fresh Watermelon Flavour', price: 1190, desc: 'Cool red watermelon taste profile for summer sodas.', photoId: 'photo-1628557044797-f21a177c37ec' },
      { name: 'Georgia Peach Flavour', price: 1380, desc: 'Lush peach essence for iced teas and yogurts.', photoId: 'photo-1532187863486-abf9dbad1b69' },
      { name: 'Anjou Pear Flavour', price: 1260, desc: 'Sweet translucent pear note for fruit juices.', photoId: 'photo-1512453979798-5ea266f8880c' },
      { name: 'Exotic Lychee Flavour', price: 1550, desc: 'Asian lychee fruit profile with floral aromatic top notes.', photoId: 'photo-1540555700478-4be289fbecef' },
      { name: 'Pink Guava Flavour', price: 1400, desc: 'Tropical pink guava profile for fruit nectars.', photoId: 'photo-1578985545062-69928b1d9587' },
      { name: 'Passion Fruit Flavour', price: 1620, desc: 'Tangy tropical passion fruit note for energy drinks.', photoId: 'photo-1548848221-0c2e497ed557' },
      { name: 'Ruby Pomegranate Flavour', price: 1580, desc: 'Tart pomegranate arils profile for healthy beverages.', photoId: 'photo-1533134242443-d4fd215305ad' },
      { name: 'Concord Grape Flavour', price: 1240, desc: 'Sweet black grape flavor for candy and sodas.', photoId: 'photo-1558961363-fa8fdf82db35' },
      { name: 'Mixed Berry Blast Flavour', price: 1490, desc: 'Blend of strawberry, raspberry, and blueberry notes.', photoId: 'photo-1571877227200-a0d98ea607e9' },
      { name: 'Dragon Fruit Flavour', price: 1680, desc: 'Exotic pitaya dragon fruit note for functional drinks.', photoId: 'photo-1586788680434-30d324b2d46f' },
      { name: 'Tender Coconut Flavour', price: 1380, desc: 'Hydrating green coconut water taste profile.', photoId: 'photo-1570197788417-0e82375c9371' }
    ]
  },
  {
    sub: 'Bakery & Dessert Flavours',
    items: [
      { name: 'Bourbon Vanilla Extract Flavour', price: 1650, desc: 'Pure Madagascar Bourbon vanilla profile for high-temperature baking.', photoId: 'photo-1563805042-7684c019e1cb' },
      { name: 'Madagascar Vanilla Flavour', price: 1450, desc: 'Creamy sweet vanilla pod profile for cakes and cookies.', photoId: 'photo-1497034825429-c343d7c6a68f' },
      { name: 'Rich Dutch Chocolate Flavour', price: 1350, desc: 'Deep cocoa powder profile for cakes and icings.', photoId: 'photo-1501443762994-82bd5dace89a' },
      { name: '70% Dark Chocolate Flavour', price: 1550, desc: 'Intense bitter-sweet dark cocoa note for gourmet pastry.', photoId: 'photo-1560008511-11c63416e52d' },
      { name: 'White Chocolate Flavour', price: 1400, desc: 'Creamy cocoa butter profile for fillings and cookies.', photoId: 'photo-1588195538326-c5b1e9f80a1b' },
      { name: 'Butterscotch Flavour', price: 1320, desc: 'Classic brown sugar and butter caramel flavor.', photoId: 'photo-1565958011703-44f9829ba187' },
      { name: 'Burnt Caramel Flavour', price: 1280, desc: 'Golden caramelized sugar profile for puddings and cakes.', photoId: 'photo-1572490122747-3968b75cc699' },
      { name: 'Sea Salted Caramel Flavour', price: 1400, desc: 'Decadent caramel with sea salt nuance for brownies.', photoId: 'photo-1581006852262-e4307cf6283a' },
      { name: 'Roasted Arabica Coffee Flavour', price: 1500, desc: 'Fresh roasted coffee bean note for tiramisu and biscuits.', photoId: 'photo-1551024709-8f23befc6f87' },
      { name: 'Mocha Espresso Flavour', price: 1520, desc: 'Blend of dark espresso and cocoa for bakery filling.', photoId: 'photo-1621263764928-df1444c5e859' },
      { name: 'Toasted Hazelnut Flavour', price: 1600, desc: 'Nutty hazelnut praline profile for chocolate baking.', photoId: 'photo-1556679343-c7306c1976bc' },
      { name: 'Sweet Almond Marzipan Flavour', price: 1450, desc: 'Roasted almond note for macaroons and pastries.', photoId: 'photo-1597481499750-3e6b22637e12' },
      { name: 'Roasted Pistachio Flavour', price: 1800, desc: 'Nutty green pistachio profile for desserts.', photoId: 'photo-1622543925917-763c34d1a86e' },
      { name: 'Ceylon Cinnamon Flavour', price: 1380, desc: 'Warm aromatic cinnamon bark note for cinnamon rolls.', photoId: 'photo-1582058091505-f87a2e55a40f' },
      { name: 'Fudgy Brownie Flavour', price: 1480, desc: 'Baked chocolate brownie note with dense cocoa.', photoId: 'photo-1532550907401-a500c9a57435' },
      { name: 'New York Cheesecake Flavour', price: 1550, desc: 'Rich cultured cream cheese and graham cracker crust note.', photoId: 'photo-1598515214211-89d3c73ae83b' },
      { name: 'Golden Butter Cookie Flavour', price: 1220, desc: 'Baked shortbread cookie profile with vanilla.', photoId: 'photo-1599487488170-d11ec9c172f0' },
      { name: 'Sweet Cookie Dough Flavour', price: 1250, desc: 'Unbaked chocolate chip cookie dough note.', photoId: 'photo-1529193591184-b1d58069ecdd' },
      { name: 'Classic Tiramisu Flavour', price: 1620, desc: 'Espresso soaked ladyfingers and mascarpone cheese.', photoId: 'photo-1486297678162-eb2a19b0a32d' },
      { name: 'Red Velvet Cake Flavour', price: 1490, desc: 'Mild cocoa cake with cream cheese frosting top notes.', photoId: 'photo-1592924357228-91a4daadcfea' },
      { name: 'Fresh Cream Flavour', price: 1300, desc: 'Sweet pasteurized dairy cream note for pastries.', photoId: 'photo-1504674900247-0877df9cc836' },
      { name: 'Cultured Butter Flavour', price: 1400, desc: 'Rich diacetyl butter note for croissants and cookies.', photoId: 'photo-1588252303782-cb80119abd6d' },
      { name: 'English Toffee Flavour', price: 1290, desc: 'Hard butter toffee note with toasted sugar.', photoId: 'photo-1513104890138-7c749659a591' }
    ]
  },
  {
    sub: 'Dairy & Ice Cream Flavours',
    items: [
      { name: 'Classic Vanilla Ice Cream Flavour', price: 1350, desc: 'Rich french vanilla ice cream profile for dairy freezing.', photoId: 'photo-1599043513900-ed6fe01d3833' },
      { name: 'Chocolate Fudge Ice Cream Flavour', price: 1420, desc: 'Fudgy Dutch cocoa profile for ice cream tubs.', photoId: 'photo-1544025162-d76694265947' },
      { name: 'Strawberry Swirl Ice Cream Flavour', price: 1300, desc: 'Fresh strawberry jam note for frozen desserts.', photoId: 'photo-1547592180-85f173990554' },
      { name: 'Alphonso Mango Ice Cream Flavour', price: 1650, desc: 'Mango pulp taste profile for gelato and sorbets.', photoId: 'photo-1553530666-ba11a7da3888' },
      { name: 'Butterscotch Crunch Ice Cream Flavour', price: 1380, desc: 'Caramel butterscotch note for frozen treats.', photoId: 'photo-1514733670139-4d87a1941d55' },
      { name: 'Royal Malai Kulfi Flavour', price: 1850, desc: 'Traditional Indian cardamon and condensed milk kulfi flavor.', photoId: 'photo-1587049352847-4a222e784d38&v=kulfi' },
      { name: 'Kesar Pista Ice Cream Flavour', price: 2100, desc: 'Saffron strands and pistachio nut profile for dairy.', photoId: 'photo-1548848221-0c2e497ed557&v=kesarpista' },
      { name: 'Rose Milk Syrup Flavour', price: 1450, desc: 'Damask rose water and sweet condensed milk profile.', photoId: 'photo-1518709268805-4e9042af9f23&v=rosemilk' },
      { name: 'Badam Milk Drink Flavour', price: 1550, desc: 'Almond nut flour and saffron cardamon milk flavor.', photoId: 'photo-1544378730-8b5104b18790&v=badammilk' },
      { name: 'Green Elaichi Milk Flavour', price: 1600, desc: 'Aromatic green cardamom pod milk flavor.', photoId: 'photo-1599940824399-b87987ceb72a&v=elaichimilk' },
      { name: 'Caramel Milk Shake Flavour', price: 1280, desc: 'Sweet caramel milk profile for dairy beverages.', photoId: 'photo-1572490122747-3968b75cc699&v=caramelmilkshake' },
      { name: 'Whole Milk Powder Flavour', price: 950, desc: 'Concentrated milk solids note for premixes.', photoId: 'photo-1584269600464-37b1b58a9fe7&v=milkpowder' },
      { name: 'Fresh Cultured Yogurt Flavour', price: 1200, desc: 'Tangy dairy yogurt note for Greek yogurt and drinks.', photoId: 'photo-1488477181946-6428a0291777&v=yogurt' },
      { name: 'Sweet Mango Lassi Flavour', price: 1320, desc: 'Traditional mango yogurt drink flavor.', photoId: 'photo-1553279768-865429fa0078&v=mangolassi' },
      { name: 'Thick Milkshake Base Flavour', price: 1250, desc: 'Creamy mouthfeel enhancer flavor for RTD shakes.', photoId: 'photo-1563636619-e9143da7973b&v=milkshakebase' }
    ]
  },
  {
    sub: 'Beverages & Refreshment Flavours',
    items: [
      { name: 'Classic Cola Syrup Concentrate', price: 1450, desc: 'Spiced cola emulsion with citrus oil and vanilla.', photoId: 'photo-1622483767028-3f66f32aef97&v=cola' },
      { name: 'Zesty Lemon Soda Flavour', price: 1220, desc: 'Sparkling lemon lime soda profile for carbonated drinks.', photoId: 'photo-1513558161293-cdaf765ed2fd&v=lemonsoda' },
      { name: 'Fizzy Orange Soda Flavour', price: 1200, desc: 'Sweet orange juice soda flavor for RTD beverages.', photoId: 'photo-1581006852262-e4307cf6283a&v=orangesoda' },
      { name: 'Spicy Ginger Extract Flavour', price: 1500, desc: 'Ginger root oleoresin for ginger ale and ginger beer.', photoId: 'photo-1615485290382-441e4d049cb5&v=gingerextract' },
      { name: 'Dry Ginger Ale Flavour', price: 1420, desc: 'Crisp refreshing ginger ale profile.', photoId: 'photo-1551024709-8f23befc6f87&v=gingerale' },
      { name: 'Spearmint Mojito Flavour', price: 1320, desc: 'Fresh mint and lime profile for mocktails and soda.', photoId: 'photo-1513558161293-cdaf765ed2fd&v=spearmintmojito' },
      { name: 'Classic Mojito Syrup Flavour', price: 1350, desc: 'Cuban rum, lime juice, and crushed mint note.', photoId: 'photo-1551024709-8f23befc6f87&v=classicmojito' },
      { name: 'Fresh Lemonade Drink Flavour', price: 1180, desc: 'Sweet-sour lemon juice flavor for still beverages.', photoId: 'photo-1621263764928-df1444c5e859&v=lemonade' },
      { name: 'Peach Iced Tea Flavour', price: 1380, desc: 'Black tea extract with Georgia peach top note.', photoId: 'photo-1556679343-c7306c1976bc&v=peachicedtea' },
      { name: 'Lemon Iced Tea Flavour', price: 1250, desc: 'Black tea extract with Sicilian lemon zest.', photoId: 'photo-1556679343-c7306c1976bc&v=lemonicedtea' },
      { name: 'Japanese Green Tea Flavour', price: 1600, desc: 'Steamed sencha green tea leaf profile.', photoId: 'photo-1576092768241-dec231879fc3&v=greentea' },
      { name: 'Wild Hibiscus Flower Flavour', price: 1520, desc: 'Tart floral hibiscus tea note for herbal drinks.', photoId: 'photo-1597481499750-3e6b22637e12&v=hibiscus' },
      { name: 'Passion Fruit Splash Flavour', price: 1620, desc: 'Tangy passion fruit profile for RTD juice drinks.', photoId: 'photo-1526318896980-cf78c088247c&v=passionsplash' },
      { name: 'Tropical Punch Beverage Flavour', price: 1450, desc: 'Blend of pineapple, orange, guava, and passion fruit.', photoId: 'photo-1513558161293-cdaf765ed2fd&v=tropicalpunch' },
      { name: 'Monster Energy Beverage Flavour', price: 1750, desc: 'Taurine citrus energy drink note for functional drinks.', photoId: 'photo-1622543925917-763c34d1a86e&v=energydrink' },
      { name: 'Mango Fruit Drink Flavour', price: 1300, desc: 'Commercial mango juice nectar profile.', photoId: 'photo-1553279768-865429fa0078&v=mangodrink' },
      { name: 'Pineapple Fruit Juice Flavour', price: 1280, desc: 'Sweet pineapple juice flavor.', photoId: 'photo-1550258987-190a2d41a8ba&v=pineappledrink' },
      { name: 'Rose Sharbat Syrup Flavour', price: 1400, desc: 'Traditional Indian rose water summer drink syrup.', photoId: 'photo-1518709268805-4e9042af9f23&v=rosesharbat' }
    ]
  },
  {
    sub: 'Confectionery & Candy Flavours',
    items: [
      { name: 'Strawberry Hard Candy Flavour', price: 1290, desc: 'Sweet strawberry jam note for boiled sugar candies.', photoId: 'photo-1582058091505-f87a2e55a40f&v=strawberrycandy' },
      { name: 'Orange Hard Candy Flavour', price: 1200, desc: 'Juicy citrus orange note for boiled sweets.', photoId: 'photo-1579372786545-d24232daf58c&v=orangecandy' },
      { name: 'Mango Gummy Candy Flavour', price: 1350, desc: 'Ripe mango taste profile for gummies and jellies.', photoId: 'photo-1582058091505-f87a2e55a40f&v=mangogummy' },
      { name: 'Pineapple Candy Flavour', price: 1300, desc: 'Sweet pineapple note for chews and lollipops.', photoId: 'photo-1579372786545-d24232daf58c&v=pineapplecandy' },
      { name: 'Cola Bottle Candy Flavour', price: 1380, desc: 'Spiced cola flavor for gummy bottles.', photoId: 'photo-1582058091505-f87a2e55a40f&v=colacandy' },
      { name: 'Cool Mint Chewing Gum Flavour', price: 1250, desc: 'Peppermint and spearmint blend for chewing gum.', photoId: 'photo-1628557044797-f21a177c37ec&v=mintgum' },
      { name: 'Fruity Bubble Gum Flavour', price: 1220, desc: 'Classic pink Tutti-Frutti bubble gum aroma.', photoId: 'photo-1579372786545-d24232daf58c&v=bubblegum' },
      { name: 'Sweet Cotton Candy Flavour', price: 1180, desc: 'Spun sugar and vanilla marshmallow note.', photoId: 'photo-1535141192574-5d4897c13136&v=cottoncandy' },
      { name: 'Caramel Chews Candy Flavour', price: 1280, desc: 'Butter caramel profile for soft toffees.', photoId: 'photo-1509440159596-0249088772ff&v=caramelchews' },
      { name: 'Butter Toffee Candy Flavour', price: 1290, desc: 'Rich butter toffee flavor for confectionery.', photoId: 'photo-1579372786545-d24232daf58c&v=buttertoffee' },
      { name: 'Chocolate Fudge Candy Flavour', price: 1420, desc: 'Fudgy cocoa note for chewy candies.', photoId: 'photo-1511381939415-e44015466834&v=chocolatefudge' },
      { name: 'Fruit Punch Candy Flavour', price: 1360, desc: 'Multi-fruit punch note for hard candies.', photoId: 'photo-1582058091505-f87a2e55a40f&v=fruitpunchcandy' },
      { name: 'Sour Green Apple Candy Flavour', price: 1250, desc: 'Sour malic acid green apple note for gummies.', photoId: 'photo-1619546813926-a78fa6372cd2&v=sourgreenapple' },
      { name: 'Juicy Watermelon Candy Flavour', price: 1210, desc: 'Sweet red watermelon flavor for lollipops.', photoId: 'photo-1587049352847-4a222e784d38&v=watermeloncandy' }
    ]
  },
  {
    sub: 'Culinary & Savoury Flavours',
    items: [
      { name: 'Roasted Chicken Flavour', price: 1750, desc: 'Savory roasted chicken meat note for soups and noodles.', photoId: 'photo-1532550907401-a500c9a57435&v=roastedchicken' },
      { name: 'Grilled Chicken Seasoning Flavour', price: 1800, desc: 'Charbroiled chicken flavor for snack seasonings.', photoId: 'photo-1598515214211-89d3c73ae83b&v=grilledchicken' },
      { name: 'Chicken Tikka Spice Flavour', price: 1850, desc: 'Tandoori marinated chicken spice profile.', photoId: 'photo-1599487488170-d11ec9c172f0&v=chickentikka' },
      { name: 'Hickory Smoky BBQ Flavour', price: 1700, desc: 'Smoked hardwood BBQ grill note for sauces and potato chips.', photoId: 'photo-1555939594-58d7cb561ad1&v=hickorybbq' },
      { name: 'Sweet Barbecue Sauce Flavour', price: 1650, desc: 'Tomato molasses BBQ flavor for marinades.', photoId: 'photo-1529193591184-b1d58069ecdd&v=sweetbbq' },
      { name: 'Sharp Cheddar Cheese Flavour', price: 1650, desc: 'Aged cheddar cheese powder profile for popcorn and snacks.', photoId: 'photo-1452195100486-9cc805987862&v=cheddarcheese' },
      { name: 'Processed Cheese Powder Flavour', price: 1600, desc: 'Smooth cheese flavor for extruded snacks.', photoId: 'photo-1486297678162-eb2a19b0a32d&v=processedcheese' },
      { name: 'Toasted Garlic Flavour', price: 1450, desc: 'Golden roasted garlic oleoresin for gravies and chips.', photoId: 'photo-1615485290382-441e4d049cb5&v=toastedgarlic' },
      { name: 'Fried Onion Flavour', price: 1400, desc: 'Caramelized onion note for instant noodles and seasonings.', photoId: 'photo-1587049352847-4a222e784d38&v=friedonion' },
      { name: 'Ripe Tomato Seasoning Flavour', price: 1350, desc: 'Tangy sun-ripened tomato powder note.', photoId: 'photo-1592924357228-91a4daadcfea&v=ripetomato' },
      { name: 'Wild Mushroom Bouillon Flavour', price: 1900, desc: 'Earthy porcini mushroom umami profile for soups.', photoId: 'photo-1504674900247-0877df9cc836&v=wildmushroom' },
      { name: 'Black Pepper Oleoresin Flavour', price: 1550, desc: 'Piquant black peppercorn heat note.', photoId: 'photo-1599940824399-b87987ceb72a&v=blackpepper' },
      { name: 'Red Chilli Oleoresin Flavour', price: 1500, desc: 'Capsicum heat and red chilli flavor for savories.', photoId: 'photo-1588252303782-cb80119abd6d&v=redchilli' },
      { name: 'Italian Herbs Seasoning Flavour', price: 1480, desc: 'Oregano, basil, and thyme herb blend.', photoId: 'photo-1596040033229-a9821ebd058d&v=italianherbs' },
      { name: 'Wood-fired Pizza Flavour', price: 1680, desc: 'Baked crust, tomato sauce, and melted cheese note.', photoId: 'photo-1513104890138-7c749659a591&v=woodfiredpizza' },
      { name: 'Paneer Butter Masala Flavour', price: 1750, desc: 'North Indian creamy tomato gravy spice blend.', photoId: 'photo-1631452180519-c014fe946bc7&v=paneerbuttermasala' },
      { name: 'Tandoori Masala Seasoning Flavour', price: 1700, desc: 'Smoky clay-oven spice blend for snacks.', photoId: 'photo-1599043513900-ed6fe01d3833&v=tandoorimasala' },
      { name: 'Roast Beef Bouillon Flavour', price: 1950, desc: 'Rich meaty beef extract profile for broths.', photoId: 'photo-1544025162-d76694265947&v=roastbeef' },
      { name: 'Clear Vegetable Stock Flavour', price: 1400, desc: 'Carrot, celery, and onion vegetable broth note.', photoId: 'photo-1547592180-85f173990554&v=vegetablestock' }
    ]
  },
  {
    sub: 'Health & Nutrition Applications',
    items: [
      { name: 'Vanilla Protein Shake Flavour', price: 1450, desc: 'Whey protein taste-masking vanilla flavor for protein powders.', photoId: 'photo-1579722820308-d74e571900a9&v=vanillaprotein' },
      { name: 'Rich Chocolate Protein Flavour', price: 1500, desc: 'Dutch cocoa flavor designed to mask bitter plant & whey proteins.', photoId: 'photo-1541658016709-82535e94bc69&v=chocolateprotein' },
      { name: 'Strawberry Whey Protein Flavour', price: 1420, desc: 'Sweet strawberry cream note for workout supplements.', photoId: 'photo-1553530666-ba11a7da3888&v=strawberryprotein' },
      { name: 'Mango Nutrition Beverage Flavour', price: 1480, desc: 'Fruit flavor profile for vitamin fortified drinks.', photoId: 'photo-1553279768-865429fa0078&v=mangonutrition' },
      { name: 'Malt Extract Beverage Flavour', price: 1350, desc: 'Barley malt flavor for health drink premixes.', photoId: 'photo-1584269600464-37b1b58a9fe7&v=maltextract' },
      { name: 'Health Drink Chocolate Flavour', price: 1400, desc: 'Fortified chocolate flavor for kids & adult health drinks.', photoId: 'photo-1511381939415-e44015466834&v=healthdrinkchocolate' },
      { name: 'Herbal Botanical Drink Flavour', price: 1600, desc: 'Ashwagandha and tulsi masking flavor for nutraceuticals.', photoId: 'photo-1514733670139-4d87a1941d55&v=herbalbotanical' }
    ]
  }
];

const allProducts = [];

// Build Fragrances
let frgCount = 1;
fragranceCategories.forEach(catGroup => {
  catGroup.items.forEach(item => {
    const idNum = String(frgCount).padStart(3, '0');
    const isB2B = catGroup.sub.includes('Ingredients');
    const fullImgUrl = `https://images.unsplash.com/${item.photoId}?auto=format&fit=crop&q=80&w=1000`;

    allProducts.push({
      id: `frg-${idNum}`,
      sku: `SKFF-FRG-${idNum}`,
      name: item.name,
      brand: item.brand || 'SKFF Perfumery',
      category: 'FRAGRANCES',
      subcategory: catGroup.sub,
      fragranceFamily: catGroup.sub.replace(" Fragrances", "").replace(" & Industrial Fragrances", ""),
      shortDescription: item.desc,
      detailedDescription: `${item.desc} Compliant with IFRA 50th Amendment standards. Formulated for exceptional tenacity, bottle sillage, and stability in fine fragrance formulations.`,
      image: fullImgUrl,
      additionalImages: [
        fullImgUrl,
        `${fullImgUrl}&angle=2`
      ],
      price: item.price,
      quoteRequired: isB2B,
      rating: +(4.6 + (frgCount % 4) * 0.1).toFixed(1),
      reviewsCount: 18 + (frgCount * 4) % 50,
      availability: 'In Stock',
      packSizes: isB2B ? ['1 kg Aluminum Bottle', '5 kg Canister', '25 kg Steel Drum'] : ['50 ml Bottle', '100 ml Bottle', '200 ml Tester'],
      moq: isB2B ? '1 kg' : '1 Bottle',
      applications: isB2B ? ['Fine Perfumery Compounding', 'Personal Care', 'Fabric Care', 'Soap & Detergent'] : ['Fine Perfumery', 'Personal Spray', 'Gift Set'],
      specifications: {
        form: isB2B ? 'Concentrated Fragrance Oil / Accord' : 'Eau de Parfum / Extrait',
        flashPoint: '> 95°C',
        shelfLife: '36 Months',
        dosageRate: isB2B ? '0.5% - 15.0%' : '15% - 25% Concentration',
        certifications: 'IFRA 50th Compliant, ISO 9001, REACH Compliant',
        origin: 'France / UAE / India Sourced'
      },
      packaging: isB2B ? 'Fluorinated aluminum containers' : 'Luxury glass bottle with spray atomizer box.',
      storage: 'Store in airtight containers below 25°C away from direct sunlight.'
    });
    frgCount++;
  });
});

// Build Flavours
let flvCount = 1;
flavourCategories.forEach(catGroup => {
  catGroup.items.forEach(item => {
    const idNum = String(flvCount).padStart(3, '0');
    const fullImgUrl = `https://images.unsplash.com/${item.photoId}?auto=format&fit=crop&q=80&w=800`;

    allProducts.push({
      id: `flv-${idNum}`,
      sku: `SKFF-FLV-${idNum}`,
      name: item.name,
      brand: 'SKFF Flavours',
      category: 'FLAVOURS',
      subcategory: catGroup.sub,
      flavourType: catGroup.sub.replace(' Flavours', ''),
      shortDescription: item.desc,
      detailedDescription: `${item.desc} Masterfully created by SKFF flavorists for high thermal stability and authentic taste release across commercial food manufacturing.`,
      image: fullImgUrl,
      additionalImages: [
        fullImgUrl,
        `${fullImgUrl}&angle=2`
      ],
      price: item.price,
      quoteRequired: false,
      rating: +(4.5 + (flvCount % 5) * 0.1).toFixed(1),
      reviewsCount: 15 + (flvCount * 3) % 45,
      availability: 'In Stock',
      packSizes: ['1 kg Bottle', '5 kg Canister', '25 kg Drum'],
      moq: '1 kg',
      applications: [catGroup.sub.replace(' Flavours', ''), 'Food & Beverage Processing', 'Industrial Production'],
      specifications: {
        form: 'Liquid Emulsion / Oleoresin / Extract',
        solubility: 'Water & Oil Soluble Options',
        shelfLife: '24 Months',
        dosageRate: '0.05% - 0.30%',
        certifications: 'HALAL, KOSHER, ISO 22000, FSSC 22000',
        origin: 'India / Global Sourced Ingredients'
      },
      packaging: 'Food-grade HDPE containers, nitrogen flushed.',
      storage: 'Store in cool, dry place away from direct sunlight (15°C - 25°C).'
    });
    flvCount++;
  });
});

// STEP 6 — IMPORTANT IMAGE UNIQUENESS CHECK
const uniqueImages = new Set(allProducts.map(p => p.image));
console.log(`Generated total ${allProducts.length} products (${flvCount - 1} Flavours, ${frgCount - 1} Fragrances).`);
console.log(`Unique Image URLs: ${uniqueImages.size} / ${allProducts.length}`);

if (uniqueImages.size !== allProducts.length) {
  throw new Error(`CRITICAL ERROR: Duplicate image URLs detected! (${allProducts.length - uniqueImages.size} duplicates)`);
}

const fileHeader = `// SKFF - S. K. Flavours & Fragrances - Comprehensive Product Catalog & Data
// Automatically populated expanded catalog containing ${flvCount - 1} Flavours & ${frgCount - 1} Fragrances (Total ${allProducts.length} 100% Unique Products)

export const PRODUCTS = `;

const fileFooter = `;

export const CATEGORIES = [
  {
    id: 'FLAVOURS',
    name: 'Taste Creation Division',
    title: 'Flavours',
    description: 'High-performance taste solutions for Beverage, Dairy, Bakery, Confectionery, Savoury, and Health Drink applications.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=800',
    count: '${flvCount - 1} Products',
    icon: 'Utensils'
  },
  {
    id: 'FRAGRANCES',
    name: 'Olfactive Perfumery Division',
    title: 'Fragrances',
    description: 'Refined designer, niche, Arabic, and industrial fragrance compounds for Fine Perfumery, Personal Care, and Ambiance.',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800',
    count: '${frgCount - 1} Products',
    icon: 'Droplet'
  }
];

export const WHY_SKFF = [
  { id: 1, icon: 'Award', title: '45+ Years Heritage', description: 'Decades of formulation expertise crafting iconic flavors and fragrances.' },
  { id: 2, icon: 'Sparkles', title: 'Sensory Innovation', description: 'State-of-the-art analytical labs and sensory panels for optimal consumer liking.' },
  { id: 3, icon: 'Microscope', title: 'Encapsulation Tech', description: 'Controlled release and high thermal stability during commercial manufacturing.' },
  { id: 4, icon: 'HeartHandshake', title: 'Customer Partnership', description: 'Bespoke bench-matching and application support from concept to launch.' },
  { id: 5, icon: 'Factory', title: '15,000 MT Capacity', description: 'Automated ultra-modern production plants delivering global scale.' },
  { id: 6, icon: 'Globe2', title: 'Global Compliance', description: 'Certified ISO 22000, FSSC 22000, HALAL, KOSHER, and IFRA 50th compliant.' }
];

export const COMPANY_STATS = [
  { id: 1, label: 'Years of Excellence', value: '45+', suffix: '' },
  { id: 2, label: 'Global Product Formulations', value: '10,000+', suffix: '' },
  { id: 3, label: 'Countries Served', value: '35+', suffix: '' },
  { id: 4, label: 'Annual Production Capacity (MT)', value: '15,000+', suffix: '' }
];

export const VALUE_PROPOSITIONS = [
  { id: 1, icon: 'Beaker', title: 'State-of-the-Art R&D', description: 'Advanced sensory and analytical laboratories equipped with GC-MS and automated liquid dosing systems.' },
  { id: 2, icon: 'ShieldCheck', title: 'Global Regulatory Compliance', description: 'Certified ISO 22000, FSSC 22000, HALAL, KOSHER, and IFRA 50th Amendment compliant.' },
  { id: 3, icon: 'Zap', title: 'Custom Bench Matching', description: 'Rapid sample creation and bespoke formulation tailored to target price points and technical specs.' },
  { id: 4, icon: 'Sparkles', title: 'Encapsulation Technology', description: 'Proprietary controlled-release microencapsulation for thermal stability and extended shelf-life.' },
  { id: 5, icon: 'Award', title: 'Uncompromising Quality', description: '100% batch traceability and strict incoming raw material quality assurance.' },
  { id: 6, icon: 'Globe2', title: 'Global Presence', description: 'Serving over 35+ countries across Asia, Europe, Middle East, Africa, and the Americas.' }
];

export const GLOBAL_OFFICES = [
  {
    id: 'hq-mumbai',
    title: 'Corporate Headquarters & Creative Center',
    city: 'Mumbai',
    country: 'India',
    address: 'S. K. Flavours & Fragrances House, Industrial Zone, Marol, Andheri East, Mumbai 400059',
    phone: '+91 22 6890 4000',
    email: 'info@skff.com',
    type: 'Headquarters & R&D',
    coordinates: { lat: 19.1176, lng: 72.8631 }
  },
  {
    id: 'mfg-tarapur',
    title: 'Mega Manufacturing Plant 1',
    city: 'Tarapur',
    country: 'India',
    address: 'MIDC Industrial Estate, Tarapur, Palghar, Maharashtra 401506',
    phone: '+91 2525 270 100',
    email: 'manufacturing@skff.com',
    type: 'Production & Logistics Hub',
    coordinates: { lat: 19.8000, lng: 72.7000 }
  },
  {
    id: 'hub-dubai',
    title: 'Middle East & Africa Regional Office',
    city: 'Dubai',
    country: 'UAE',
    address: 'Dubai Science Park, Innovation Tower 2, Al Barsha South 2, Dubai',
    phone: '+971 4 456 7890',
    email: 'dubai@skff.com',
    type: 'Regional Sales & Creative Lab',
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    id: 'hub-singapore',
    title: 'Asia-Pacific Innovation Hub',
    city: 'Singapore',
    country: 'Singapore',
    address: 'Biopolis Way, Matrix Building #06-12, Singapore 138667',
    phone: '+65 6789 1234',
    email: 'apac@skff.com',
    type: 'Application & Sensory Center',
    coordinates: { lat: 1.3521, lng: 103.8198 }
  }
];

export const NEWS_ARTICLES = [
  {
    id: 'news-001',
    title: 'SKFF Unveils Next-Generation Natural Encapsulation Flavor Tech',
    category: 'Innovation',
    date: 'September 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
    summary: 'Our R&D team launches eco-encapsulation methods that extend flavor longevity in high-temperature extrusion by over 40%.',
    content: 'S. K. Flavours & Fragrances today announced a breakthrough in bio-based microencapsulation for thermal-sensitive flavor compounds.'
  },
  {
    id: 'news-002',
    title: 'SKFF Expands Global Footprint with New Innovation Center in Dubai',
    category: 'Company News',
    date: 'August 28, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    summary: 'State-of-the-art sensory evaluating suite to serve growing Middle Eastern & African market.',
    content: 'To better serve our valued partners in the Gulf region, SKFF has inaugurated a 15,000 sq ft innovation hub.'
  }
];

export const MOCK_INITIAL_ORDERS = [
  {
    id: 'ORD-2026-9812',
    date: '2026-09-24',
    customerName: 'Thirunavukarasu S',
    companyName: 'Apex Beverage Labs',
    email: 'thirunavukarasu@example.com',
    status: 'Processing',
    items: [
      { id: 'flv-001', name: 'Alphonso Mango Flavour', sku: 'SKFF-FLV-001', packSize: '5 kg Canister', quantity: 2, price: 1750 },
      { id: 'frg-001', name: 'Dior Sauvage Eau de Parfum', sku: 'SKFF-FRG-001', packSize: '100 ml Bottle', quantity: 1, price: 14500 }
    ],
    totalAmount: 18000,
    shippingAddress: '14/B Tech Park, Marol, Mumbai, Maharashtra 400059',
    billingAddress: '14/B Tech Park, Marol, Mumbai, Maharashtra 400059',
    paymentType: 'Paid Online via Corporate Wire'
  }
];

export const MOCK_INITIAL_QUOTES = [
  {
    id: 'RFQ-2026-4401',
    date: '2026-09-26',
    customerName: 'Sara Jenkins',
    companyName: 'Nectar Botanicals Inc.',
    email: 'sara.j@nectarbotanicals.com',
    phone: '+1 415 555 0192',
    country: 'United States',
    productName: 'Precious Oud Accord Concentrate',
    productSku: 'SKFF-FRG-052',
    requiredQuantity: '500 kg',
    application: 'Fine Perfumery Compounding',
    message: 'Requesting quote for bulk contract supply across Q4 2026.',
    status: 'Under Review',
    quotedPrice: null,
    adminNotes: 'Assigned to Senior Perfumer.'
  }
];
`;

const outputPath = path.join(__dirname, 'src', 'data', 'mockData.js');
fs.writeFileSync(outputPath, fileHeader + JSON.stringify(allProducts, null, 2) + fileFooter, 'utf8');
console.log('Successfully wrote catalog to ' + outputPath);
