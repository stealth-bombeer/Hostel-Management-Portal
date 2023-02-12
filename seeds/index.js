const mongoose= require('mongoose');
const cities= require('./cities');
const Campground= require('../models/campground');
const {places,descriptors}= require('./seedHelpers');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', 
{useNewUrlParser: true, useUnifiedTopology: true});

const db= mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once("open", () => {
   console.log("Database connected");
});

const sample= array => array[Math.floor(Math.random()*array.length)]; 

const seedDB= async () => {
    await Campground.deleteMany({});
    for(let i=0; i<50; i++){
        const random1000= Math.floor(Math.random()*1000);
        const price=Math.floor(Math.random() * 20) + 10;
        const camp= new Campground({
            author: '639071d92023e2b1bb17cd65',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dtm1hhmps/image/upload/v1670560418/YelpCamp/zeydljhlzk54rudrvln1.jpg',
                  filename: 'YelpCamp/zeydljhlzk54rudrvln1',
                  
                },
                {
                  url: 'https://res.cloudinary.com/dtm1hhmps/image/upload/v1670560421/YelpCamp/d4ktbn6tr2bzuzxmboz2.jpg',
                  filename: 'YelpCamp/d4ktbn6tr2bzuzxmboz2',
                 
                },
                {
                  url: 'https://res.cloudinary.com/dtm1hhmps/image/upload/v1670560420/YelpCamp/dpukwzmljbd3qonapon1.jpg',
                  filename: 'YelpCamp/dpukwzmljbd3qonapon1',
                 
                }
              ],
            //image: 'https://source.unsplash.com/collection/483251',
            description:"Amazing Experience of Camping!",
            price
        })
        await camp.save();
    }
}
seedDB().then( () => {
    mongoose.connection.close();
})








