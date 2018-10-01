import React from "react";
import Enumerable from "linq";
import { AsyncStorage } from "react-native";

export default class LaunchService {
    static async getLaunchesAsync() {
        let returnValue = JSON.parse('[]');
        try {
            let response = await fetch("https://launchlibrary.net/1.3/launch/");
            if (response.status === 200) {
            let responseJson = await response.json();
            returnValue = Enumerable.from(responseJson.launches)
                .groupBy("$.lsp.id", "$")
                .select("{agency:$.first().lsp,data:$.toArray()}")
                .toArray();
                await AsyncStorage.setItem('launchData', JSON.stringify(returnValue));
                await AsyncStorage.setItem('Mode', 'Online');
            return returnValue;
            }
            else
            {
                return await getCachedLaunchesAsync();
            }
        } catch (error) {
            return await getCachedLaunchesAsync();    
        }

        return returnValue;
    }
    static async getCachedLaunchesAsync() {
        let returnValue = '[]';
        try {
            await AsyncStorage.setItem('Mode', 'Offline');
            let storageValue = await AsyncStorage.getItem('launchData');
            if (storageValue != null) {
                returnValue = storageValue;
            }
            return JSON.parse(returnValue);
        } catch (error) {
            console.error(error);
        }
        return returnValue;
    }
}