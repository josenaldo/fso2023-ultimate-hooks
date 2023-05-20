import { NOTES_BASE_URL, NoteForm, Notes } from '@/features/notes'
import { useResource } from '@/features/resource'

const NotesPage = () => {
  const [notes, noteService] = useResource(NOTES_BASE_URL)

  return (
    <div>
      <h2>Notes</h2>
      <NoteForm noteService={noteService} />
      <Notes notes={notes} noteService={noteService} />
    </div>
  )
}

export default NotesPage
