# FaceSearch

A react and express application for searching for artist on spotify by face recognition.

## Getting Started

Repository consists of two folders. `Server` and `Client` .
Follow steps below to get project set up.

### API Keys

Make sure you have a client id and client secret at [Spotify API](https://developer.spotify.com/documentation/web-api/) .
You also need a api key at [Clarifai](https://www.clarifai.com/) .
These API keys should be stored as envirement variables in a .env file in server root foler. (see .env.example for example)

```
CLARIFY_API_KEY = YOUR_KEY
SPOTIFY_CLIENT_SECRET = YOUR_KEY
SPOTIFY_CLIENT_ID = YOUR_KEY
```

### Node modules

Install node modules to get dependencies and launch application.

Enter these commands in the terminal

```
cd server && npm i
```

The same for client

```
cd client && npm i
```

Now you have the dependencies and project is ready for being launched in developmentt mode.

## Deployment

This project is not set for a production build at the moment.
This is coming in the near future.

## Built With

* [React](https://reactjs.org/) - Front end client famework
* [Express](https://expressjs.com/) - Back end famrwork for our REST API


## Authors

* **Martin Østvik** - *Initial work* - [ostvik.space](http://ostvik.space/)

## Acknowledgments

* School project for </Salt> School of applied technology
* Inspiration for concept from [RapidAPI](https://rapidapi.com/blog/spotify-public-api-profile-surf-a-giant-musical-database/) list of project ideas using the Spotify api
