import React, { FC } from "react";
import { TEXT_INPUT_STYLE_VARIANTS } from "src/components/FormField/constants";
import { FormFieldVariants } from "src/components/FormField/types";
import { useQueryParams } from "src/hooks/useQueryParams";
import { QUERY_PARAM_KEYS } from "src/constants/queryParams";

export const Search: FC = () => {
  const { getQueryParam, setQueryParam } = useQueryParams();

  const searchQuery = getQueryParam(QUERY_PARAM_KEYS.SEARCH) || "";

  const onChangeSearch = (value: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParam(QUERY_PARAM_KEYS.SEARCH, value.target.value);
  };

  return (
    <input
      className={TEXT_INPUT_STYLE_VARIANTS[FormFieldVariants.SECONDARY]}
      placeholder="Search"
      value={searchQuery}
      onChange={onChangeSearch}
    />
  );
};
