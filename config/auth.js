// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '468390586698619', // your App ID
        'clientSecret'  : '27f841cdd1d4487c8a2f1ab0b130ce67', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'up1uvQhaDBuQ9j9SopuSamwHL',
        'consumerSecret'    : 't9ERyhp2P1gwuC5Yd2qmzAOXwiOv6RZzpwFhSl8VJhdhVM5yev',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '427732374435-gvuj7u6dlre6l4otfg5igiu88qrt46fk.apps.googleusercontent.com',
        'clientSecret'  : '0TAItR9J5NnXTM74njhAec2a',
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    }

};
