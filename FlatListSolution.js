The solution involves using the `windowSize` and `getItemLayout` props within the `FlatList` component.  `windowSize` controls how many items are rendered around the visible area, while `getItemLayout` provides the dimensions of each item, allowing the component to efficiently calculate which items to render.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => (
    <View>
      <Text>{item.text}</Text>
    </View>
  )}
  windowSize={10} // Render 10 items around visible area
  getItemLayout={(data, index) => ({ 
    length: ITEM_HEIGHT, // Assume a constant item height
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
```

Remember to define `ITEM_HEIGHT` appropriately based on your item's dimensions.  This approach significantly reduces the number of rendered items, resolving the performance issue.