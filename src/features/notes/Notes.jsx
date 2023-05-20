import { Icon } from '@/features/ui'

const Notes = ({ notes, noteService }) => {
  return notes.map((note) => (
    <article className="list-item" key={note.id}>
      <span>{note.content}</span>
      <button
        className="inline small danger"
        onClick={() => noteService.remove(note.id)}
      >
        <Icon name="delete" />
      </button>
    </article>
  ))
}

export default Notes
