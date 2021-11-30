const dao = require("../db/who/who-dao");

module.exports = (app) => {
    const findAllWho = (req, res) => {
        dao.findAllWho()
            .then(who => {
                const whoList = who.map(t => t);
                res.json(whoList);
            });
    }
    
    app.get("/rest/who", findAllWho);
}
