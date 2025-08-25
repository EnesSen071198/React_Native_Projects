import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SelectModal from './SelectModal'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ACCENT_COLOR = '#BA9BEF'
const BACKGROUND_COLOR = '#F4F0F9'

const AddHabitForm = ({ visible, onClose, onSubmit, initialHabit }) => {
  const [habitType, setHabitType] = useState(
    initialHabit?.habitType || 'Evet&Hayır'
  )
  const [habitName, setHabitName] = useState(initialHabit?.habitName || '')
  const [question, setQuestion] = useState(initialHabit?.question || '')
  const [frequency, setFrequency] = useState(
    initialHabit?.frequency || 'Her Gün'
  )
  const [reminderHour, setReminderHour] = useState(
    initialHabit?.reminderTime?.split(':')[0] || '09'
  )
  const [reminderMinute, setReminderMinute] = useState(
    initialHabit?.reminderTime?.split(':')[1] || '30'
  )
  const [reminderDay, setReminderDay] = useState(
    initialHabit?.reminderDay || 'Her Gün'
  )
  const [notes, setNotes] = useState(initialHabit?.notes || '')

  // Additional states for measurable habits
  const [unit, setUnit] = useState(initialHabit?.unit || '')
  const [targetValue, setTargetValue] = useState(
    initialHabit?.targetValue || 15
  )
  const [targetType, setTargetType] = useState(
    initialHabit?.targetType || 'En Az'
  )

  // Modal visibility states
  const [currentModal, setCurrentModal] = useState(null)
  // Dropdown options
  const frequencies = [
    'Her Gün',
    'Hafta Sonu',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar'
  ]
  const units = ['Sayfa', 'Dakika', 'Saat', 'Kilometre', 'Adet', 'Kalori']
  const targetTypes = ['En Az', 'En Fazla', 'Ortalama']
  const targetNumbers = Array.from({ length: 30 }, (_, i) => (i + 1).toString())
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
  const minutes = Array.from({ length: 12 }, (_, i) =>
    String(i * 5).padStart(2, '0')
  )

  const Dropdown = ({ icon, options, value, onPress, placeholder, style }) => (
    <TouchableOpacity
      style={[styles.dropdownContainer, style]}
      onPress={onPress}
    >
      {icon && <View style={styles.dropdownIconContainer}>{icon}</View>}
      <Text style={styles.dropdownText}>{value || placeholder}</Text>
      <Ionicons name="chevron-down" size={20} color="#666" />
    </TouchableOpacity>
  )

  const handleSubmit = () => {
    const habit = {
      id: initialHabit?.id || Date.now().toString(),
      habitName,
      question,
      habitType,
      frequency,
      reminderTime: `${reminderHour}:${reminderMinute}`,
      reminderDay,
      notes,
      ...(habitType === 'Ölçülebilir' && {
        unit,
        targetValue,
        targetType
      })
    }

    onSubmit(habit)
    onClose()
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
      style={styles.modal}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
            <Icon name="angle-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Alışkanlık Oluştur</Text>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            {/* Habit Type Selection */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Alışkanlık Tipi</Text>
              <View style={styles.habitTypeContainer}>
                {['Evet&Hayır', 'Ölçülebilir'].map(type => (
                  <TouchableOpacity
                    key={type}
                    style={[
                      styles.habitTypeButton,
                      habitType === type && styles.habitTypeSelected
                    ]}
                    onPress={() => setHabitType(type)}
                  >
                    <Text
                      style={[
                        styles.habitTypeText,
                        habitType === type && styles.habitTypeTextSelected
                      ]}
                    >
                      {type}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Habit Name */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Alışkanlık İsmi</Text>

              <View style={styles.inputContainer}>
                <Ionicons
                  name="book-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  value={habitName}
                  onChangeText={setHabitName}
                  placeholder="Örn. Erken Kalkma"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Question */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Soru</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  value={question}
                  onChangeText={setQuestion}
                  placeholder="Örn. Bugün erken kalktın mı?"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Frequency */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Sıklık</Text>
              <Dropdown
                icon={<Ionicons name="repeat-outline" size={20} color="#666" />}
                value={frequency}
                onPress={() => setCurrentModal('frequency')}
                placeholder="Her Gün"
              />
            </View>

            {/* Measurable Habit Fields */}
            {habitType === 'Ölçülebilir' && (
              <>
                {/* Unit */}
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Birim</Text>
                  <Dropdown
                    icon={
                      <Ionicons
                        name="stats-chart-outline"
                        size={20}
                        color="#666"
                      />
                    }
                    value={unit}
                    onPress={() => setCurrentModal('unit')}
                    placeholder="Sayfa"
                  />
                </View>

                {/* Target and Frequency */}
                <View style={styles.rowContainer}>
                  <View style={styles.halfWidth}>
                    <Text style={styles.label}>Hedef</Text>
                    <Dropdown
                      icon={
                        <Ionicons
                          name="aperture-outline"
                          size={20}
                          color="#666"
                        />
                      }
                      value={targetValue.toString()}
                      onPress={() => setCurrentModal('targetValue')}
                      placeholder="15"
                    />
                  </View>
                  <View style={styles.halfWidth}>
                    <Text style={styles.label}>Sıklık</Text>
                    <Dropdown
                      icon={
                        <Ionicons
                          name="repeat-outline"
                          size={20}
                          color="#666"
                        />
                      }
                      value={frequency}
                      onPress={() => setCurrentModal('frequency')}
                      placeholder="Her Gün"
                    />
                  </View>
                </View>

                {/* Target Type */}
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Hedef Türü</Text>
                  <Dropdown
                    icon={
                      <Ionicons
                        name="analytics-outline"
                        size={20}
                        color="#666"
                      />
                    }
                    value={targetType}
                    onPress={() => setCurrentModal('targetType')}
                    placeholder="En Az"
                  />
                </View>
              </>
            )}

            {/* Reminder Time */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Hatırlatıcı</Text>
              <View style={styles.reminderRowContainer}>
                <TouchableOpacity
                  style={styles.reminderTimeContainer}
                  onPress={() => {
                    setCurrentModal('hour')
                  }}
                >
                  <Ionicons
                    name="time-outline"
                    size={20}
                    color="#666"
                    style={styles.inputIcon}
                  />
                  <Text style={styles.reminderTimeText}>{reminderHour}</Text>
                  <Text style={styles.timeSeparator}>:</Text>
                  <Text style={styles.reminderTimeText}>{reminderMinute}</Text>
                  <Ionicons
                    name="chevron-down"
                    size={20}
                    color="#666"
                    style={{ marginLeft: 'auto' }}
                  />
                </TouchableOpacity>

                <Dropdown
                  icon={
                    <Ionicons name="calendar-outline" size={20} color="#666" />
                  }
                  value={reminderDay}
                  onPress={() => setCurrentModal('reminderDay')}
                  style={styles.reminderDayDropdown}
                />
              </View>
            </View>
            {/* Notes */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Notlar</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="document-text-outline"
                  size={20}
                  color="#666"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  value={notes}
                  onChangeText={setNotes}
                  placeholder="Örn. Günaydın"
                  placeholderTextColor="#999"
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Select Modals */}
        <SelectModal
          visible={currentModal === 'frequency'}
          onClose={() => setCurrentModal(null)}
          onSelect={setFrequency}
          options={frequencies}
          title="Sıklık Seç"
          accentColor={ACCENT_COLOR}
        />

        <SelectModal
          visible={currentModal === 'unit'}
          onClose={() => setCurrentModal(null)}
          onSelect={setUnit}
          options={units}
          title="Birim Seç"
          accentColor={ACCENT_COLOR}
          titleStyle={{ backgroundColor: 'red' }}
        />

        <SelectModal
          visible={currentModal === 'targetValue'}
          onClose={() => setCurrentModal(null)}
          onSelect={value => setTargetValue(parseInt(value))}
          options={targetNumbers}
          title="Hedef Seç"
          accentColor={ACCENT_COLOR}
        />

        <SelectModal
          visible={currentModal === 'targetType'}
          onClose={() => setCurrentModal(null)}
          onSelect={setTargetType}
          options={targetTypes}
          title="Hedef Türü Seç"
          accentColor={ACCENT_COLOR}
        />

        {/* Saat Select Modal */}
        <SelectModal
          visible={currentModal === 'hour'}
          onClose={() => setCurrentModal(null)}
          onSelect={setReminderHour}
          options={hours}
          title="Saat Seç"
          accentColor={ACCENT_COLOR}
        />

        {/* Dakika Select Modal */}
        <SelectModal
          visible={currentModal === 'minute'}
          onClose={() => setCurrentModal(null)}
          onSelect={setReminderMinute}
          options={minutes}
          title="Dakika Seç"
          titleStyle={{ backgroundColor: 'red' }}
          accentColor={ACCENT_COLOR}
        />

        <SelectModal
          visible={currentModal === 'reminderDay'}
          onClose={() => setCurrentModal(null)}
          onSelect={setReminderDay}
          options={frequencies}
          title="Gün Seç"
          accentColor={ACCENT_COLOR}
        />
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    margin: 0
  },
  container: {
    flex: 1,
    backgroundColor: ACCENT_COLOR
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: ACCENT_COLOR
  },
  backButton: {
    marginRight: 16
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    paddingVertical: 50
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white'
  },
  formGroup: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12
  },
  inputIcon: {
    marginRight: 10
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333'
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 4
  },
  dropdownIconContainer: {
    marginRight: 10
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  habitTypeContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    overflow: 'hidden'
  },
  habitTypeButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  habitTypeSelected: {
    backgroundColor: ACCENT_COLOR
  },
  habitTypeText: {
    fontSize: 16,
    color: '#333'
  },
  habitTypeTextSelected: {
    color: 'white',
    fontWeight: '600'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  halfWidth: {
    width: '48%'
  },
  reminderRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reminderHalfWidth: {
    width: '56%',
    marginRight: 20
  },
  submitButton: {
    backgroundColor: ACCENT_COLOR,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: ACCENT_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
  reminderTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: '47%'
  },
  timeSeparator: {
    fontSize: 18,
    color: '#666',
    marginHorizontal: 4
  },
  reminderTimeText: {
    fontSize: 16,
    color: '#333',
    marginRight: 4
  },
  timeSeparator: {
    fontSize: 18,
    color: '#666',
    marginHorizontal: 4
  },
  reminderDayDropdown: {
    width: '47%',
    marginRight: 2
  }
})

export default AddHabitForm
