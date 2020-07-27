import React, {useState, useCallback, useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';

const TextArea = ({
  label,
  borderColor,
  borderHeight,
  inputPadding,
  backgroundColor,
  textContentType,
  isPassword,
  style,
  value,
  onChange,
}) => {
  return (
    <Hoshi
      value={value}
      onChangeText={onChange}
      secureTextEntry={isPassword}
      textContentType={textContentType}
      style={style}
      label={label}
      borderColor={borderColor}
      borderHeight={borderHeight}
      inputPadding={inputPadding}
      backgroundColor={backgroundColor}
    />
  );
};

export default TextArea;
