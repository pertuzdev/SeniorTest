import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';
import {StyleSheet, View} from 'react-native';

interface IProps {}

export const CharacterItemLoader = (props: IProps) => (
  <ContentLoader
    speed={2}
    width={476}
    height={70}
    viewBox="0 0 476 70"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <Rect x="66" y="24" rx="3" ry="3" width="88" height="8" />
    <Rect x="63" y="45" rx="3" ry="3" width="178" height="8" />
    <Circle cx="25" cy="35" r="25" />
  </ContentLoader>
);

export const CharacterListLoader = ({
  limit = 6,
  props,
}: {
  limit?: number;
  props?: IProps;
}) => (
  <View>
    {[...Array(limit)].map((item, index) => (
      <View key={index} style={styles.wrapper}>
        <CharacterItemLoader {...props} />
      </View>
    ))}
  </View>
);

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
