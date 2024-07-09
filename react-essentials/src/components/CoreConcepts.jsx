import componentImg from '../assets/components.png';

export default function CoreConcepts({ concept }) {
    return (
      <li>
        <img src={concept.image} alt={concept.title + " image"} />
        <h3>{concept.title}</h3>
        <p>{concept.description}</p>
      </li>
    )
  }