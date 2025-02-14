import { useStorage } from "@vueuse/core";
import { toast } from "vue-sonner";
import { isExternal } from "../utils/misc";

export const toastBlogSponsor = () => {
  return toast("Enjoying the content?", {
    description:
      "We also offer sponsored posts to help you reach our audience.",
    duration: Infinity,
    closeButton: true,
    action: {
      label: "Learn more",
      onClick: () => window.open("/services#sponsored-posts"),
    },
  });
};

interface Sitenews {
  date: string;
  title: string;
  desc: string;
  link: string;
  cta: string;
}

export const toastSitenews = async () => {
  const STORE_KEY = "sitenews";
  const cachedDate = useStorage(STORE_KEY, null);

  try {
    const response = await fetch("/_" + STORE_KEY);
    if (!response.ok) return;

    const data: Sitenews = await response.json();
    if (!data.date || data.date === cachedDate.value) return;

    return toast(data.title, {
      description: data.desc,
      duration: data.desc ? 8000 : 4000,
      position: "top-center",
      action: {
        label: data.cta || "View",
        onClick: () => {
          window.open(data.link, isExternal(data.link) ? "_blank" : "_self");
          localStorage.setItem(STORE_KEY, data.date);
        },
      },
    });
  } catch (e) {
    console.error("Error displaying latest news toast - ", e);
  }
};

export const dismissToast = (id?: string | number) => {
  return toast.dismiss(id);
};
