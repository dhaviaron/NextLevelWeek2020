import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import api from '../../services/api'
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0, from: '', to: ''
      }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updatedScheduleItems)
  
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(()=> {
      alert('Cadastro realizado com sucesso')
    //  history.pushState('/')
    }).catch(()=>{
      alert("erro no cadastro")
    })
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aulas." 
      description="O primeiro passo é preencher este formulário"
      />

      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend> Seus dados</legend>
          <Input 
          name="name" 
          label="Nome Completo"
          value={name} 
          onChange={(e) => {setName(e.target.value)}}
          />
          <Input 
          name="avatar" 
          label="Avatar"
          value={avatar} 
          onChange={(e) => {setAvatar(e.target.value)}}
          />
          <Input 
          name="Whatsapp" 
          label="Whatsapp"
          value={whatsapp} 
          onChange={(e) => {setWhatsapp(e.target.value)}}
          /> 
          <Textarea 
          name="bio" 
          label="Biografia"
          value={bio} 
          onChange={(e) => {setBio(e.target.value)}}
          />
        </fieldset>
        <fieldset>
          <legend> Sobre a aula</legend>
          <Select 
            name="subject" 
            label="Matéria" 
            value={subject} 
            onChange={(e) => {setSubject(e.target.value)}}
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
          
          <Input 
            name="cost" 
            label="Custo/hora da aula" 
            value={cost} 
            onChange={(e) => {setCost(e.target.value)}}
          />         
        </fieldset>
        <fieldset>
          <legend>Horários Disponíveis
            <button type="button" onClick={addNewScheduleItem}>
            + Novo horário
            </button>
          </legend>
          {scheduleItems.map((scheduleItem, index) =>{
            return( 
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select 
                name="week_day" 
                label="Dias de semana" 
                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                value={scheduleItem.week_day}
                options={[
                  {value: "0", label: "Domingo"},
                  {value: "1", label: "Segunda"},
                  {value: "2", label: "Terça"},
                  {value: "3", label: "Quarta"},
                  {value: "4", label: "Quinta"},
                  {value: "5", label: "Sexta"},
                  {value: "6", label: "Sábado"},
                ]}
              />
              <Input 
              name="from" 
              label="Das" 
              type="time"
              onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
              value={scheduleItem.from}
              />
              <Input 
              name="to"
              label="Até"
              type="time"
              onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
              value={scheduleItem.to}
              />
            </div>
            );
          })}
        </fieldset>
        <footer>
        <p>
         <img src={warningIcon} alt="Aviso Importante"/>
         Importante <br/>
         Preencha todos os dados
        </p> 
        <button type="submit">Salvar Cadastro</button>
        </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
