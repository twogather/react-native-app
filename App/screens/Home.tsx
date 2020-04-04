import React, { useRef, useEffect } from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flex: 1,
    backgroundColor: '#9fc85b',
    textAlign: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 8,
  },
  lastIdContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  lastFetch: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 8,
  },
  radiusContainer: {
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  radius1: {
    position: 'absolute',
    top: 120,
    borderRadius: 50,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  radius2: {
    position: 'absolute',
    top: 60,
    borderRadius: 110,
    width: 220,
    height: 220,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  radius3: {
    borderRadius: 170,
    width: 340,
    height: 340,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  contacts: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
    marginBottom: 32,
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  buttonInfected: {
    backgroundColor: '#9fc85b',
    borderRadius: 6,
    marginBottom: 24,
    marginLeft: 16,
    marginRight: 16,
    padding: 12,
  },
  buttonInfectedTitle: {
    color: 'white',
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontSize: 14,
    fontFamily: 'Ubuntu-M',
  },
});

const RefreshView = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current
  const rotateProp = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  })

  React.useEffect(() => {
    Animated.timing(
      rotateAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }
    ).start();
  }, [])

  return(
    <Animated.View
      style={{
        ...props.style,
        transform: [
          {rotate: rotateProp},
          {perspective: 1000},
        ]
      }}
    >
      {props.children}
    </Animated.View>
  )
}

export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ito</Text>
      <View style={styles.lastIdContainer}>
        <Text style={styles.lastFetch}>
          Last ID fetch: today 11:04{'  '}
        </Text>
        <RefreshView>
          <Icon name="refresh-ccw" size={18} />
        </RefreshView>
      </View>

      <View style={styles.radiusContainer}>
        <Text style={styles.radius1} />
        <Text style={styles.radius2} />
        <Text style={styles.radius3} />
      </View>
      <Text style={styles.contacts}>just a few contacts around you</Text>
      <View style={styles.bottomButtonContainer}>
        <Button
          title="I think I'm infected"
          onPress={() => navigation.navigate('Endangerment')}
          titleStyle={styles.buttonInfectedTitle}
          buttonStyle={styles.buttonInfected}
        />
      </View>
    </View>
  );
}
export default Home;
