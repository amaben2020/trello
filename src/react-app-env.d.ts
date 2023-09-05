/// <reference types="react-scripts" />

// This declaration tells Typescript that when we import stuff from modules that have names ending with .png - we will get the default export of type string.
declare module "*.png" {
  const src: string;
  export default src;
}

// import image from "./foo.png"
// image has type `string` here
