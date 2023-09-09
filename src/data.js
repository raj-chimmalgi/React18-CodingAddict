import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n" +
      "              vitae tempore voluptatum maxime reprehenderit eum quod\n" +
      "              exercitationem fugit, qui corporis.",
    location: "Tibet",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "august 6th, 2020",
    title: "Japan Adventure",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n" +
      "              vitae tempore voluptatum maxime reprehenderit eum quod\n" +
      "              exercitationem fugit, qui corporis.",
    location: "japan",
    duration: 6,
    cost: 1300,
  },
  {
    id: 3,
    image: tour3,
    date: "august 14th, 2028",
    title: "Nepal Adventure",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n" +
      "              vitae tempore voluptatum maxime reprehenderit eum quod\n" +
      "              exercitationem fugit, qui corporis.",
    location: "nepal",
    duration: 4,
    cost: 1323,
  },
  {
    id: 4,
    image: tour4,
    date: "august 11th, 2023",
    title: "Canada Adventure",
    info:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque\n" +
      "              vitae tempore voluptatum maxime reprehenderit eum quod\n" +
      "              exercitationem fugit, qui corporis.",
    location: "Canada",
    duration: 7,
    cost: 1900,
  },
];
