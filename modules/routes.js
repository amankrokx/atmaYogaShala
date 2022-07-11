module.exports = function (app, dbo) {
    app.get('/ADs', (req, res) => {
        res.send(req.session)
    })
}