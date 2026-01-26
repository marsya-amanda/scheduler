import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { cardStyles } from './styles';

type cardHeaderProps = {
    title: string,
    expanded: boolean,
    onPress: () => void
}

export default function CardHeader({ title, expanded, onPress }: cardHeaderProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={cardStyles.titleContainer}>
        <Text style={cardStyles.cardTitle}>{title}</Text>
        <Ionicons
          name={expanded ? 'arrow-up' : 'arrow-down'}
          size={20}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}