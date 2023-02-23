/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
const CleverTap = require('clevertap-react-native');
CleverTap.createNotificationChannel("S69", "Clever Tap React Native Testing", "CT React Native Testing", 5, true) // The notification channel importance can have any value from 1 to 5. A higher value means a more interruptive notification.
import type {PropsWithChildren} from 'react';
import {Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

CleverTap.setDebugLevel(3);
CleverTap.initializeInbox();

//get the data by itself 
CleverTap.addListener(CleverTap.CleverTapDisplayUnitsLoaded, (data) => { 
  console.log("hyyyyyyyyyyyyyyyyyy",data);
  
  /* consume the event data */
});



function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

 
       

         
         <Button title="OnUserLogin" onPress={() => CleverTap.onUserLogin({'Name': 'S', 'Identity': '111', 'Email': 'sh@gmail.com', 'custom1': 23})}/>
         
         <Button title="PushProfile" onPress={()=> CleverTap.profileSet({'Name': 'H', 'Identity': '23', 'Email': 'h@gmail.com', 'custom1': 16})}/>
         
         <Button title="Charged" onPress={() => CleverTap.recordChargedEvent({ 'totalValue': 20, 'category': 'books', 'purchase_date': new Date() },
      [{ 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
      { 'title': 'book2', 'published_date': new Date('2000-12-12T06:35:31') },
      { 'title': 'book3', 'published_date': new Date(), 'author': 'XYZ' }])}/>
      
      
         <Button title="push event" onPress={() => CleverTap.recordEvent('testEvent')}/>
         <Button title="event properties" onPress={() => CleverTap.recordEvent('Product Viewed', {'Product Name': 'Dairy Milk','Category': 'Chocolate','Amount': 20.00})}/>
         <Button title="AppInbox" onPress={() => CleverTap.showInbox({
        'tabs': ['Offers', 'Promotions'],
        'navBarTitle': 'My App Inbox',
        'navBarTitleColor': '#FF0000',
        'navBarColor': '#FFFFFF',
        'inboxBackgroundColor': '#AED6F1',
        'backButtonColor': '#00FF00',
        'unselectedTabColor': '#0000FF',
        'selectedTabColor': '#FF0000',
        'selectedTabIndicatorColor': '#000000',
        'noMessageText': 'No message(s)',
        'noMessageTextColor': '#FF0000'
    })}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
