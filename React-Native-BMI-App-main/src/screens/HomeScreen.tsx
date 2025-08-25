import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import styles from '../styles/style';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BMI Calculator</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BMICalculator')}>
        <Text style={styles.buttonText}>Go to BMI Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
