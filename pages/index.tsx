import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import { ProductList } from "../components/products";
import { initialData } from "../database/products";
import { ShopLayout } from "../layouts";

const HomePage: NextPage = () => {
  return (
    <ShopLayout
      title="Deconejo - Tienda Online - Página Home"
      pageDescription="Encuentra los mejores productos para tu Hogar"
    >
      <Typography variant="h1" component="h1">
        Deconejo
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Deconejo
      </Typography>

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default HomePage;
