const db = require("../models/");

module.exports = function(app) {
    app.get("/api/workouts",function(req,res){  
        db.Workout.find({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        db.Workout.find({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts",function(req,res){  
        db.Workout.create({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts/range",function(req,res){  
        db.Workout.create({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id",function({body, params},res){  
        db.Workout.findByIdAndUpdate(
            {_id: params.id},
            {      $set: {exercises:[body]}},
            {new:true})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });
}