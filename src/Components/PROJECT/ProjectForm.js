import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useEffect, useState } from 'react'

function ProjectForm ({handleSubmit, btnText, projectData}){

    const [categories, setCategories] =useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers:{
            'Content-type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) =>{
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange (e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory (e){
        setProject({...project, 
        ...project,
        category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
            <Input type="text"
             text="Nome do projeto" 
             name="name"
             placeholder="Insira o nome do projeto"
             handleOnChange={handleChange}
             value={project.name ? project.name: ''}
             />
            </div>
            <div>
            <Input type="number"
             text="Valor do projeto" 
             name="budget"
             placeholder="Insira o valor do projeto"
             handleOnChange={handleChange}
             value={project.budget ? project.budgt: ''}
             />
            </div>
            <div>
            <Select name="category_id"
             text="Selecione a categoria" 
             options={categories}
             handleOnChange={handleCategory}
             value={project.category ? project.category.id : ''}
             />
            </div>
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
    )
}

export default ProjectForm