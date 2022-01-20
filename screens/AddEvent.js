
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles';
import { Pressable } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  monthNamesShort: ['Jan', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr';

export function AddEventView({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const buildings = [
      {label: 'TNRB', value: 'TNRB'},
      {label: 'JFSB', value: 'JFSB'}
    ];
    var todaysDate = new Date().getFullYear() + "-" + parseInt(new Date().getMonth()+1).toString().padStart(2, '0') + "-" + (new Date().getDate()).toString().padStart(2, '0');
    

    return (
      <View style={addEventStyles.page}>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Title"/>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Organizer"/>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Food"/>
        <Pressable style={addEventStyles.locationButton} onPress={() => {
          navigation.navigate("Location");
        }}><Text style={addEventStyles.text}>Location</Text></Pressable>
        <TextInput
          multiline={true}
          placeholder="Description"
          style={[addEventStyles.textInput, addEventStyles.text, addEventStyles.descriptionTextBox]}/>
          <Text style={addEventStyles.calendarTitle}>Calendar Month Here</Text>
          <Calendar

            style={[addEventStyles.calendar]}
            // Initially visible month. Default = now
            current={todaysDate}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={todaysDate}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={undefined}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              console.log('selected day', day);
              
              //var date = new Date().getFullYear() + "-" + parseInt(new Date().getMonth()+1) + "-" + new Date().getDate();
              //console.log(date.toString());
            }}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={day => {
              console.log('selected day', day);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={month => {
              console.log('month changed', month);
            }}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={direction => <Arrow />}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={false}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
            firstDay={0}
            // Hide day names. Default = false
            hideDayNames={false}
            // Show week numbers to the left. Default = false
            showWeekNumbers={false}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={subtractMonth => subtractMonth()}
            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            // Disable left arrow. Default = false
            disableArrowLeft={false}
            // Disable right arrow. Default = false
            disableArrowRight={false}
            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
            disableAllTouchEventsForDisabledDays={true}
            // Replace default month and year title with custom one. the function receive a date as parameter
            renderHeader={date => {
              /*Return JSX*/
            }}
            // Enable the option to swipe between months. Default = false
            enableSwipeMonths={true}
          />
      </View>
    )
  }

  const addEventStyles = StyleSheet.create({
    page: {
      display: "flex",
      backgroundColor: "#fff",
      height: "100%"
    },
    textInput: {
      borderBottomWidth: 1,
      padding: 8
    },
    locationButton: {
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      padding: 8  
    },
    text: {
      fontSize: 18
    },
    descriptionTextBox: {
      height: "10%",
    },
    calendar: {
      padding: 100 //Arbitrary - change if needed
    }, 
    calendarTitle: {
      //Add style for calendar title here
    }
  });