import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";

const FiltersScreen = props => {

    return(
        <View style={styles.screen}>
            <Text>Filters Screen.</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default FiltersScreen;