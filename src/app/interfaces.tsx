export interface IPagination {
  count: number;
  defaultPage: number;
  onChange: any;
}

export interface ISearchProp {
  search: string;
  handleSearch: any;
  handleSubmit: any;
}

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  type: string;
}

export interface IHeroCardProps {
  key: number;
  character: ICharacter;
}
