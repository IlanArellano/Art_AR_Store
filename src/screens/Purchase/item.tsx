import React from 'react';
import {View, Text, ListRenderItemInfo, StyleSheet} from 'react-native';
import {CartItems} from '@app/context';
import {moneyFormat} from '@app/common';

export default function PurchaseItem({
  index,
  item,
  separators,
}: ListRenderItemInfo<CartItems>) {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.articleText}>Articulo {index + 1}</Text>
        <Text>{item.item.name}</Text>
        <Text>
          {item.item.width}cm x {item.item.height}cm
        </Text>
        <Text>
          {item.count} x {moneyFormat(item.item.price)}
        </Text>
      </View>
      <View>
        <Text style={styles.totalText}>
          {moneyFormat(item.count * item.item.price)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  articleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  totalText: {
    fontWeight: 'bold',
  },
});
