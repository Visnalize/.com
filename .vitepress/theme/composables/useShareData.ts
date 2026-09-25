import { useData, useRoute } from "vitepress";
import { computed } from "vue";
import { ORIGIN } from "../constants";

export interface ShareData {
  url: string;
  title?: string;
  description?: string;
}

/**
 * What a share of the current page sends. The URL is built from the route, not
 * the address bar, so a `#comments` hash or tracking query is never shared.
 */
const useShareData = () => {
  const { page } = useData();
  const route = useRoute();

  return computed<ShareData>(() => ({
    url: ORIGIN + route.path,
    title: page.value.title,
    description: page.value.description,
  }));
};

export default useShareData;
