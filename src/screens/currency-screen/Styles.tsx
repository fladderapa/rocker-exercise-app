import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0F1E',
    paddingLeft: 12,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: 25,
  },
});

export const chartTheme = {
  axis: {
    style: {
      tickLabels: {
        fill: '#9393A5',
        fontSize: 12,
        padding: 10,
      },
      grid: {
        stroke: '#24253D',
        strokeDasharray: '2',
      },
    },
  },
};

export const lineStyle = {
  stroke: '#ffd5af',
  strokeWidth: 3,
};
