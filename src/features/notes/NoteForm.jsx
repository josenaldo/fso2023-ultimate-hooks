import { useField } from '@/features/form'

const NoteForm = ({ noteService }) => {
  const content = useField('text', 'content', 'Content')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
    content.reset()
  }

  return (
    <article>
      <h2>Notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <label {...content.label} />
        <input {...content.input} />
        <button>Create</button>
      </form>
    </article>
  )
}

export default NoteForm
