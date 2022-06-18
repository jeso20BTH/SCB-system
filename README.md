# SCBCompilerAPI
This is an webb API made as a part of a system used to display statistics about child births in Swedish
municipalities. The data is fetched through the [SCB API](https://scb.se/vara-tjanster/oppna-data/api-for-statistikdatabasen/). and is for the years 2016-2020.

# Setup
The API uses [MongoDB](https://www.mongodb.com/), in order to be able to setup the API you first need to install MongoDB if you do not already have it.
I would also recommend you to use [Virtual Studio](https://visualstudio.microsoft.com/) to run it localy
1. Within mongoDB you nead to create the following database
`Database name: scb`  
`Collection name: born`
2. Within `appsettings.json` do you need to make sure the configuration matches yours in order to connect properly to the database.
``
"SCBDatabase": {
  "ConnectionString": "mongodb://localhost:27017",
  "DatabaseName": "scb",
  "MunicipalitiesCollectionName": "born"
``
3. With above steps done, to start it localy within Virtual Studio you run it without debugging. For me it then proceeds to run on `https://localhost:7165/`.

# Requests
Bellow is all available requests in which you can interact with the API.
## Get all
On the URI `/api/Municipality` if with a `GET` request you will get the statistics for all municipalities as a list at bellow format.
``json
{
    "id": "0114",
    "name": "Upplands Väsby",
    "born": {
      "2016": {
        "1": "274",
        "2": "238"
      },
      "2017": {
        "1": "293",
        "2": "266"
      },
      "2018": {
        "1": "263",
        "2": "259"
      },
      "2019": {
        "1": "260",
        "2": "254"
      },
      "2020": {
        "1": "268",
        "2": "287"
      }
    }
}
``
`id` - The id for that specific municipality.  
`name` - The name of that specific municipality.
`born` - an array of all years birth statistics, with the years as keys.
`1` & `2` are the genders where `1` is for boys and `2` is for girls.

## Get one.
In order to get on specific municipality you need to add its `id` as the last part of the URI in the following format `/api/Municipality/{id}`. The response if found will be in the same format as when you get all but as an array instead of a list. If it does not find any municipality that matches the id it will instead return `404 - bad request`.
