// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList} = props
  const {id, imageUrl, name, location} = eventsList
  return (
    <div>
      <li>
        <button>
          <img src={imageUrl} alt="event" />
        </button>
        <p>{name}</p>
        <p>{location}</p>
      </li>
    </div>
  )
}
export default EventItem
