import Constants from "expo-constants";
import { Platform } from "react-native";

const productionID = Platform.OS === "android" ? "ca-app-pub-7199910147118397/3554795807" : "ca-app-pub-7199910147118397/4930143578";
// Is a real device and running in production.
export const adUnitID = Constants.isDevice && !__DEV__ ? productionID : "TestIds.BANNER";
