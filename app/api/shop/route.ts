// import dbConnect from '@/lib/dbConnect';
// import Shop from '@/models/Shop';

// // Function to add a new shop
// export async function addShop() {
//   try {
//     // Ensure database connection
//     await dbConnect();

//     // Create a new shop instance
//     const newShop = new Shop({
//       imgShop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaHJGH6LgsB73WPtJ_VlpQF8rYMaVZJl1KQ&s', // URL of shop image
//       nameShop: 'มาดูของ', // Shop name
//       description: 'ร้านขายของชำทั่วไป', // Optional description
//       location: 'กรุงเทพมหานคร', // Optional location
//     });

//     // Save the shop to the database
//     const savedShop = await newShop.save();
//     console.log('Shop added successfully:', savedShop);
//     return savedShop;
//   } catch (error) {
//     console.error('Error adding shop:', error);
//     throw error;
//   }
// }

// // Function to add multiple shops
// export async function addMultipleShops() {
//   try {
//     // Ensure database connection
//     await dbConnect();

//     const shopsToAdd = [
//       {
//         imgShop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaHJGH6LgsB73WPtJ_VlpQF8rYMaVZJl1KQ&s',
//         nameShop: 'ร้านค้าที่ 1',
//         description: 'ร้านขายของชำ',
//         location: 'กรุงเทพ',
//       },
//       {
//         imgShop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaHJGH6LgsB73WPtJ_VlpQF8rYMaVZJl1KQ&s',
//         nameShop: 'ร้านค้าที่ 2',
//         description: 'ร้านอาหาร',
//         location: 'เชียงใหม่',
//       }
//     ];

//     // Insert multiple shops
//     const savedShops = await Shop.insertMany(shopsToAdd);
//     console.log('Shops added successfully:', savedShops);
//     return savedShops;
//   } catch (error) {
//     console.error('Error adding shops:', error);
//     throw error;
//   }
// }

// // If you want to run this directly (e.g., in a script)
// // Uncomment and use as needed
// // addShop().catch(console.error);
// // addMultipleShops().catch(console.error);