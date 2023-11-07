import * as React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

import { withExpoSnack } from 'nativewind';

import colors from "tailwindcss/colors";


const StyledView = styled(View, 'flex-1 items-center justify-center pt-5');
const StyledText = styled(Text)

const Localisation = () => {
  return (
    <StyledView>
      
    </StyledView>
  );
}

export default withExpoSnack(Localisation);

