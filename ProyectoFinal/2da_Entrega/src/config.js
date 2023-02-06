export default{
    fileSystem:{
        path: '../db'
    },
    mongodb:{
        cnxStr: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firebase:{
        "type": "service_account",
        "project_id": "backend-386e6",
        "private_key_id": "088a79faee8b2827baf12f5170e84921cd8e4c74",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCzVd+JqKrR28EE\nX/nsznmG3BThCUfSnU6rFJXNotrTs+Ym8OPXBgoFMOZDXrvBUvphCCEqclAuAKvi\nsghFFPRZP6nQ5h2mcVTATLnHvPtt0elUMrP4MkvveTzzDclo96i5U33AxM3dF2F1\nEhTnLbKjIQLJGahkgIIiBwQtd7IjMb9+1a9M5PRwBvc6QpufqWWWMcbJORsgpg25\nUNuSjHfbeOPVmaQtD2Dk8VyDt3qv0inqEoNrALb+c68uKaHFAu6RW4xMqyRQMvd9\nWPoMMpqTQERaDpc6INWxu0z4MjdqUgHqmccVOcN7j/dWd2hNhdSXjGP5iTSWDi6b\nagAINgwTAgMBAAECggEAB0PgVXRWzz+m1yWIO3a156e81M0KctbanAWud/E0CkWM\nemFh6ZEeEM3FVk9dLdzNteadaVnOM77lN77cpOfPalow5/yakOagd1XkZNocGXva\nhwWy0sg+2UnBFVumoDEATdm7C3ctm9pZoWOFI0RvqzooIbt/Xery2qwMGEd0GQbW\nfRb0Drtvx0I9hYpSX59luZomJ5K805mX3O7ddgeZzsE/1L+jHylNmqCIuxVXgsnC\n5uwK6i9ldEWA1rm2yu5fQO5BOeO3ISJHGu1paK+7i78jp1aGFrvoqnp6wO6MxO3i\neY/DblfQ686Dl8gGl3MwKTduJQJ9l5tY7FTrM1auYQKBgQDpsPepZVR2X7hNcc1L\n5BXL6cLEfO2pilUKJ6qHQ9qpAEedddvBDczQhEyiNaE8yJDvrYeDz8fOBbJeDSmk\nIaJXTejfQHJTuuevwSxOGi3nNOel3/Mqjw3dZC4XUvlwjEDmKAehvz6CREsRh0zE\ndXPGosaBj6tnoGuohI689lVF0QKBgQDEdIm8dh/rPhsZRJF5lc0hb4HVrnZox72K\nUOFl3cdTZub5PJlbFx6fClUlLWSTUhBfGaTCQpSkWfPU0bAagKZJOp/h+Cv9JQUP\n4xQ+l/JbrMR5+8cDo9e6dY15+ATVkuQjC4oMECXxtElLaM2nRPO4Ggf+uBmGLS3+\nvnPxYC8YowKBgHZbEpPQpj5trEJM6NUO55snAWXSf+vmC7vg6xUm4I/HfH3bOzlD\nbAAPgWCGGOtYCU/aa0/u5BsL95J6yCRAhKAC7XZkhYKynrT8+Rt1VtpKiSgRjG55\nlWQTYOSfOYYvAo+Opo7c9SO0wvBVviOh+MkZl7/2q7EIJn5q5H//oqCBAoGBAI0A\nj/NiXRp84vpJypgXurlqzSdPJtGhuxrRXlW8zlnAG7t7kR5eA65mviIG6I8McY+w\nWh7LpuAnZ+ix79G10KPyndqUQw5YSb/TXi5m5J6D7CkZWwfzytybjsWiC+Y2nePB\nXn22AWXv3kNvn1uVE9Bpbp+WB0vUlZSnoZP3UxY9AoGBANz1Ebj+fXdO2bOGvD9Q\n4VagrAW7xhYiMOZTzcS6573UbO31Eel8T//FDe1uoLtcTl/TBGgJnYYaSqMHyefJ\njXgUKlm/RIqMfpnjw1dUm/qIVUqUlgMT5gvb7Oi2+9aMGm4hXOjIlzkBh2x7B3kf\nTewbeGZG9PvWcHuLjF+wc/MG\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-vc1fg@backend-386e6.iam.gserviceaccount.com",
        "client_id": "103891808870460983533",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vc1fg%40backend-386e6.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: '../db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },
    mysql: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            database: 'desafio7'
        }
    }

}