import { Canvas, Circle, Group, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { useImage } from '@shopify/react-native-skia';

const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const bird = useImage(require('./assets/sprites/yellowbird-upflap.png'));
  const pipe = useImage(require('./assets/sprites/pipe-green.png'));
  const pipeTop = useImage(require('./assets/sprites/pipe-green-top.png'));
  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />
      <Image
        image={pipe}
        y={height - 320}
        x={width / 2}
        width={104}
        height={640}
      />
      <Image image={pipeTop} y={-320} x={width / 2} width={104} height={640} />
      <Image
        image={bird}
        x={width / 4}
        y={height / 2 - 24}
        width={64}
        height={48}
        fit={'contain'}
      />
    </Canvas>
  );
};
export default App;
