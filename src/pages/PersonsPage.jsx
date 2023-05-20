import { PERSON_BASE_URL, PersonForm, Persons } from '@/features/persons'
import { useResource } from '@/features/resource'

const PersonsPage = () => {
  const [persons, personService] = useResource(PERSON_BASE_URL)

  return (
    <div>
      <h2>Persons</h2>
      <PersonForm personService={personService} />
      <Persons persons={persons} personService={personService} />
    </div>
  )
}

export default PersonsPage
