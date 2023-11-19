const axios = require('axios');

const config = {
    Headers:{
        'Content-Type': 'application/json',
    },
    data: {},
    params: {
        "resourceid" : "server-1234"
    }
}

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.post('http://localhost:3000/getroute', {"resourceid" : "server-1234"})
        .then(function(response){
            const data = response.data.result;
            console.log(data);
            res.render('index.ejs', { result : data});
        })
        .catch(err =>{
            res.send(err);
        })
}