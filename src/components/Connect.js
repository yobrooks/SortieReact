import React, { Component } from 'react';

class Connect extends Component {
    
}

var Connect = require('tedious').connection;
var config = {  
    server: 'sortiedatabase.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'SortieDB2',
            password: 'Bigbrain1'  
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'SortieDBTable'  //update me
    }
}; 

var connection = new Connect(config);