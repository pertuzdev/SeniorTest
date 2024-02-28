import {ITheme} from '@/theme/theme';
import {useTheme} from '@react-navigation/native';

export const useCustomTheme = useTheme as () => ITheme;
