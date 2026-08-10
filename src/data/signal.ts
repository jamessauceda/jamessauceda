export type Signal = {
  id: string;
  value: string;
  label: string;
  why: string;
  detail: string;
  relatedWork?: {
    slug: string;
    title: string;
  };
};
