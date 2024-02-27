import { Canvas, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useImage } from '@shopify/react-native-skia';
import {
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
  withRepeat,
  useFrameCallback,
} from 'react-native-reanimated';
import { useEffect } from 'react';

const GRAVITY = 500;

const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const bird = useImage(require('./assets/sprites/yellowbird-upflap.png'));
  const pipeBottom = useImage(require('./assets/sprites/pipe-green.png'));
  const pipeTop = useImage(require('./assets/sprites/pipe-green-top.png'));
  const base = useImage(require('./assets/sprites/base.png'));

  const x = useSharedValue(width);
  const birdY = useSharedValue(0);
  const birdYVelocity = useSharedValue(100);

  useFrameCallback(({ timeSincePreviousFrame: dt }) => {
    if (!dt) {
      return;
    }
    birdY.value = birdY.value + (birdYVelocity.value * dt) / 1000;
    birdYVelocity.value = birdYVelocity.value + (GRAVITY * dt) / 1000;
  });

  useEffect(() => {
    x.value = withRepeat(
      withSequence(
        withTiming(-150, { duration: 3000, easing: Easing.linear }),
        withTiming(width, { duration: 0 })
      ),
      -1
    );
  }, []);

  const pipeOffset = 0;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Canvas
        style={{ width, height }}
        onTouch={() => (birdYVelocity.value = -300)}
      >
        <Image image={bg} width={width} height={height} fit={'cover'} />

        {/* Pipes */}
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
        {/* Ground */}
        <Image
          image={base}
          width={width}
          height={150}
          y={height - 75}
          x={0}
          fit={'cover'}
        />
        <Image
          image={bird}
          x={width / 4}
          y={birdY}
          width={64}
          height={48}
          fit={'contain'}
        />
      </Canvas>
    </GestureHandlerRootView>
  );
};
export default App;
