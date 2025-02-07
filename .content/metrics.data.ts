import { defineLoader } from "vitepress";

interface Data {
  revenueCards: {
    id: string;
    title: string;
    subtitle: string;
  }[];
  stats: {};
}

declare const data: Data;

export { data };

export default defineLoader({
  async load() {
    const data: Data = {
      revenueCards: [
        {
          id: "cost",
          title: "Cost",
          subtitle: "Average monthly cost",
        },
        {
          id: "mrr",
          title: "MRR",
          subtitle: "Monthly Recurring Revenue",
        },
        {
          id: "arr",
          title: "ARR",
          subtitle: "Annual Recurring Revenue",
        },
        {
          id: "total",
          title: "Total",
          subtitle: "Total revenue from beginning",
        },
      ],
      stats: {},
    };

    return data;
  },
});
