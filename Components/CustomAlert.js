import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';

const CustomAlert = ({ isVisible, onClose, onConfirm }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Congratulations🎉</Text>
        <Text style={styles.message}>You won a mining Key</Text>
        <MaterialIcons name="key" size={30} color="yellow" style={{  marginBottom: 20,}} />
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Text style={styles.buttonText}>Start Mining</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#3c1642',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth:2,
    borderColor:"#fff"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#fff"
  },
  message: {
    fontSize: 12,
  
    color:"#fff"
  },
  button: {
    backgroundColor: '#f01c8b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth:1,
    borderColor:"#fff"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomAlert;
