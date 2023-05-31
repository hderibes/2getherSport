import * as React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';

import { withExpoSnack } from 'nativewind';

import colors from "tailwindcss/colors";


const StyledView = styled(View, 'fixed flex-1 items-center justify-center bg-white pt-5 pb-2');
const StyledText = styled(Text)

const Top = () => {
  return (
    <StyledView>
      <StyledText className="tracking-tight text-slate-800 text-2xl font-extrabold leading-3">2GETHER</StyledText>
      <StyledText className="tracking-wide text-orange-600 text-xl font-extrabold">SPORT</StyledText>
    </StyledView>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(Top);