import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher este formulário"
      />

      <main>
        <fieldset>
          <legend> Seus dados</legend>
          <Input name="name" label="Nome Completo"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="Whatsapp" label="Whatsapp"/> 
          <Textarea name="bio" label="Biografia"/>
        </fieldset>
        <fieldset>
          <legend> Sobre a aula</legend>
          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              {value: "Artes", label: "Artes"},
              {value: "Biologia", label: "Biologia"},
              {value: "Ciências", label: "Ciências"},
              {value: "Educação física", label: "Educação física"},
              {value: "Física", label: "Física"},
              {value: "Geografia", label: "Geografia"},
              {value: "História", label: "História"},
              {value: "Matemática", label: "Matemática"},
              {value: "Português", label: "Português"},
              {value: "Química", label: "Química"},
            ]}
          />
          
          <Input name="cost" label="Custo/hora da aula" />         
        </fieldset>
        <fieldset>
          <legend>Horários Disponíveis</legend>
        </fieldset>
        <footer>
        <p>
         <img src={warningIcon} alt="Aviso Importante"/>
         Importante <br/>
         Preencha todos os dados
        </p> 
        <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
