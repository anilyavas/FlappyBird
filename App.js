import React from 'react';
import { Canvas, Circle, Group, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { useImage } from '@shopify/react-native-skia';

const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />
    </Canvas>
  );
};
export default App;
