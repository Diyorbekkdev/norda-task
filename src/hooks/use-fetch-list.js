import {useQuery} from "@tanstack/react-query";
import {apiHelpers} from "@/utils";

export const useFetchList = ({
                               url,
                               customQueryFn,
                               queryOptions = {},
                               Params = {},
                             }) => {
  const params = {...Params};
  const query = useQuery(
    apiHelpers.getQueryKey("GET", url, params),

    apiHelpers.ultimateQueryFn(customQueryFn, params),

    {
      select: (responseData) => responseData,
      ...queryOptions,
    }
  );

  return {
    ...query,
  };
};
