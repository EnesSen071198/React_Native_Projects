import { StyleSheet } from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { colors, elevations } from "../../theme/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("2%"),
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.background,
    ...elevations.small
  },
  closeButton: {
    padding: wp("2%")
  },
  headerTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "600",
    color: colors.text.primary,
    flex: 1,
    textAlign: "center"
  },
  formContainer: {
    padding: wp("6%")
  },
  inputGroup: {
    marginBottom: hp("3%")
  },
  label: {
    fontSize: wp("4%"),
    color: colors.text.primary,
    marginBottom: hp("1%"),
    fontWeight: "500"
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    padding: wp("4%"),
    fontSize: wp("4%"),
    backgroundColor: colors.background,
    color: colors.text.primary
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: wp("2%")
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingVertical: wp("3%"),
    paddingHorizontal: wp("4%"),
    borderRadius: 8,
    flex: 0.48
  },
  radioButtonSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
    borderWidth: 1
  },
  radioButtonInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.text.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: wp("2%")
  },
  radioCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "transparent"
  },
  radioCircleSelected: {
    backgroundColor: colors.primary
  },
  radioText: {
    fontSize: wp("3.8%"),
    color: colors.text.secondary
  },
  radioTextSelected: {
    color: colors.primary,
    fontWeight: "500"
  },
  selectButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    padding: wp("4%")
  },
  selectButtonText: {
    fontSize: wp("4%"),
    color: colors.text.primary
  },
  reminderSection: {
    marginVertical: hp("2%"),
    padding: wp("4%"),
    backgroundColor: colors.surface,
    borderRadius: 8
  },
  reminderTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp("3%")
  },
  timePickerButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: wp("4%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.default,
    flex: 1
  },
  reminderDaysButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: wp("4%"),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.default,
    flex: 1
  },
  calendarIcon: {
    marginRight: wp("2%")
  },
  timeText: {
    fontSize: wp("4%"),
    color: colors.text.primary
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: wp("4%"),
    borderRadius: 8,
    alignItems: "center",
    marginTop: hp("2%"),
    ...elevations.small
  },
  submitButtonDisabled: {
    backgroundColor: colors.primaryLight,
    opacity: 0.7
  },
  submitButtonText: {
    color: colors.text.inverse,
    fontSize: wp("4%"),
    fontWeight: "600"
  },
  // Modal Styles
  timeModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  timeModalContent: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: wp("4%"),
    width: wp("80%"),
    maxHeight: hp("80%"),
    ...elevations.medium
  },
  timeModalTitle: {
    fontSize: wp("4.5%"),
    fontWeight: "600",
    color: colors.text.primary,
    textAlign: "center",
    marginBottom: hp("2%")
  },
  timePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: hp("2%")
  },
  timeScroller: {
    height: hp("20%"),
    width: wp("20%")
  },
  timeOption: {
    padding: wp("2%"),
    alignItems: "center"
  },
  timeOptionSelected: {
    backgroundColor: colors.primaryLight
  },
  timeOptionText: {
    fontSize: wp("4%"),
    color: colors.text.primary
  },
  timeOptionTextSelected: {
    color: colors.primary,
    fontWeight: "600"
  },
  timeColon: {
    fontSize: wp("6%"),
    fontWeight: "600",
    color: colors.text.primary
  },
  timeModalButton: {
    backgroundColor: colors.primary,
    padding: wp("3%"),
    borderRadius: 8,
    alignItems: "center",
    ...elevations.small
  },
  timeModalButtonText: {
    color: colors.text.inverse,
    fontSize: wp("4%"),
    fontWeight: "600"
  },
  // Days Grid Styles
  daysModalGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: hp("2%"),
    gap: wp("2%")
  },
  dayButton: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("5%"),
    backgroundColor: colors.surface,
    justifyContent: "center",
    alignItems: "center"
  },
  dayButtonSelected: {
    backgroundColor: colors.primary
  },
  dayButtonText: {
    fontSize: wp("3.5%"),
    color: colors.text.secondary
  },
  dayButtonTextSelected: {
    color: colors.text.inverse,
    fontWeight: "500"
  },
  // List Modal Styles
  modalScroll: {
    maxHeight: hp("40%")
  },
  modalOption: {
    padding: wp("4%"),
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light
  },
  modalOptionSelected: {
    backgroundColor: colors.primaryLight
  },
  modalOptionText: {
    fontSize: wp("4%"),
    color: colors.text.primary
  },
  modalOptionTextSelected: {
    color: colors.primary,
    fontWeight: "500"
  },
  modalButton: {
    backgroundColor: colors.primary,
    padding: wp("3%"),
    borderRadius: 8,
    alignItems: "center",
    marginTop: hp("2%"),
    ...elevations.small
  },
  modalButtonText: {
    color: colors.text.inverse,
    fontSize: wp("4%"),
    fontWeight: "600"
  }
})
