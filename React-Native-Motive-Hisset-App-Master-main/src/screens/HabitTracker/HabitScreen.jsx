import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import HabitCard from '../../components/HabitCard'
import AddHabitForm from '../../components/AddHabitForm'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ACCENT_COLOR = '#BA9BEF'

function HabitScreen({ navigation }) {
  const [habits, setHabits] = useState([])
  const [isAddHabitModalVisible, setIsAddHabitModalVisible] = useState(false)

  const popularHabits = [
    {
      id: 1,
      title: 'Su İçme',
      goal: '500/2000 ML',
      icon: '💧',
      type: 'Ölçülebilir',
      unit: 'ML',
      targetValue: 2000,
      question: 'Günlük su hedefini tamamladın mı?',
      frequency: 'Her Gün',
      reminderTime: '09:00'
    },
    {
      id: 2,
      title: 'Yürüyüş',
      goal: '0/10000 Adım',
      icon: '🚶',
      type: 'Ölçülebilir',
      unit: 'Adım',
      targetValue: 10000,
      question: 'Günlük adım hedefini tamamladın mı?',
      frequency: 'Her Gün',
      reminderTime: '18:00'
    },
    {
      id: 3,
      title: 'Kitap Okuma',
      goal: '0/1 Saat',
      icon: '📖',
      type: 'Ölçülebilir',
      unit: 'Saat',
      targetValue: 1,
      question: 'Bugün kitap okudun mu?',
      frequency: 'Her Gün',
      reminderTime: '22:00'
    }
  ]

  const handleAddHabit = newHabit => {
    setHabits([...habits, newHabit])
    setIsAddHabitModalVisible(false)
  }

  const handleAddPopularHabit = habit => {
    setHabits([...habits, habit])
  }

  const handleToggleHabit = habitId => {
    // Toggle habit logic if needed
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome name="angle-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alışkanlıklar</Text>
      </View>

      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sana Özel Alışkanlıklar</Text>
        </View>

        <View style={styles.createHabitBox}>
          <View style={styles.createHabitContent}>
            <Text style={styles.createHabitText}>Alışkanlık Oluştur</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setIsAddHabitModalVisible(true)}
            >
              <Text style={styles.addButtonText}>+ Oluştur</Text>
            </TouchableOpacity>
          </View>
        </View>

        <AddHabitForm
          visible={isAddHabitModalVisible}
          onClose={() => setIsAddHabitModalVisible(false)}
          onSubmit={handleAddHabit}
        />

        <View style={styles.popularSection}>
          <Text style={styles.sectionTitle}>Popüler Alışkanlıklar</Text>
          {popularHabits.map(habit => (
            <TouchableOpacity
              key={habit.id}
              style={styles.popularHabitItem}
              onPress={() => handleAddPopularHabit(habit)}
            >
              <View style={styles.habitItemContent}>
                <Text style={styles.habitIcon}>{habit.icon}</Text>
                <View style={styles.habitTextContainer}>
                  <Text style={styles.habitTitle}>{habit.title}</Text>
                  <Text style={styles.habitGoal}>{habit.goal}</Text>
                </View>
                <TouchableOpacity style={styles.addPopularButton}>
                  <Text style={styles.addPopularButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}

          {/* Pomodoro Timer Butonu */}
          <TouchableOpacity
            style={styles.pomodoroBox}
            onPress={() =>
              navigation.navigate('PomodoroTimer', {
                title: 'Meditasyon',
                duration: 20
              })
            }
          >
            <View style={styles.pomodoroContent}>
              <Ionicons
                name="timer-outline"
                size={24}
                color="#6B4EFF"
                style={styles.pomodoroIcon}
              />
              <View style={styles.pomodoroTextContainer}>
                <Text style={styles.pomodoroTitle}>Meditasyon</Text>
                <Text style={styles.pomodoroSubtitle}>20 Dakika</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.habitsSection}>
          <Text style={styles.sectionTitle}>Alışkanlıkların</Text>

          {habits.length === 0 ? (
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyStateEmoji}>😊</Text>
              <Text style={styles.emptyStateText}>
                Henüz bir alışkanlık kazanmaya başlamadınız!
              </Text>
              <Text style={styles.emptyStateSubtext}>
                Yukarıdaki alışkanlıklardan birini seçebilir veya kendi
                alışkanlığınızı oluşturabilirsiniz!
              </Text>
            </View>
          ) : (
            <ScrollView>
              {habits.map(habit => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onToggle={() => handleToggleHabit(habit.id)}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('3%'),
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  backButton: {
    marginRight: wp('3%')
  },
  headerTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#333'
  },
  sectionHeader: {
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('3%'),
    backgroundColor: 'white'
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: 'bold',
    color: '#333'
  },
  createHabitBox: {
    marginHorizontal: wp('4%'),
    marginBottom: wp('3%'),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10
  },
  createHabitContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: wp('3%')
  },
  createHabitText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#333'
  },
  addButton: {
    backgroundColor: ACCENT_COLOR,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600'
  },
  popularSection: {
    paddingHorizontal: wp('4%'),
    paddingVertical: wp('2%'),
    backgroundColor: 'white'
  },
  popularHabitItem: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginBottom: wp('2%'),
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  habitItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('3%')
  },
  habitIcon: {
    fontSize: wp('8%'),
    marginRight: wp('3%')
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
  addPopularButton: {
    backgroundColor: ACCENT_COLOR,
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPopularButtonText: {
    color: 'white',
    fontSize: wp('5%'),
    fontWeight: 'bold'
  },
  pomodoroBox: {
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    marginTop: wp('2%'),
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  pomodoroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('3%')
  },
  pomodoroIcon: {
    marginRight: wp('3%')
  },
  pomodoroTextContainer: {
    flex: 1
  },
  pomodoroTitle: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#333'
  },
  pomodoroSubtitle: {
    fontSize: wp('3.5%'),
    color: '#666'
  },
  habitsSection: {
    paddingHorizontal: wp('4%'),
    paddingTop: wp('3%'),
    backgroundColor: '#F9F9F9'
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('10%')
  },
  emptyStateEmoji: {
    fontSize: wp('12%'),
    marginBottom: wp('2%')
  },
  emptyStateText: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: wp('2%')
  },
  emptyStateSubtext: {
    fontSize: wp('3.5%'),
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: wp('5%')
  }
})

export default HabitScreen
