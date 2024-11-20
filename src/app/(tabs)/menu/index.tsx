import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

import { FlatList, View } from "react-native";

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
