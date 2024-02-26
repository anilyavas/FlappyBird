import { Canvas, Circle, Group, Image } from '@shopify/react-native-skia';
import { useWindowDimensions } from 'react-native';
import { useImage } from '@shopify/react-native-skia';

const App = () => {
  const { width, height } = useWindowDimensions();
  const bg = useImage(require('./assets/sprites/background-day.png'));
  const bird = useImage(require('./assets/sprites/yellowbird-upflap.png'));
  const r = width * 0.33;
  return (
    <Canvas style={{ width, height }}>
      <Image image={bg} width={width} height={height} fit={'cover'} />
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
