import { Canvas, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { useImage } from '@shopify/react-native-skia';
import { useSharedValue, withTiming, Easing } from 'react-native-reanimated';
import { useEffect } from 'react';

const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const bird = useImage(require('./assets/sprites/yellowbird-upflap.png'));
  const pipeBottom = useImage(require('./assets/sprites/pipe-green.png'));
  const pipeTop = useImage(require('./assets/sprites/pipe-green-top.png'));
  const base = useImage(require('./assets/sprites/base.png'));

  const x = useSharedValue(width);

  useEffect(() => {
    x.value = withTiming(-200, { duration: 3000, easing: Easing.linear });
  }, []);

  const pipeOffset = 0;

  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />

      <Image
        image={pipeTop}
        y={pipeOffset - 320}
        x={x}
        width={103}
        height={640}
      />
      <Image
        image={pipeBottom}
        y={height - 320 + pipeOffset}
        x={x}
        width={103}
        height={640}
      />
      <Image
        image={bird}
        x={width / 4}
        y={height / 2 - 24}
        width={64}
        height={48}
        fit={'contain'}
      />
      <Image
        image={base}
        width={width}
        height={150}
        y={height - 75}
        x={0}
        fit={'cover'}
      />
    </Canvas>
  );
};
export default App;
