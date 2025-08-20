import React, { useState, useRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  View,
  Vibration,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface PanicButtonProps {
  onPress: () => void;
  onLongPress?: () => void;
}

export default function PanicButton({ onPress, onLongPress }: PanicButtonProps) {
  const [isPressed, setIsPressed] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const pulseValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = async () => {
    setIsPressed(true);
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseValue, {
            toValue: 1.1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(pulseValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    pulseValue.stopAnimation();
    
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(pulseValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Vibration.vibrate([0, 100, 100, 100]);
    onPress();
  };

  const handleLongPress = async () => {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    Vibration.vibrate([0, 200, 100, 200, 100, 200]);
    onLongPress?.();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.buttonContainer,
        { 
          transform: [
            { scale: scaleValue },
            { scale: pulseValue }
          ] 
        }
      ]}>
        <TouchableOpacity
          style={[styles.button, isPressed && styles.buttonPressed]}
          onPress={handlePress}
          onLongPress={handleLongPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.8}
          delayLongPress={3000}
          testID="panic-button"
        >
          <View style={styles.innerButton}>
            <Ionicons 
              name="warning" 
              size={45} 
              color="#FFFFFF" 
              style={styles.icon}
            />
            <Text style={styles.buttonText}>SOS</Text>
            <Text style={styles.helpText}>EMERGENCY</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>Tap for quick alert</Text>
        <Text style={styles.instructionSubtext}>Hold 3 seconds for silent emergency</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    shadowColor: '#DC2626',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 20,
  },
  button: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#DC2626',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: '#FFFFFF',
  },
  buttonPressed: {
    backgroundColor: '#B91C1C',
    transform: [{ scale: 0.98 }],
  },
  innerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: 2,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  instructionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  instructionSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
});
