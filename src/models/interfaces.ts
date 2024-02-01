// @/models/interfaces.ts
export interface IOurAchievement {
  id:number;
  label:string;
  value:string;
};
export interface IFundFeatures {
  title:string;
  description:string;
  icon:React.ReactNode;
}

export interface IOurVideos {
  id:number;
  title:string;
  url:string;
};

export interface IOurAward {
  id:number;
  title:string;
  image:string;
  body:string;
};

export interface ITeamMember {
  id:number;
  name:string;
  photo?:string;
  professional?:string;
  description?:string;
  territory?:{
    city:string;
    logo:string;
  };
};


