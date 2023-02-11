import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SDdimension = {
    deviceHeight,
    deviceWidth
}

const Dimension = {
    'eight': 8.0,
    'sixteen': 16.0,
    'twentyFour': 24.0,
    'thirtyTwo': 32.0,
    'fourtyEigth': 48.0,
    'sixtyFour': 64.0,
    'oneHundred': 100.0,
    'oneFifty': 150.0,
    'twoHundred': 200.0,
    'twoFift': 250.0,
    'threeHundred': 300.0,
    'threeFifty': 350.0
}

const Orientation = {
    'vertical': 'column',
    'horizontal': 'row',
}

export {
    Orientation,
    SDdimension,
    Dimension
}