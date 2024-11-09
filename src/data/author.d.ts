declare module "../data/author.js" {
    interface Author {
      
      name: string;
      role: string;
      imgSrc: string;
    }
  
    let author: Author[];
    export default author;
  }