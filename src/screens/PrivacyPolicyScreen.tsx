import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const PrivacyPolicyScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding:10,
      }}>
      <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus error maxime quae sed harum quos sit obcaecati recusandae nulla ratione voluptatem a doloremque adipisci molestias blanditiis, suscipit quibusdam, vitae maiores praesentium. Voluptate est perspiciatis, delectus dolore laudantium odio quas nobis minima provident error consequatur nihil dicta voluptatum, maxime animi.</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis facere a nostrum. Fuga amet corporis nihil, quaerat natus enim, autem incidunt distinctio, eligendi aut debitis. Doloremque, unde a cumque ullam expedita iure accusantium consequatur! Dolorum facere accusantium eum nemo ex corporis earum quo at nesciunt quas aperiam expedita nam atque, sint in cumque mollitia laborum ducimus iusto libero. Nemo ipsa veniam voluptatibus maxime fugiat culpa ducimus in cum saepe aut eum dolorem facilis commodi accusantium magnam nisi dolore numquam, rerum repudiandae iusto quae laboriosam dignissimos. Commodi esse sed consequuntur unde expedita magni, soluta facilis rem accusamus itaque dolore sint repudiandae?</Text>
    </View>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  text:{
    fontSize:SIZES.font,
    color:COLORS.primary,
    fontFamily:FONTS.light,
    marginTop:10,
  }
});
