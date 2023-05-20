/* eslint-disable no-unused-vars */

import { useResource } from '@/features/resource'
import { Notes, NOTES_BASE_URL } from '@/features/notes'
import { Persons, PERSON_BASE_URL } from '@/features/persons'

const HomePage = () => {
  const [notes, noteService] = useResource(NOTES_BASE_URL)
  const [persons, personService] = useResource(PERSON_BASE_URL)

  return (
    <div>
      <h2>Notes</h2>
      <Notes notes={notes} noteService={noteService} />

      <h2>Persons</h2>
      <Persons persons={persons} personService={personService} />
    </div>
  )
}

export default HomePage
