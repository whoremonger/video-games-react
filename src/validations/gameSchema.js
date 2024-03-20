//All the centralized validations for each item in the game object. Yup is the library used to handle it

import * as yup from 'yup'

export const gameSchema = yup.object().shape({
  title: yup.string().required("Must have a game title!!").max(50, "Game title too long!!"),
  image: yup.mixed().test("image", "Must upload a game image!!", (value) => {
    if (value.length > 0) {
      return true
    }
    return false
  }),
  genre: yup.array().typeError("Must check at least 1 game genre!!").min(1, "Must check at least 1 game genre!!"),
  console: yup.string().required("Need to select a game console!!"),
  year: yup.number().min(1900, "Enter a appropriate year - YYYY").max(9999, "Enter a appropriate year..too high - YYYY").typeError("Please enter the game's year it was released!"),
  description: yup.string().required("Please enter a short description of the game!").min(100, "Game Description too short!! Enter about 50 characters.").max(500, "Game description too long!!").typeError("Please enter a short description of the game!"),
  datePassed: yup.string().required("Please enter date you passed the game!!").matches(/\b(0[1-9]|1[0-2])[-/](0[1-9]|[12]\d|3[01])[-/](19\d\d|20\d\d)\b/, "Invalid date format enter date as - MM/DD/YYYY") //feb over 28 days error, need a 0 in front of month
})

