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
  id: string;
  attributes: {
    name: string;
    image: string;
    species: string;
    gender: string;
    house: string;
  };
}

export interface IHeroCardProps {
  key: string;
  character: ICharacter;
}
