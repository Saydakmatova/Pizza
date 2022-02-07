import { Pagination } from "@mui/material";
import React from "react";

const ProductsPagination = () => {
  return (
    <div className="products-pagination">
      <Pagination count={3} color="success" />
    </div>
  );
};

export default ProductsPagination;
