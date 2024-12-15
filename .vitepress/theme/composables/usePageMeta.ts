import { useData } from "vitepress";
import { ref, watchEffect } from "vue";

const usePageMeta = () => {
  const data = useData();
  const blogTags = ref<string[]>([]);
  const createdDate = ref("");
  const enableSocial = ref(false);
  const enableComments = ref(false);

  watchEffect(() => {
    const { social, comments, tags, createdAt } = data.frontmatter.value;
    blogTags.value = tags ?? [];
    createdDate.value = createdAt
      ? new Date(createdAt).toLocaleDateString(undefined, {
          dateStyle: "medium",
        })
      : "";
    enableSocial.value = social ?? true;
    enableComments.value = comments ?? enableSocial.value ?? true;
  });

  return {
    tags: blogTags,
    createdDate,
    enableComments,
    enableSocial,
  };
};

export default usePageMeta;
