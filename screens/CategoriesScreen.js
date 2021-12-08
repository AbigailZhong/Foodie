import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, View, Center, Text, Button, FlatList, Heading } from "native-base";
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    const [imgOpacity, setImgOpacity] = useState(100);

    const renderGridItem = (itemData) => (
        <Center mt={7}>
            <Heading color="white" size="xl" style={styles.categoryHeading}>
                {itemData.item.title}
            </Heading>

            <TouchableOpacity
            onPress={()=>{props.navigation.navigate({
                routeName: 'CategoryMeals', 
                params: {
                    categoryId: itemData.item.id
                }}
            )}}
            style={styles.foodCategory}
            >
                <Image
                source={itemData.item.url}
                alt={itemData.item.title}
                rounded='lg'
                width='xs'
                height='180'
                bg = 'black'
                opacity = {70}
                />
            </TouchableOpacity>
        </Center>

    );

    return(
        <View style={styles.screen}>
            <FlatList 
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            />
        </View>
        
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    foodCategory: {
        width: '100%',
    },
    categoryHeading: {
        position: 'absolute',
        top: 70,
        elevation: 5,
    }

});

export default CategoriesScreen;