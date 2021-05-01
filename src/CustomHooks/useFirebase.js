import { useState, useEffect } from 'react'

export default function useFirebase() {
  
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [star, setStar] = useState()
  const [lesson, setLesson] = useState()
    
    useEffect(() => {
    async function data() {
     let teachers =  await firebase.database().ref('Teachers')
     let key = (await teachers.push()).key

      teachers.child(key).set({
        description: description,
        title: title,
        star: star,
        lessons: lessons
      })
      alert('teacher was registered')
      setTitle('')
      setDescription('')
      setStar('')
      setLesson('')
    }
     data()

  }, [])
}