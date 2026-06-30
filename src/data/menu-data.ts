// type
type IMenuDataType = {
  id: number;
  title: string;
  link: string;
  sub_menu?: {
      title: string;
      link: string;
  }[];
}

const menu_data:IMenuDataType[] = [
  {
    id:1,
    title:'Home',
    link:'/',
  },
  {
    id:2,
    title:'About',
    link:'/about',
  },
  {
    id:3,
    title:'Portfolio',
    link:'/portfolio',
  },
  {
    id:4,
    title:'Contact',
    link:'/contact',
  },
]

export default menu_data;