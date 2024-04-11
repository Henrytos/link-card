export interface Person {
  id?: string;
  name?: string;
  links?: Link[];
  srcImg?: string;
}

export interface Link {
  name: string;
  url: string;
}
