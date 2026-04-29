export const menuItems = [
  { id:1, name:"Classic Smash Burger", description:"Juicy smashed beef patty with cheddar, pickles, onion & special sauce", price:199, category:"burgers", image:"/images/hero-burger.png", isVeg:false, spiceLevel:1, customizations:{ sizes:["Regular","Large"], extras:["Extra Cheese +₹30","Bacon +₹50","Jalapeños +₹20"] } },
  { id:2, name:"Smoky BBQ Burger", description:"Flame-grilled patty, crispy onion rings, smoky BBQ sauce & lettuce", price:249, category:"burgers", image:"/images/hero-burger.png", isVeg:false, spiceLevel:2, customizations:{ sizes:["Regular","Large"], extras:["Extra Cheese +₹30","Double Patty +₹80"] } },
  { id:3, name:"Fiery Inferno Burger", description:"Triple pepper patty with ghost pepper sauce, habanero slaw & pepper jack", price:279, category:"burgers", image:"/images/hero-burger.png", isVeg:false, spiceLevel:3, customizations:{ sizes:["Regular","Large"], extras:["Cool Ranch Dip +₹20"] } },
  { id:4, name:"Veggie Crunch Burger", description:"Crispy vegetable patty with fresh greens, tomato & garlic mayo", price:169, category:"burgers", image:"/images/hero-burger.png", isVeg:true, spiceLevel:1, customizations:{ sizes:["Regular","Large"], extras:["Extra Cheese +₹30","Avocado +₹40"] } },
  { id:5, name:"Mushroom Swiss Burger", description:"Grilled portobello mushroom, Swiss cheese, caramelized onions", price:189, category:"burgers", image:"/images/hero-burger.png", isVeg:true, spiceLevel:1, customizations:{ sizes:["Regular","Large"], extras:["Extra Cheese +₹30"] } },
  { id:6, name:"Burger Combo Meal", description:"Classic burger + regular fries + medium drink", price:299, category:"combos", image:"/images/food-spread.png", isVeg:false, spiceLevel:1, customizations:{ sizes:["Regular","Upsize +₹50"], extras:["Upgrade to Onion Rings +₹30"] } },
  { id:7, name:"Family Feast Box", description:"4 burgers + 2 large fries + 4 drinks + 8 nuggets", price:999, category:"combos", image:"/images/food-spread.png", isVeg:false, spiceLevel:1, customizations:{ sizes:["Standard"], extras:["Extra Nuggets x4 +₹60"] } },
  { id:8, name:"Veggie Combo Meal", description:"Veggie burger + fries + medium drink", price:269, category:"combos", image:"/images/food-spread.png", isVeg:true, spiceLevel:1, customizations:{ sizes:["Regular","Upsize +₹50"], extras:[] } },
  { id:9, name:"Duo Deal", description:"2 classic burgers + 1 large fries + 2 drinks", price:499, category:"combos", image:"/images/food-spread.png", isVeg:false, spiceLevel:1, customizations:{ sizes:["Standard"], extras:["Upgrade Burgers +₹60"] } },
  { id:10, name:"Crispy Fries", description:"Golden, crispy seasoned fries with ketchup", price:99, category:"sides", image:"/images/food-spread.png", isVeg:true, spiceLevel:1, customizations:{ sizes:["Regular","Large"], extras:["Cheese Dip +₹30","Peri Peri Seasoning +₹15"] } },
  { id:11, name:"Onion Rings", description:"Beer-battered onion rings, golden & crunchy", price:119, category:"sides", image:"/images/food-spread.png", isVeg:true, spiceLevel:1, customizations:{ sizes:["6 Pcs","12 Pcs"], extras:["Ranch Dip +₹25"] } },
  { id:12, name:"Chicken Nuggets", description:"8 crispy chicken nuggets with dipping sauce", price:149, category:"sides", image:"/images/food-spread.png", isVeg:false, spiceLevel:1, customizations:{ sizes:["8 Pcs","12 Pcs"], extras:["BBQ Sauce +₹15","Honey Mustard +₹15"] } },
  { id:13, name:"Loaded Nachos", description:"Tortilla chips topped with cheese, jalapeños, salsa & sour cream", price:179, category:"sides", image:"/images/food-spread.png", isVeg:true, spiceLevel:2, customizations:{ sizes:["Regular","Large"], extras:["Extra Cheese +₹30","Chicken +₹50"] } },
  { id:14, name:"Coleslaw", description:"Fresh creamy coleslaw with carrot & cabbage", price:69, category:"sides", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Regular"], extras:[] } },
  { id:15, name:"Coca-Cola", description:"Ice-cold Coca-Cola", price:59, category:"drinks", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Medium","Large"], extras:[] } },
  { id:16, name:"Mango Shake", description:"Thick & creamy mango milkshake", price:129, category:"drinks", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Regular","Large"], extras:["Whipped Cream +₹20"] } },
  { id:17, name:"Oreo Shake", description:"Rich chocolate & Oreo milkshake", price:149, category:"drinks", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Regular","Large"], extras:["Extra Oreo +₹20"] } },
  { id:18, name:"Fresh Lime Soda", description:"Refreshing lime soda – sweet or salted", price:79, category:"drinks", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Regular"], extras:[] } },
  { id:19, name:"Iced Coffee", description:"Cold brew coffee with cream and ice", price:139, category:"drinks", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Regular","Large"], extras:["Vanilla Shot +₹20"] } },
  { id:20, name:"Chocolate Lava Cake", description:"Warm chocolate cake with a gooey molten center", price:149, category:"desserts", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Single"], extras:["Ice Cream Scoop +₹40"] } },
  { id:21, name:"Brownie Sundae", description:"Fudge brownie with vanilla ice cream, chocolate sauce & nuts", price:179, category:"desserts", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Single"], extras:["Extra Scoop +₹40"] } },
  { id:22, name:"Churros", description:"Crispy cinnamon sugar churros with chocolate dip", price:129, category:"desserts", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["4 Pcs","6 Pcs"], extras:["Caramel Dip +₹20"] } },
  { id:23, name:"Apple Pie", description:"Warm apple pie with cinnamon & flaky crust", price:99, category:"desserts", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["Single"], extras:["Ice Cream +₹40"] } },
  { id:24, name:"Egg & Cheese Muffin", description:"Toasted English muffin with scrambled egg & melted cheese", price:129, category:"breakfast", image:"/images/food-spread.png", isVeg:false, spiceLevel:0, customizations:{ sizes:["Single","Combo +₹60"], extras:["Bacon +₹30","Hash Brown +₹25"] } },
  { id:25, name:"Pancake Stack", description:"Fluffy buttermilk pancakes with maple syrup & butter", price:159, category:"breakfast", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["3 Pcs","5 Pcs"], extras:["Berries +₹30","Whipped Cream +₹20"] } },
  { id:26, name:"Breakfast Burrito", description:"Flour tortilla stuffed with eggs, cheese, beans & salsa", price:179, category:"breakfast", image:"/images/food-spread.png", isVeg:false, spiceLevel:2, customizations:{ sizes:["Regular","Large"], extras:["Sour Cream +₹20","Guac +₹40"] } },
  { id:27, name:"Hash Browns", description:"Crispy golden hash brown patties", price:79, category:"breakfast", image:"/images/food-spread.png", isVeg:true, spiceLevel:0, customizations:{ sizes:["2 Pcs","4 Pcs"], extras:["Ketchup +₹0"] } },
  { id:28, name:"Masala Omelette Wrap", description:"Spiced omelette with onion, tomato, green chili in a wrap", price:139, category:"breakfast", image:"/images/food-spread.png", isVeg:false, spiceLevel:2, customizations:{ sizes:["Regular"], extras:["Extra Cheese +₹30"] } },
];

export const categories = [
  { id:"burgers", label:"🍔 Burgers" },
  { id:"combos", label:"🍱 Combos" },
  { id:"sides", label:"🍟 Sides" },
  { id:"drinks", label:"🥤 Drinks" },
  { id:"desserts", label:"🍫 Desserts" },
  { id:"breakfast", label:"🍳 Breakfast" },
];

export const locations = [
  { id:1, name:"FlameGrill Downtown", address:"123 MG Road, Connaught Place, New Delhi 110001", hours:"10:00 AM – 11:00 PM", phone:"+91 11 2345 6789", city:"Delhi", lat:28.6315, lng:77.2167 },
  { id:2, name:"FlameGrill Koramangala", address:"45 80 Feet Road, Koramangala, Bangalore 560034", hours:"10:00 AM – 12:00 AM", phone:"+91 80 4567 8901", city:"Bangalore", lat:12.9352, lng:77.6245 },
  { id:3, name:"FlameGrill Bandra", address:"78 Linking Road, Bandra West, Mumbai 400050", hours:"9:00 AM – 11:30 PM", phone:"+91 22 6789 0123", city:"Mumbai", lat:19.0596, lng:72.8295 },
  { id:4, name:"FlameGrill Jubilee Hills", address:"Plot 22, Road No. 36, Jubilee Hills, Hyderabad 500033", hours:"10:00 AM – 11:00 PM", phone:"+91 40 2345 6789", city:"Hyderabad", lat:17.4326, lng:78.4071 },
  { id:5, name:"FlameGrill Anna Nagar", address:"15 2nd Avenue, Anna Nagar, Chennai 600040", hours:"10:00 AM – 10:30 PM", phone:"+91 44 5678 9012", city:"Chennai", lat:13.0878, lng:80.2089 },
];

export const testimonials = [
  { id:1, name:"Priya Sharma", text:"Best burgers in town! The Smoky BBQ is absolutely incredible. Fast delivery too!", rating:5, avatar:"PS" },
  { id:2, name:"Rahul Verma", text:"Family Feast Box is insane value. Perfect for weekend dinners with the kids.", rating:5, avatar:"RV" },
  { id:3, name:"Ananya Patel", text:"Love the veggie options here. The Mushroom Swiss Burger is chef's kiss! 🤌", rating:4, avatar:"AP" },
  { id:4, name:"Vikram Singh", text:"Fiery Inferno Burger is not for the faint-hearted! Absolutely loved the heat.", rating:5, avatar:"VS" },
  { id:5, name:"Meera Iyer", text:"Clean restaurant, great food, friendly staff. Our go-to place every weekend!", rating:5, avatar:"MI" },
  { id:6, name:"Arjun Reddy", text:"The churros and Oreo shake combo is heavenly. Best dessert pairing ever!", rating:4, avatar:"AR" },
];

export const offers = [
  { id:1, title:"Buy 1 Get 1 Free!", description:"Every Tuesday, buy any burger and get one absolutely free. Bring a friend!", validity:"Valid every Tuesday", code:"BOGO-TUES", color:"#E63946" },
  { id:2, title:"Family Feast 20% Off", description:"Get 20% off on all Family Feast boxes. Feed the whole crew for less!", validity:"Valid till May 31, 2026", code:"FAMILY20", color:"#FF8C00" },
  { id:3, title:"Free Delivery Week", description:"Zero delivery charges on all orders above ₹299 this week only!", validity:"Limited time offer", code:"FREEDEL", color:"#FFD60A" },
  { id:4, title:"Student Special", description:"Show your student ID and get 15% off on any combo meal. Study fuel!", validity:"Ongoing", code:"STUDENT15", color:"#00C853" },
  { id:5, title:"Late Night Bites", description:"Flat ₹50 off on all orders placed after 10 PM. Night owls, this one's for you!", validity:"Daily after 10 PM", code:"NIGHT50", color:"#9C27B0" },
  { id:6, title:"App Exclusive – ₹100 Off", description:"Download the FlameGrill app and get ₹100 off your first order!", validity:"First order only", code:"APP100", color:"#2196F3" },
];

export const faqs = [
  { q:"What are your delivery hours?", a:"We deliver from 10:00 AM to 11:00 PM daily. Late-night delivery is available at select locations until midnight." },
  { q:"Do you offer vegetarian options?", a:"Absolutely! We have a dedicated vegetarian menu including the Veggie Crunch Burger, Mushroom Swiss Burger, and many sides and desserts." },
  { q:"How can I track my order?", a:"Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track it in real-time on our app." },
  { q:"What is your refund policy?", a:"If you're not satisfied with your order, contact us within 30 minutes of delivery. We'll either replace the item or issue a full refund." },
  { q:"Do you cater for events?", a:"Yes! We offer catering for parties, corporate events, and gatherings. Contact us at events@flamegrill.com for custom packages." },
  { q:"Are there any allergens in your food?", a:"Our menu items may contain common allergens including gluten, dairy, eggs, soy, and nuts. Please check with our staff for specific allergen information." },
];
