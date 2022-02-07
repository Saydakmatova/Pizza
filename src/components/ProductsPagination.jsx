import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../actions/AdminAction";

const ProductsPagination = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = new URLSearchParams(window.location.search);

  const { total } = useSelector((state) => state.adminReducer);
  const productsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(search.get("_page") || 1);

  useEffect(() => {
    search.set("_limit", productsPerPage);
    search.set("_page", currentPage);
    navigate(`${window.location.pathname}?${search.toString()}`);
    dispatch(getProducts());
  }, [currentPage]);

  return (
    <div className="products-pagination">
      <Pagination
        onChange={(_, value) => setCurrentPage(value)}
        count={Math.ceil(total / productsPerPage)}
        color="success"
      />
    </div>
  );
};

export default ProductsPagination;
