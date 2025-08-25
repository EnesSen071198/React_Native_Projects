// HabitCard.jsx
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

const HabitCard = ({ habit, onToggle }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onToggle}>
      <View style={styles.cardContent}>
        <Text style={styles.habitTitle}>{habit.habitName}</Text>
        <Text style={styles.habitQuestion}>{habit.question}</Text>

        {habit.habitType === 'Ölçülebilir' && (
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              {habit.targetValue} {habit.unit} {habit.targetType}
            </Text>
          </View>
        )}

        <View style={styles.reminderContainer}>
          <Text style={styles.reminderText}>
            {habit.reminderTime} - {habit.frequency}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: wp('4%'),
    marginBottom: wp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardContent: {
    flex: 1
  },
  habitTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#333',
    marginBottom: wp('1%')
  },
  habitQuestion: {
    fontSize: wp('4%'),
    color: '#666',
    marginBottom: wp('2%')
  },
  progressContainer: {
    backgroundColor: '#e6e6e6',
    borderRadius: 5,
    padding: wp('2%'),
    marginBottom: wp('2%')
  },
  progressText: {
    fontSize: wp('3.5%'),
    color: '#333',
    textAlign: 'center'
  },
  reminderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reminderText: {
    fontSize: wp('3.5%'),
    color: '#666'
  }
})

export default HabitCard
