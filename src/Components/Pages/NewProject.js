import {useNavigate} from 'react-router-dom'


import ProjectForm from '../PROJECT/ProjectForm';
import styles from './NewProject.module.css'

function NewProject () {

  const navigate = useNavigate()


    function creatPost(project) {

      // initialize cost and services
      project.cost = 0
      project.service = []

      fetch('http://localhost:5000/projects',{
        method: 'POST',
        headers:{
          'Content-type': 'application/json',
        },
        body: JSON.stringify(project)
      })
        .then((resp) => resp.json())
        .then((data)=>{
          console.log(data)
          //redirect
          navigate('/projects', {state: {message: 'Projeto criado com sucesso!'}});
        })

    }


    return (
      <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p> Crie o seu projeto para depois adicionar os serviços </p>
        <ProjectForm handleSubmit={creatPost} btnText="Criar projeto" />
      </div>
    )
  }
  
  export default NewProject;
  