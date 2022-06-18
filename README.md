# FileHandler
The File handler is a class library made to handle `JSON` files.

## FileReader
An class that is made to read JSON files.
### Attributes
- `public string filename` - path within your project folder to the JSON file you want to read from.

### Methods
- `Init` - Initialization method needs the filename for the file you later wanna interact with.
    - Attributes:
        - `filename`
- `readFile`- Method for reading the file from the initialization.
    - Attribute:
        - -
    - Returns:
        - `JToken`
- `getProjectFolder`  - Method for getting the path to the current work folder, it is used by the `readFile` method to find the file.
    - Attributes:
        - -
    - Returns:
        - `string`
