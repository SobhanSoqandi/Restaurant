

import { useQuery } from "@tanstack/react-query";
import { getProductMenu } from "../../services/Productservice";

export default function useProductMenu() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductMenu,
  });

  const { Products } = data || {};

  return { isLoading, Products };
}
