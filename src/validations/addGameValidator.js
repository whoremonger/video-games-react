import { assert, object, string, nonempty, StructError } from "superstruct"

//this is client side validation for react to help filter data sent to server
export const addGameSchema = object({
  title: nonempty(string()),
})
/*
imageName:
genres:
console:
year:
description:
dataPassed:

*/