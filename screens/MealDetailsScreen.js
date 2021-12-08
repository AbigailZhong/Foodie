import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, FlatList } from "native-base";

const MealDetailsScreen = props => {

    return(
        <View style={styles.screen}> 
            <Text>Meal Details Screen.</Text>
            <Button onPress={() => {props.navigation.popToTop()}}>Back</Button>

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

export default MealDetailsScreen;