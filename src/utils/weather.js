const request = require('postman-request');

const weather = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ef4e15eb553578ec9b3ef3b401989e5d&query='+ latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.observation_time + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.humidity + '% chance of rain.')
        }
    })
}

module.exports = weather