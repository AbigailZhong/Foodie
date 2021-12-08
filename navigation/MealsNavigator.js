import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen'

const MealsNavigator = createStackNavigator ({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetails: {
        screen: MealDetailsScreen,
    }
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#ffc529",
          },
          headerTintColor: "white",
          headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center'
          },
    }

}
);

export default createAppContainer(MealsNavigator);