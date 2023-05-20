import { useField } from '@/features/form'

const PersonForm = ({ personService }) => {
  const name = useField('text', 'name', 'Name')
  const number = useField('text', 'number', 'Number')

  const handlePersonSubmit = (event) => {
    event.preventDefault()

    personService.create({ name: name.value, number: number.value })
    name.reset()
    number.reset()
  }

  return (
    <article>
      <h2>Persons</h2>
      <form onSubmit={handlePersonSubmit}>
        <label {...name.label} />
        <input {...name.input} />

        <label {...number.label} />
        <input {...number.input} />

        <button type="submit">Create</button>
      </form>
    </article>
  )
}

export default PersonForm
