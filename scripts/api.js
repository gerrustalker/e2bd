const simpleGit = require('simple-git');
const fs = require('fs')
const express = require('express')

const git = simpleGit();
const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.get("/data/grab", function(req, res){
      
    var content = fs.readFileSync("/data/grab/grabbed.json", "utf8");
    var chips = JSON.parse(content);
    res.send(chips);
});

app.get("/data/grab/:id", function(req, res){
      
    var id = req.params.id;
    var content = fs.readFileSync("/data/grab/grabbed.json", "utf8");
    var chips = JSON.parse(content);
    var chip = null;
    
    for(var i = 0; i < users.length; i++) {
        if(users[i].id == id){
            chip = chips[i];
            break;
        }
    }
    // отправляем пользователя
    if(chip){
        res.send(chip);
    }
    else{
        res.status(404).send();
    }
});
// получение отправленных данных
app.post("/data/grab", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var chipName = req.body.name;
    var chipFilename = req.body.filename;
    var chipOwner = req.body.owner;
    var chip = {name: chipName, filename: chipFilename, owner: chipOwner};
     
    var data = fs.readFileSync("/data/grab/grabbed.json", "utf8");
    var chips = JSON.parse(data);
     
    var id = Math.max.apply(Math, chips.map(function(o) {return o.id;}))
    chip.id = id+1;
    chip.push(chip);

    var data = JSON.stringify(users);
    fs.writeFileSync("/data/grab/grabbed.json", data);
    res.send(chip);

    console.log('Sending ', chipFilename)
});

app.listen(3000, function(){
    console.log("Server waiting for connecting...");
});