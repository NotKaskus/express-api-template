const router = require('express').Router();
const db = require('../../database/index');
const md5 = require('md5');

// Get a List of users
router.get('/', (req, res) => {
	var sql = "select * from user";
    var params = [];
	db.all(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error":err.message});
			return;
		}
		// Send the userlists
		res.status(200).json({
			message: "success",
			data: rows
		})
	});
});

// Get a single user by id
router.get('/:id', (req, res) => {
	var sql = "select * from user where id = ?";
    var params = [req.params.id];
	db.get(sql, params, (err, rows) => {
		if (err) {
			res.status(400).json({"error":err.message});
			return;
		}
		// Send the userlists
		res.status(200).json({
			message: "success",
			data: rows
		})
	});
});

// Create a new user
router.post('/', (req, res) => {
	var errors = []
    if (!req.body.password){
        errors.push("No password specified");
    };
    if (!req.body.email){
        errors.push("No email specified");
    };
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    };
    var data = {
        name: req.body.name,
        email: req.body.email,
        password : md5(req.body.password)
    };
	var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)';
    var params =[data.name, data.email, data.password];
	db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
});

// Update an user
router.patch(':id', (req, res) => {
	var errors = []
	if (!req.body.password){
        errors.push("No password specified");
    };
    if (!req.body.email){
        errors.push("No email specified");
    };
	if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    };
	var data = {
        name: req.body.name,
        email: req.body.email,
        password : req.body.password ? md5(req.body.password) : null
    };
	db.run(
        `UPDATE user set 
           name = COALESCE(?,name), 
           email = COALESCE(?,email), 
           password = COALESCE(?,password) 
           WHERE id = ?`,
        [data.name, data.email, data.password, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
});

// Delete an user
router.delete('/:id', (req, res) => {
	var errors = []
	if (!req.body.password){
        errors.push("No password specified");
    };
    if (!req.body.email){
        errors.push("No email specified");
    };
	if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    };
	db.run(
        'DELETE FROM user WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
});

module.exports = router;