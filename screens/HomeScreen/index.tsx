import * as React from 'react';
import { View, Text } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[0];

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}

export default HomeScreen;