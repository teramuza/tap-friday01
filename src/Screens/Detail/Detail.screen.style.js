import {StyleSheet} from 'react-native';
import {rbr, rh, rw} from '../../Utils/Layout.util';

export const Styles = StyleSheet.create({
  button: {
    height: rh(30),
    width: rw(80),
    backgroundColor: 'green',
    borderRadius: rbr(6),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: rw(10),
    marginTop: rh(15),
  },
  textButton: {
    color: 'white',
  },
})
