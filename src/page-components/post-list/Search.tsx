import React, { FC } from "react";
import { TextField } from "@mui/material";
import { useQueryParams } from "src/hooks/useQueryParams";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";

export const Search: FC = () => {
  const { setQueryParam } = useQueryParams();

  const onChangeSearch = (value: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParam(QUERY_PARAM_KEYS.SEARCH, value.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="standard"
      onChange={onChangeSearch}
      fullWidth
    />
  );
};
