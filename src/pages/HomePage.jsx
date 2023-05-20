/* eslint-disable no-unused-vars */

import { useField } from '@/features/form'
import { useResource } from '@/features/resource'
import { NoteForm, Notes, NOTES_BASE_URL } from '@/features/notes'

const HomePage = () => {
  const name = useField('text', 'name', 'Name')
  const number = useField('text', 'number', 'Number')

  const [notes, noteService] = useResource(NOTES_BASE_URL)
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value })
  }
  return (
    <div>
      <NoteForm noteService={noteService} />
      <Notes notes={notes} />

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name.input} /> <br />
        number <input {...number.input} />
        <button>create</button>
      </form>
      {persons.map((n) => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </div>
  )
}

export default HomePage
