var pool = require('../configs/db');
var mysql = require('mysql');

var Activite = {

    // insert row 
    getRows: function (callback) {
        return pool.query('SELECT * FROM activite', callback);
    },

    // insert row 
    addRow: function (callback) {
        let insertQuery = 'INSERT INTO ?? (??) VALUES (?)';
        let query = mysql.format(insertQuery, ["activite", "libelle", Activite.libelle]);
        return pool.query(query, callback);
    },

    // update rows
    updateRow: function (callback) {
        let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        let query = mysql.format(updateQuery, ["activite", "libelle", Activite.libelle]);
        // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'
        return pool.query(query, callback);
    },

    deleteRow: function (callback) {
        let deleteQuery = "DELETE from ?? where ?? = ?";
        let query = mysql.format(deleteQuery, ["activite", "libelle", Activite.libelle]);
        // query = DELETE from `todo` where `user`='shahid';
        pool.query(query, callback);
    }
}

module.exports = Activite;