# SCBHandler
The SCB handler is used to fetch data from [SCB API](https://scb.se/vara-tjanster/oppna-data/api-for-statistikdatabasen/) and group it into correct data groups.

## FileReader
An class that is made to read JSON files.

### Attributes
The attributes for the class.

#### client
The HttpClient used to fetch data from the API.
- privacy: `private`
- type: `HttpClient`
- `readonly`

#### url
The URL to the API.
- privacy: `private`
- type: `string`
- `readonly`

### Methods
The methods for the class.

#### getMunicipalityCodes
Method for fetching the codes and names of all Swedish municipalities.
- Attributes:
    - None
- Returns:
    - `Dictionary<string, string>`

#### getStatistics
Gets the statistics from the SCB API.
- Attributes:
    - None
- Returns:
    - `Dictionary<string, Dictionary<string, Dictionary<string, string>>>` - A dictionary with the statistics grouped by year and then gender.

#### groupData
Method used to group the data to a format MongoDB can handle.
- Attributes:
    - `dataset` - The JSON data you want to group by municipality.
        - Type: `string`
- Returns:
    `Dictionary<string, Dictionary<string, Dictionary<string, string>>>` - An dictionary grouped by municipality with each year in an inner dictionary.
