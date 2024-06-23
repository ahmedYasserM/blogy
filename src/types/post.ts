interface Post {
  _id: string;
  createdat: string;
  slug: string;
  title: string;
  descr: string;
  img?: string;
  views: number;
  catslug: string;
  useremail: string;
}

export default Post;
