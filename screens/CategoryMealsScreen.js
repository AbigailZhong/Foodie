import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button, FlatList, HStack, VStack, Image, Heading, IconButton } from "native-base";
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0 )

    const renderMealItem = (itemData) => (
        <TouchableOpacity
            onPress={()=>{props.navigation.navigate({
                routeName: 'MealDetails', 
                params: {
                    mealId: itemData.item.id
                }}
            )}}
        >
            <HStack width="100%" mt={4} p={3} bg="white" rounded='lg'>
                <Image
                    source={itemData.item.url}
                    alt={itemData.item.title}
                    rounded='lg'
                    size='lg'
                    mr={3}
                />

                <VStack width={200} >
                    <Heading size="sm" mb={0}>
                        {itemData.item.title}
                    </Heading>

                    <HStack flexWrap="wrap">
                        <Text my={1} mr={1} width="45%" bg="lime.500" rounded='full' style={styles.textCenter}>$ {itemData.item.affordability}</Text>
                        <Text my={1} width="40%" bg="rose.400" rounded='full' style={styles.textCenter}>{itemData.item.complexity}</Text>
                        <Text my={1} width="40%" bg="orange.400" rounded='full' style={styles.textCenter}>{itemData.item.duration} mins</Text>
                    </HStack>
                    
                
                </VStack>

                <TouchableOpacity style={styles.favoriteButton}>
                    <Image
                        source={
                            {uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/2224px-A_perfect_SVG_heart.svg.png'}
                        }
                        alt="favorite button"
                        width={5}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>

                
            </HStack>
        </TouchableOpacity>
    );

    return(
        <View style={styles.screen}>
            <FlatList
            data={displayedMeals}
            keyExtractor={(item,index)=> item.id}
            renderItem={renderMealItem}
            
            />
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
    },
    textCenter: {
        textAlign: 'center',
        color: 'white',
    },
    favoriteButton: {
        position: 'absolute',
        // bottom: 10,
    }

});

export default CategoryMealsScreen;