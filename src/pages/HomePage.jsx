/* eslint-disable no-unused-vars */

import { useField } from '@/features/form'
import { useResource } from '@/features/resource'
import { NoteForm, Notes, NOTES_BASE_URL } from '@/features/notes'
import { PersonForm, Persons, PERSON_BASE_URL } from '@/features/persons'

const HomePage = () => {
  const [notes, noteService] = useResource(NOTES_BASE_URL)
  const [persons, personService] = useResource(PERSON_BASE_URL)

  return (
    <div>
      <NoteForm noteService={noteService} />
      <Notes notes={notes} />

      <PersonForm personService={personService} />
      <Persons persons={persons} />
    </div>
  )
}

export default HomePage
