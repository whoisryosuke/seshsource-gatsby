import React from "react"
import PropTypes from "prop-types"

import EventCard from "../EventCard/EventCard"
import "./EventCardLoop.css"

const EventCardLoop = ({ events, columns }) => {
  const cards = events.map(({ node }) => (
    <div style={{ width: `${100 / columns}%` }}>
      <EventCard key={node.title} event={node} />
    </div>
  ))
  return <div className="EventCardLoop">{cards}</div>
}

EventCardLoop.propTypes = {
  columns: PropTypes.number,
  events: PropTypes.object.isRequired,
}

EventCardLoop.defaultProps = {
  columns: 3,
}

export default EventCardLoop
