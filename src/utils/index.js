export async function getStaticProps(context) {
  
  
  const [card, setCard] = useState()
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    
    async function data() {
      let teachers =  await firebase.database().ref('Teachers')
      let key = (await teachers.push()).key

        setCard(teachers.child(key).set({
          description: "Patient and thoughtful TEFL tutor",
          title: "Master English",
          star: 5,
          lessons: 10
        }))
        alert('teacher was registered')
    }
    // Função para criar novos professores
    //data()
    
    async function list() {
      await firebase.database().ref('Teachers').on('value', (snapshot) => {
        setTeachers([])
        snapshot.forEach((childItem) => {
          let newTeacher = {
            key: childItem.key,
            title: childItem.val().title,
            description: childItem.val().description,
            star: childItem.val().star,
            lessons: childItem.val().lessons
          }
          setTeachers(oldArray => [...oldArray, newTeacher ])
        })
      })
    }
    list()
  }, [])

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}