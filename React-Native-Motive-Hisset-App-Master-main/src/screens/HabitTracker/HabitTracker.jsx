import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import HabitCard from '../../components/HabitCard'
import AddHabitForm from '../../components/AddHabitForm'

function HabitTracker() {
  const [habits, setHabits] = useState([])
  const [isAddHabitModalVisible, setIsAddHabitModalVisible] = useState(false)

  const handleAddHabit = newHabit => {
    setHabits([...habits, newHabit])
    setIsAddHabitModalVisible(false)
  }

  const handleToggleHabit = habitId => {
    // Toggle habit logic if needed
  }

  const popularHabits = [
    { id: 1, title: 'Su İçme', goal: '500/2000 ML', icon: '💧' },
    { id: 2, title: 'Yürüyüş', goal: '0/10000 Adım', icon: '🚶' },
    { id: 3, title: 'Kitap Okuma', goal: '0/1 Saat', icon: '📖' }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Sana Özel Alışkanlıklar</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsAddHabitModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+ Alışkanlık Oluştur</Text>
        </TouchableOpacity>
      </View>

      <AddHabitForm
        visible={isAddHabitModalVisible}
        onClose={() => setIsAddHabitModalVisible(false)}
        onSubmit={handleAddHabit}
      />

      {habits.length === 0 ? (
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popüler Alışkanlıklar</Text>
          </View>

          <ScrollView>
            {popularHabits.map(habit => (
              <TouchableOpacity
                key={habit.id}
                style={styles.popularHabitItem}
                onPress={() => {
                  // Logic to add popular habit
                }}
              >
                <View style={styles.habitIconContainer}>
                  <Text style={styles.habitIcon}>{habit.icon}</Text>
                </View>
                <View style={styles.habitTextContainer}>
                  <Text style={styles.habitTitle}>{habit.title}</Text>
                  <Text style={styles.habitGoal}>{habit.goal}</Text>
                </View>
                <View style={styles.addButtonContainer}>
                  <Text style={styles.addButtonText}>+</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateEmoji}>Alışkanlıkların</Text>

            <Text style={styles.emptyStateEmoji}>😊</Text>
            <Text style={styles.emptyStateText}>
              Henüz bir alışkanlık kazanmaya başlamadınız!
            </Text>
            <Text style={styles.emptyStateSubtext}>
              Yukarıdaki alışkanlıklardan birini seçebilir veya kendi
              alışkanlığınızı oluşturabilirsiniz!
            </Text>
          </View>
        </View>
      ) : (
        <View>
          {habits.map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onToggle={() => handleToggleHabit(habit.id)}
            />
          ))}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp('4%')
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: wp('4%'),
    marginBottom: wp('2%')
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333'
  },
  addButton: {
    backgroundColor: '#BA9BEF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600'
  },
  popularHabitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: wp('3%'),
    marginBottom: wp('2%')
  },
  habitIconContainer: {
    marginRight: wp('3%')
  },
  habitIcon: {
    fontSize: wp('6%')
  },
  habitTextContainer: {
    flex: 1
  },
  habitTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#333'
  },
  habitGoal: {
    fontSize: wp('3.5%'),
    color: '#666'
  },
  addButtonContainer: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: 20,
    backgroundColor: '#BA9BEF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonContainer: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: 20,
    backgroundColor: '#BA9BEF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: wp('5%'),
    fontWeight: 'bold'
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('10%')
  },
  emptyStateEmoji: {
    fontSize: wp('12%')
  },
  emptyStateText: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#333',
    marginTop: wp('2%')
  },
  emptyStateSubtext: {
    fontSize: wp('3.5%'),
    color: '#666',
    textAlign: 'center',
    marginTop: wp('2%'),
    paddingHorizontal: wp('5%')
  }
})

export default HabitTracker
