import gallery from "../assets/human_gallery.png";
import Company from "../assets/whitelist.png";

const Project = [
  // {
  //   _id: 1,
  //   img: blog,
  //   title: "Dynamic Blog",
  //   description:
  //     "Implemented CRUD operation, Authentication, Search Engine Optimization and Server Side rendering.",
  //   technology: ["Nextjs", "React Admin", "Express", "MongoDb"],
  //   live: "",
  //   gitLink: "",
  // },
  {
    _id: 3,
    img: Company,
    title: "Business Website",
    description: "Animated website for enhanced user experience.",
    technology: ["Nextjs", "React", "React Router"],
    live: "http://melodious-custard-311195.netlify.app",
  },
  {
    _id: 4,
    img: gallery,
    title: "Online Gallery web application",
    description:
      "Online Display of Human visuals with CRUD operation for Adminstrator, Basic authentication for admin. I implement dynamic routing in express and Client side rendering in react",
    technology: ["Nextjs", "MongodB", "Nodejs", "Express", "Cloudinary"],
    live: "https://anatomy-gallery.vercel.app",
  },
  {
    _id: 5,
    img: gallery,
    title: "Backend for a real estate Startup",
    description:
      "Backend for a real estate business with  user authentication, user password reset,  user email confirmation and form input validation",
    technology: [
      "Nextjs",
      "React",
      "Nodejs",
      "Graphql",
      "MongodB",
      "Typegoose",
      "Typescript",
    ],
    live: "https://github.com/victor-914",
  },
];

export default Project;
