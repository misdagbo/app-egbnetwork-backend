var activite = require('../models/activite');



var ctrlActivite = {
    // insert row 
    retrieveActivite: (req, res) => {
        activite.getRows((err, rows) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(rows);
            }
        });
    },

    // insert row 
    createActivite : (req, res) => {
        activite.addRow((err, rows) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(rows);
            }
        });
    },
    
    // insert row 
    updateActivite : (req, res) => {
        activite.updateRow((err, rows) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(rows);
            }
        });
    },

    // insert row 
    deleteActivite : (req, res) => {
        activite.deleteRow((err, rows) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(rows);
            }
        });
    }
}

module.exports = ctrlActivite;