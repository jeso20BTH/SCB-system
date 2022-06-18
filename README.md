# UserClient
The user client is used as part of the [SCB-system](https://github.com/jeso20BTH/SCB-system) that displays statistic for Swedish municipalities about child births. It runs with [.net 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) as back-end and [React](https://reactjs.org/) as its front-end. The back-end communicates with [SCBCompilerAPI](https://github.com/jeso20BTH/SCBCompilerAPI) to fetch the data that are going to be displayed.

# Requirements
In order to run this locally [Visual studio](https://visualstudio.microsoft.com/) is needed.

# Setup
1. You need to ensure that the API is up an running and should take note of which port it runs, it will help with the next step.
2. Within `/Controllers/MunicipalityController.cs` you need to ensure that the following private attribute is going to the same port as your API is running on.  
```
private static readonly url = "https://localhost:7165/api/Municipality";
```
3. Within Visual Studio run the project without debugging and it will start both the back-end and front-end.
