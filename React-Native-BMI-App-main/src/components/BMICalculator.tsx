import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/style'; // Güncellenmiş stilleri içe aktarıyoruz

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight.trim());
    const heightNum = parseFloat(height.trim()) / 100;

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError('Invalid input: weight or height is not a number');
      setBmi(null);
      return;
    }

    if (weightNum > 0 && heightNum > 0) {
      const calculatedBMI = weightNum / (heightNum * heightNum);
      setBmi(calculatedBMI);
      setError(null);
    } else {
      setError('Weight and height must be greater than zero');
      setBmi(null);
    }
  };

  const getCategoryStyle = (
    categoryBMI: number,
    category: 'underweight' | 'normal' | 'overweight' | 'obesity',
  ) => {
    switch (category) {
      case 'underweight':
        return categoryBMI < 18.5 ? styles.underweight : styles.defaultText;
      case 'normal':
        return categoryBMI >= 18.5 && categoryBMI < 24.9
          ? styles.normal
          : styles.defaultText;
      case 'overweight':
        return categoryBMI >= 25 && categoryBMI < 29.9
          ? styles.overweight
          : styles.defaultText;
      case 'obesity':
        return categoryBMI >= 30 ? styles.obesity : styles.defaultText;
      default:
        return styles.defaultText;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
        <View style={styles.underline} />
      </View>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
        <View style={styles.underline} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
          <Text style={styles.calculateButtonText}>Calculate BMI</Text>
        </TouchableOpacity>
      </View>

      {bmi !== null && (
        <>
          <Text style={styles.result}>Your BMI is: {bmi.toFixed(2)}</Text>
          <View style={styles.table}>
            <Text style={styles.tableTitle}>BMI Categories</Text>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={styles.tableHeaderText}>Category</Text>
              <Text style={styles.tableHeaderText}>BMI Range</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Underweight</Text>
              <Text style={getCategoryStyle(bmi, 'underweight')}>
                {'< 18.5'}
              </Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Normal weight</Text>
              <Text style={getCategoryStyle(bmi, 'normal')}>18.5 - 24.9</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Overweight</Text>
              <Text style={getCategoryStyle(bmi, 'overweight')}>25 - 29.9</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Obesity</Text>
              <Text style={getCategoryStyle(bmi, 'obesity')}>{'>= 30'}</Text>
            </View>
          </View>
        </>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </ScrollView>
  );
};

export default BMICalculator;
