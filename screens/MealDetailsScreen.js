import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, Heading, Image, Center, VStack } from "native-base";

import { MEALS } from "../data/dummy-data"

const MealDetailsScreen = props => {
    const mId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mId );

    return(
        <View style={styles.screen}>
            <Center width="90%" bg="white" p={5} rounded="lg">
                <Heading size="md">{selectedMeal.title}</Heading>

                <Image 
                    source={selectedMeal.url}
                    alt={selectedMeal.title}
                />

                <VStack width="90%">
                    <Heading size="md">Ingredients</Heading>

                    {selectedMeal.ingredients.map((item, key) => (
                        <Text key={key} >{item}</Text>
                    ))}
                </VStack>

                <VStack width="90%">
                    <Heading size="md">Steps</Heading>
                    {selectedMeal.steps.map((item, key) => (
                        <Text key={key} >{item}</Text>
                    ))}
                </VStack>
            </Center>


            <Button onPress={() => {props.navigation.popToTop()}}>Back to Categories</Button>

        </View>
    )
};

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mId = navigationData.navigation.getParam('mealId');
    const selectedM = MEALS.find(meal => meal.id === mId);

    return ({
        headerTitle: selectedM.title
    });
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default MealDetailsScreen;