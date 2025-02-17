# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using the `FlatList` component in React Native with large datasets. The problem stems from the `renderItem` function being called for every item, even those not currently visible on the screen.  This leads to significant performance degradation and potential crashes.

## Problem
The provided `FlatListBug.js` file shows a `FlatList` component rendering a large dataset.  Because `renderItem` is invoked for each item, it causes significant lag and memory consumption.

## Solution
The `FlatListSolution.js` file demonstrates how to optimize the `FlatList` component using `windowSize` and `getItemLayout` props to only render visible items, drastically improving performance.

This repository helps to illustrate and resolve one of the more common pitfalls associated with using FlatList in React Native applications.