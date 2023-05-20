const Notes = ({ notes }) => {
  return notes.map((n) => (
    <article className="small" key={n.id}>
      {n.content}
    </article>
  ))
}

export default Notes
