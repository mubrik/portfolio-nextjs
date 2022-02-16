import {useMemo} from "react";
// material
import { useTheme } from '@mui/material/styles';

const useGetGradientColor =  ():{bgColor: string} => {

  const theme = useTheme();

  const animateColors = useMemo(() => {

    const _bgColor = theme.palette.type == "dark" ? theme.palette.secondary.light : theme.palette.primary.light;
    const _gradientColor = theme.palette.type == "dark" ? "linear-gradient(127deg, rgb(25 0 84) 0%" : "linear-gradient(127deg, rgb(251 240 251) 0%";
    
    return {
      bgColor: `${_gradientColor}, ${_bgColor} 100%)`,
    };
  }, [theme]);

  return animateColors;
};

export default useGetGradientColor;