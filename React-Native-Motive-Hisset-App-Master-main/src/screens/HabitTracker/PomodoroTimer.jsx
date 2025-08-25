import React, { useState, useEffect, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Easing,
  ScrollView,
  Modal,
  StatusBar
} from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import Ionicons from "react-native-vector-icons/Ionicons"
import Svg, { Circle } from "react-native-svg"

const ACCENT_COLOR = '#BA9BEF'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const PomodoroTimer = ({ navigation }) => {
  const [selectedMinutes, setSelectedMinutes] = useState(20)
  const [timeLeft, setTimeLeft] = useState(selectedMinutes * 60)
  const [isActive, setIsActive] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const progressAnimation = useRef(new Animated.Value(1)).current
  const timerRef = useRef(null)

  useEffect(() => {
    setTimeLeft(selectedMinutes * 60)
    progressAnimation.setValue(1)
  }, [selectedMinutes])

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            setIsActive(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      Animated.timing(progressAnimation, {
        toValue: 0,
        duration: timeLeft * 1000,
        useNativeDriver: true,
        easing: Easing.linear
      }).start()
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isActive, timeLeft])

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`
  }

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(selectedMinutes * 60)
      progressAnimation.setValue(1)
    }
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(selectedMinutes * 60)
    progressAnimation.setValue(1)
  }

  const handleTimeSelect = (mins) => {
    setSelectedMinutes(mins)
    setTimeLeft(mins * 60)
    progressAnimation.setValue(1)
    setShowTimePicker(false)
  }

  const circleCircumference = 2 * Math.PI * 120

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meditasyon</Text>
      </View>

      <View style={styles.timerContainer}>
        <Svg height={280} width={280}>
          <Circle
            cx="140"
            cy="140"
            r="120"
            stroke="#E8E8E8"
            strokeWidth="15"
            fill="none"
          />
          <AnimatedCircle
            cx="140"
            cy="140"
            r="120"
            stroke={ACCENT_COLOR}
            strokeWidth="15"
            fill="none"
            strokeDasharray={`${circleCircumference} ${circleCircumference}`}
            strokeDashoffset={progressAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [circleCircumference, 0]
            })}
            strokeLinecap="round"
            transform="rotate(-90 140 140)"
          />
        </Svg>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      </View>

      <TouchableOpacity 
        style={styles.durationButton}
        onPress={() => setShowTimePicker(true)}
      >
        <Text style={styles.durationButtonText}>{selectedMinutes} Dakika</Text>
      </TouchableOpacity>

      <Modal
        visible={showTimePicker}
        transparent
        animationType="slide"
        onRequestClose={() => setShowTimePicker(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.timePickerContainer}>
            <Text style={styles.timePickerTitle}>Süre Seçin</Text>
            <ScrollView>
              {[5, 10, 15, 20, 25, 30].map((mins) => (
                <TouchableOpacity
                  key={mins}
                  style={[
                    styles.timePickerItem,
                    selectedMinutes === mins && styles.selectedTimePickerItem
                  ]}
                  onPress={() => handleTimeSelect(mins)}
                >
                  <Text 
                    style={[
                      styles.timePickerItemText,
                      selectedMinutes === mins && styles.selectedTimePickerItemText
                    ]}
                  >
                    {mins} Dakika
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      <TouchableOpacity 
        style={styles.startButton}
        onPress={toggleTimer}
      >
        <Text style={styles.startButtonText}>
          {isActive ? 'Durdur' : 'Başlat'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  timerContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp('5%')
  },
  timerText: {
    position: "absolute",
    fontSize: wp('12%'),
    fontWeight: "700",
    color: "#333"
  },
  durationButton: {
    marginTop: hp('3%'),
    backgroundColor: '#F0F0F0',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 20
  },
  durationButtonText: {
    color: '#333',
    fontSize: wp('4%'),
    fontWeight: '600'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  timePickerContainer: {
    backgroundColor: "white",
    width: wp('80%'),
    maxHeight: hp('50%'),
    borderRadius: 20,
    padding: wp('4%')
  },
  timePickerTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: hp('2%')
  },
  timePickerItem: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 10,
    marginBottom: hp('1%')
  },
  selectedTimePickerItem: {
    backgroundColor: ACCENT_COLOR
  },
  timePickerItemText: {
    fontSize: wp('4%'),
    color: '#333',
    textAlign: 'center'
  },
  selectedTimePickerItemText: {
    color: 'white',
    fontWeight: '600'
  },
  startButton: {
    position: 'absolute',
    bottom: hp('5%'),
    backgroundColor: ACCENT_COLOR,
    width: wp('80%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
    alignItems: 'center'
  },
  startButtonText: {
    color: 'white',
    fontSize: wp('4.5%'),
    fontWeight: '600'
  }
})

export default PomodoroTimer