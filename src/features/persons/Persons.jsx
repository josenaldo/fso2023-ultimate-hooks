import { Icon } from '@/features/ui'

const Persons = ({ persons, personService }) => {
  return persons.map((person) => (
    <article className="list-item" key={person.id}>
      <span>
        {person.name} {person.number}
      </span>
      <button
        className="inline small danger"
        onClick={() => personService.remove(person.id)}
      >
        <Icon name="delete" />
      </button>
    </article>
  ))
}

export default Persons
