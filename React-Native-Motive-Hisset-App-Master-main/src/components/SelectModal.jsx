import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet
} from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SelectModal = ({
  visible,
  onClose,
  onSelect,
  options,
  title,
  multiple = false,
  selectedValues = []
}) => {
  const [selected, setSelected] = useState(selectedValues)

  const handleSelect = item => {
    if (multiple) {
      const isSelected = selected.includes(item)
      const newSelected = isSelected
        ? selected.filter(value => value !== item)
        : [...selected, item]
      setSelected(newSelected)
    } else {
      setSelected([item])
      onSelect(item)
      onClose()
    }
  }

  const handleMultipleSelect = () => {
    onSelect(selected)
    onClose()
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.optionItem,
        selected.includes(item) && styles.selectedOptionItem
      ]}
      onPress={() => handleSelect(item)}
    >
      <Text style={styles.optionText}>{item}</Text>
      {selected.includes(item) && (
        <MaterialIcons name="check" size={20} color="#BA9BEF" />
      )}
    </TouchableOpacity>
  )

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.optionsList}
          />

          {multiple && (
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleMultipleSelect}
            >
              <Text style={styles.confirmButtonText}>Onayla</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  optionsList: {
    maxHeight: 400
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  selectedOptionItem: {
    backgroundColor: '#f0f0f0'
  },
  optionText: {
    fontSize: 16
  },
  confirmButton: {
    backgroundColor: '#BA9BEF',
    padding: 16,
    alignItems: 'center'
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '600'
  }
})

export default SelectModal
