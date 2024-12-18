// node database.js <username> <password>
const mongoose = require('mongoose');

const [username, password] = process.argv.slice(2);

if (!username || !password) {
  console.error('Error: Please provide MongoDB username and password.');
  console.log('Usage: node database.js <username> <password>');
  process.exit(1);
  
}

const uri = `mongodb+srv://${username}:${password}@cluster0.msc9a.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
db.once('open', () => { 
  console.log('Connected to MongoDB Atlas');
});

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number 
});

const Item = mongoose.model('Item', itemSchema);

async function run() {
  const newItem = new Item({ name: 'Apple', price: 1.5 });
  await newItem.save();
  console.log('Item saved:', newItem);

  const items = await Item.find();
  console.log('All items:', items);

  await Item.deleteMany();
  console.log('All items deleted');
}

run().catch(err => console.error(err));