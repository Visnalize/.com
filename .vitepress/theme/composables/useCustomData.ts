import { useData } from "vitepress";
import { ref, watchEffect } from "vue";
import { useBreakpoints } from "./useVueUse";

/**
 * Custom frontmatter meta data that are not part of the default theme's frontmatter.
 */
const useCustomData = () => {
  const breakpoints = useBreakpoints();
  const data = useData();
  const blogTags = ref<string[]>([]);
  const createdDate = ref("");
  const enableAds = ref(false);
  const enableSocial = ref(false);
  const enableComments = ref(false);

  watchEffect(() => {
    const { ads, social, comments, tags, createdAt } = data.frontmatter.value;
    blogTags.value = tags ?? [];
    createdDate.value = createdAt
      ? new Date(createdAt).toLocaleDateString(undefined, {
          dateStyle: breakpoints.sm.value ? "medium" : "short",
        })
      : "";
    enableAds.value = ads ?? true;
    enableSocial.value = social ?? true;
    enableComments.value = comments ?? enableSocial.value ?? true;
  });

  return {
    tags: blogTags,
    createdDate,
    enableAds,
    enableComments,
    enableSocial,
  };
};

export default useCustomData;
