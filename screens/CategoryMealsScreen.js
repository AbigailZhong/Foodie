import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Button, FlatList, HStack, VStack, Image, Heading } from "native-base";
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FontAwesome } from '@expo/vector-icons'; 

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0 )

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);



    const renderMealItem = (itemData) => (
        <HStack p={10} bg="white">
            <Image
                source={itemData.item.url}
                alt={itemData.item.title}
                rounded='lg'
                size='md'
            />

            <VStack>
                <Heading>{itemData.item.title}</Heading>
                {/* { itemData.item.afforability == "affordable" ?
                    (<HStack>
                        <FontAwesome name="dollar" size={24} color="white" />
                        <FontAwesome name="dollar" size={24} color="black" />
                        <FontAwesome name="dollar" size={24} color="black" />
                    </HStack>
                    )
                
                    :
                    
                    (<HStack>
                        <FontAwesome name="dollar" size={24} color="white" />
                        <FontAwesome name="dollar" size={24} color="white" />
                        <FontAwesome name="dollar" size={24} color="white" />
                    </HStack>
                    )

                } */}

                <Text>{itemData.item.complexity}</Text>
               
            </VStack>
            
        </HStack>
    );

    return(
        <View style={styles.screen}>
            <FlatList
            data={displayedMeals}
            keyExtractor={(item,index)=> item.id}
            renderItem={renderMealItem}
            
            />


            <Button onPress={() => {props.navigation.navigate({routeName: 'MealDetails'})}}>Go to Meal Details</Button>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);

    return ({
        headerTitle: selectedCat.title
    });
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default CategoryMealsScreen;