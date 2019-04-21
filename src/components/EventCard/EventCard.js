import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { format } from "date-fns"

import "./EventCard.css"

function EventCard({ event }) {
  console.log("event", event)
  let postDate
  if (event.event_start_date == "" || event.event_start_date == "") {
    postDate = format(new Date(event.date), "HH:mm A")
  } else {
    postDate = format(new Date(event.event_start_date), "HH:mm A")
  }
  return (
    <article className="EventCard">
      <Link to={`/${event.slug}`}>
        <figure
          style={{ backgroundImage: `url(${event.featured_image_src})` }}
        />
        <div className="content">
          <aside>
            <h4>Oct</h4>
            <h3>17</h3>
          </aside>
          <div>
            <h3>{event.title}</h3>
            <p>
              {event.event_address_city ? event.event_address_city : ""}
              {event.event_address_city && event.event_address_state
                ? ", "
                : ""}
              {event.event_address_state ? event.event_address_state : ""}
              {event.event_address_city !== "" ||
              event.event_address_state !== "" ? (
                <br />
              ) : (
                ""
              )}
              {postDate}
            </p>
          </div>
        </div>
      </Link>
    </article>
  )
}

EventCard.propTypes = {}

export default EventCard
