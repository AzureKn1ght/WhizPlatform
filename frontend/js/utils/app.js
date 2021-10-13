const app = {
  deepExtend: function (a, b) {
    for (const prop in b) {
      if (typeof b[prop] === 'object') {
        a[prop] = b[prop] instanceof Array ? [] : {};
        this.deepExtend(a[prop], b[prop]);
      } else {
        a[prop] = b[prop];
      }
    }
  },
  query: function (options) {
    const config = {
      method: 'GET',
      async: true,
      header: {
        type: 'Content-type',
        value: 'application/json'
      },
      data: ''
    };

    this.deepExtend(config, options);

    return new Promise( function (resolve, reject) {
      const xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (xhttp.readyState !== 4) return;

        if (xhttp.status === 200) {
          resolve(xhttp.responseText);
        } else {
          reject({
            status: xhttp.status,
            statusText: xhttp.statusText
          });
        }
      };
  
      xhttp.open(config.method, config.url, config.async);
      xhttp.setRequestHeader(config.header.type, config.header.value);
  
      if (config.method === 'GET') {
        xhttp.send();
      } else if (config.method === 'POST') {
        xhttp.send(config.data);
      }
    });
  },
  querySelector: function (selector, callback) {
    const el = document.querySelectorAll(selector);

    if (el.length) {
      callback(el);
    }
  },
  liquidify: function (el) {
    const image = el.querySelector('img'),
          imageSrc = image.getAttribute('src');
  
    image.style.display = 'none';
    el.style.background = `url("${imageSrc}") no-repeat center`;
    el.style.backgroundSize = 'cover';
  },
  liquidifyStatic: function (figure, image) {
    image.style.display = 'none';
    figure.style.background = `url("${image.getAttribute('src')}") no-repeat center`;
    figure.style.backgroundSize = 'cover';
  },
  dateDiff: function (date1, date2 = new Date()) {
    const timeDiff = Math.abs(date1.getTime() - date2.getTime()),
          secondsDiff = Math.ceil(timeDiff / (1000)),
          minutesDiff = Math.floor(timeDiff / (1000 * 60)),
          hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60)),
          daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7)),
          monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4)),
          yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4 * 12));

    let unit;

    if (secondsDiff < 60) {
      unit = secondsDiff === 1 ? 'second' : 'seconds';

      return {
        unit: unit,
        value: secondsDiff
      }
    } else if (minutesDiff < 60) {
      unit = minutesDiff === 1 ? 'minute' : 'minutes';

      return {
        unit: unit,
        value: minutesDiff
      }
    } else if (hoursDiff < 24) {
      unit = hoursDiff === 1 ? 'hour' : 'hours';

      return {
        unit: unit,
        value: hoursDiff
      }
    } else if (daysDiff < 7) {
      unit = daysDiff === 1 ? 'day' : 'days';

      return {
        unit: unit,
        value: daysDiff
      }
    } else if (weeksDiff < 4) {
      unit = weeksDiff === 1 ? 'week' : 'weeks';

      return {
        unit: unit,
        value: weeksDiff
      }
    } else if (monthsDiff < 12) {
      unit = monthsDiff === 1 ? 'month' : 'months';

      return {
        unit: unit,
        value: monthsDiff
      }
    } else {
      unit = yearsDiff === 1 ? 'year' : 'years';

      return {
        unit: unit,
        value: yearsDiff
      }
    }
  },
  existsInDOM: function (selector) {
    return document.querySelectorAll(selector).length;
  },
  plugins: {
    createTab: function (options) {
      if (app.existsInDOM(options.triggers) && app.existsInDOM(options.elements)) {
        return new XM_Tab(options);
      }
    },
    createHexagon: function (options) {
      if (app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined') {
        return new XM_Hexagon(options);
      }
    },
    createProgressBar: function (options) {
      if (app.existsInDOM(options.container)) {
        return new XM_ProgressBar(options);
      }
    },
    createDropdown: function (options) {
      if (((app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined') && options.controlToggle) || ((app.existsInDOM(options.trigger) || typeof options.triggerElement !== 'undefined') && (app.existsInDOM(options.container) || typeof options.containerElement !== 'undefined'))) {
        return new XM_Dropdown(options);
      }
    },
    createTooltip: function (options) {
      if (app.existsInDOM(options.container)) {
        return new XM_Tooltip(options);
      }
    },
    createSlider: function (options) {
      if (app.existsInDOM(options.container)) {
        return tns(options);
      }
    },
    createPopup: function (options) {
      if (app.existsInDOM(options.container) && app.existsInDOM(options.trigger)) {
        return new XM_Popup(options);
      }
    },
    createAccordion: function (options) {
      if (app.existsInDOM(options.triggerSelector) && app.existsInDOM(options.contentSelector)) {
        return new XM_Accordion(options);
      }
    },
    createChart: function (ctx, options) {
      return new Chart(ctx, options);
    }
  }
};




const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const Joi = require('joi');

const db = require("./db");
const collection = "jobs";
const app2 = express();

// schema used for data validation for our todo document
const schema = Joi.object().keys({
  title:   Joi.string().required(),
  budget: Joi.number().required(),
  description : Joi.string().required(),
  deadline: Joi.date().required(),
  skills_required: Joi.array().required(),
  required_location: Joi.string().required(),
  job_hirer : Joi.string().required()

});

// parses json data sent to us by the user 
// app.use(bodyParser.json());

// serve static html file to user
app2.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../gigs.html'));
});

// read
app2.get('/getTodos',(req,res)=>{
    // get all Todo documents within our todo collection
    // send back to user as json
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
            console.log(err);
        else{
            res.json(documents);
        }
    });
});

// update
app2.put('/:id',(req,res)=>{
    // Primary Key of Todo Document we wish to update
    const todoID = req.params.id;
    // Document used to update
    const userInput = req.body;
    // Find Document By ID and Update
    db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(todoID)},
    {$set : {description : userInput.description}},{returnOriginal : false},(err,result)=>{
        if(err)
            console.log(err);
        else{
            res.json(result);
        }      
    });
});


//create
app2.post('/',(req,res,next)=>{
    // Document to be inserted
    const userInput = req.body;

    // Validate document
    // If document is invalid pass to error middleware
    // else insert document within todo collection
    Joi.validate(userInput,schema,(err,result)=>{
        if(err){
            const error = new Error("Invalid Input");
            error.status = 400;
            next(error);
        }
        else{
            db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
                if(err){
                    const error = new Error("Failed to insert Todo Document");
                    error.status = 400;
                    next(error);
                }
                else
                    res.json({result : result, document : result.ops[0],msg : "Successfully inserted Todo!!!",error : null});
            });
        }
    })    
});



//delete
app2.delete('/:id',(req,res)=>{
    // Primary Key of Todo Document
    const todoID = req.params.id;
    // Find Document By ID and delete document from record
    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(todoID)},(err,result)=>{
        if(err)
            console.log(err);
        else
            res.json(result);
    });
});

// Middleware for handling Error
// Sends Error Response Back to User
app2.use((err,req,res,next)=>{
    res.status(err.status).json({
        error : {
            message : err.message
        }
    });
})


db.connect((err)=>{
    // If err unable to connect to database
    // End application
    if(err){
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else{
        app2.listen(3000,()=>{
            console.log('connected to database, app listening on port 3000');
        });
    }
});