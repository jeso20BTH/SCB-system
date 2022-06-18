# FileHandler
The File handler is a class library made to handle `JSON` files.

## FileReader
An class that is made to read JSON files.
### Attributes
The attributes for the class.
#### filename
Path within your project folder to the JSON file you want to read from.
- privacy: `public`
- type: `string`

### Methods
The methods for the class.
#### Init
Initialization method.
- Attributes:
    - `filename` -  The filename for the file you later wanna interact with.
        - type: `string`
#### readFile
Method for reading the file from the initialization.
- Attribute:
    - None
- Returns:
    - `JToken` - The JSON data from the file.
#### getProjectFolder
Method for getting the path to the current work folder, it is used by the `readFile` method to find the file.
- Attributes:
    - None
- Returns:
    - `string` - Folder path.
