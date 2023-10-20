type TRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  topics: string[];
};

type TResponse = {
  data: TRepository[] | [];
  success: boolean;
};

type TContactForm = {
  name: string;
  message: string;
};


export type { TResponse, TRepository, TContactForm };
