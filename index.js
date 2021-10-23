const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;/*any 4digit number*/


 app.get('/', (req, res) =>{
    res.send('hello from my first evar node .I am super excied this id ')
});

const users=[
    {id: 0, name: 'Sabana', email: 'sabana@gmail.com', phone: '017888888888'},
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '017888888888'},
    {id: 2, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888888'},
    {id: 3, name: 'Srabonti', email: 'sabana@gmail.com', phone: '017888888888'},
    {id: 4, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888888'},
    {id: 5, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888'},
    {id: 6, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888'},
    {id: 7, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888'},
    {id: 8, name: 'Sabnurr', email: 'sabana@gmail.com', phone: '017888888'},
]

app.get('/users',(req,res)=>{
const search = req.query.search;
//use queary parameter
  if(search){
     const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
     res.send(searchResult);
  }
  else{
    res.send(users)
  }
});

//app.Method
app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
 console.log('hitting the post', req.body);
//  res.send(JSON.stringify(newUser))
res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req,res)=>{/*id type of parameter and its changable */
    const id = req.params.id;  
    const user = users[id]
    console.log(req.params.id)
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'orenges', 'bannana'])
})
app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('YummyYummy tok marka fazli');
})


app.listen(port, ()=>{
    console.log('listing to port', port)
});
