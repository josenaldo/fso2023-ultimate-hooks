const Persons = ({ persons }) => {
  return persons.map((n) => (
    <article className="small" key={n.id}>
      {n.name} {n.number}
    </article>
  ))
}

export default Persons
