# SCB-system
The SCB system is used to fetch data from [SCB API](https://scb.se/vara-tjanster/oppna-data/api-for-statistikdatabasen/) and display it in an user-friendly way. It contains two running parts, an [web API](https://github.com/jeso20BTH/SCB-system/tree/main/SCBCompilerAPI) and a [user client](https://github.com/jeso20BTH/SCB-system/tree/main/UserClient) as well as two class libraries [FileHandler](https://github.com/jeso20BTH/SCB-system/tree/main/FileHandler) and [SCBHandler](https://github.com/jeso20BTH/SCB-system/tree/main/SCBHandler).
- The API stores data from SCB API and allows the user to fetch the data with API calls.
- The user client which is built with react as framework has and uses .net as its back-end engine fetches data from the API and displays it for the user.
- The FileHandler handle interactions with JSON files.
- The SCBHandler handle interactions with the SCB API.

## Setup
In order to setup the system and get it running, please read each parts own `README.md`
- [web API](https://github.com/jeso20BTH/SCB-system/blob/main/SCBCompilerAPI/README.md)
- [User client](https://github.com/jeso20BTH/SCB-system/blob/main/UserClient/README.md)
- [FileHandler](https://github.com/jeso20BTH/SCB-system/blob/main/FileHandler/README.md)
- [SCBHandler](https://github.com/jeso20BTH/SCB-system/blob/main/SCBHandler/README.md)
