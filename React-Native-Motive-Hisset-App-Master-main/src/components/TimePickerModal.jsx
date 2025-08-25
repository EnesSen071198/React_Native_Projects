// src/components/TimePickerModal.tsx
import React, { useState, useCallback, memo } from 'react'
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TimePickerModal = ({
  visible,
  onClose,
  onSelectTime,
  initialTime = '09:00'
}) => {
  const [selectedHour, setSelectedHour] = useState(initialTime.split(':')[0])
  const [selectedMinute, setSelectedMinute] = useState(
    initialTime.split(':')[1]
  )

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  )
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  const WheelPicker = memo(({ data, selectedValue, onValueChange, label }) => (
    <View style={styles.wheelContainer}>
      <Text style={styles.wheelLabel}>{label}</Text>
      <View style={styles.wheelWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          decelerationRate="fast"
          onMomentumScrollEnd={event => {
            const y = event.nativeEvent.contentOffset.y
            const index = Math.round(y / 40)
            if (data[index]) {
              onValueChange(data[index])
            }
          }}
        >
          {data.map(value => (
            <TouchableOpacity
              key={value}
              style={[
                styles.wheelItem,
                value === selectedValue && styles.selectedWheelItem
              ]}
              onPress={() => onValueChange(value)}
            >
              <Text
                style={[
                  styles.wheelItemText,
                  value === selectedValue && styles.selectedWheelItemText
                ]}
              >
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  ))

  const handleConfirm = useCallback(() => {
    onSelectTime(`${selectedHour}:${selectedMinute}`)
    onClose()
  }, [selectedHour, selectedMinute, onSelectTime, onClose])

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={e => {
              e.stopPropagation()
              e.preventDefault()
            }}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Saat Seçin</Text>
              <TouchableOpacity onPress={onClose}>
                <MaterialIcons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={styles.pickerContainer}>
              <WheelPicker
                data={hours}
                selectedValue={selectedHour}
                onValueChange={setSelectedHour}
                label="Saat"
              />
              <Text style={styles.timeSeparator}>:</Text>
              <WheelPicker
                data={minutes}
                selectedValue={selectedMinute}
                onValueChange={setSelectedMinute}
                label="Dakika"
              />
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Seç</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 300,
    padding: 20
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  wheelContainer: {
    width: 80,
    height: 200
  },
  wheelWrapper: {
    flex: 1,
    overflow: 'hidden'
  },
  wheelLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center'
  },
  wheelItem: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wheelItemText: {
    fontSize: 20,
    color: '#333'
  },
  selectedWheelItem: {
    backgroundColor: 'rgba(186, 155, 239, 0.1)'
  },
  selectedWheelItemText: {
    color: '#BA9BEF',
    fontWeight: '600'
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginHorizontal: 15
  },
  confirmButton: {
    backgroundColor: '#BA9BEF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
})

export default memo(TimePickerModal)
