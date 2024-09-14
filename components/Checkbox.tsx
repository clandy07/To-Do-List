import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ViewStyle, TextStyle, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CheckboxProps {
  text: string;
  onPress: () => void;
  isChecked: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
}

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}>
        {isChecked && (
          <Icon name="checkmark" size={20} style={styles.checkmark} />
        )}
      </TouchableOpacity>
      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: 'green',
  },
  checkmark: {
    color: 'white',
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Checkbox;
