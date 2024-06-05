export interface Course {
  id: number;
  name: string;
  photo: string;
  description: string;
  url: string;
  moreUrl: string;
  money: number;
  teacher: {
    name: string;
    img: string;
  };
  student: number;
  star: number;
}
