/*

//This module handles the image upload and click abilities for the file upload form element
//import { useState } from 'react'
import axios from 'axios'

//need to get this working

//Targets and selects the file inside file upload element
const imageSelectHandler = (e) => {
  const setState = ({
    selectedImage: e.target.files[0]
  })

}

//gets the image from imageSelectHandler, adds the image into the data
const imageUploadHandler = () => {
  const fd = new FormData()
  fd.append('image', this.state.selectedImage, this.state.selectedImage.name)
  axios.post('http://localhost:8000/games', fd, {
    onUploadProgress: progressEvent => {
      console.log('Upload Progress' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
    }
  }).then(res => {
    console.log(res)
  }).catch(err) {
    throw new error("Image handler failed!")
  }
}
const useState = ({
  selectedImage: null
})

*/


