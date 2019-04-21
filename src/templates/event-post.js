import React, { Component } from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"
import Img from "gatsby-image"
import { format } from "date-fns"

import "./event-post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

function longDateFormat(date) {
  return format(new Date(date), "ddd. MMMM D, YYYY, HH:mm A")
}

export default class EventPost extends Component {
  render() {
    const { event } = this.props.data
    let related
    this.props.data.relatedPosts
      ? (related = this.props.data.relatedPosts.edges)
      : (related = null)
    const currentDate = new Date()

    // const tags = event.tags.map(tag => (
    //   <li key={tag}>
    //     <Link to={"/tags/" + kebabCase(tag)}>#{tag}</Link>
    //   </li>
    // ))

    // let postImage = event.frontmatter.cover_image.publicURL
    let postDate
    if (event.event_start_date == "" && event.event_start_date == "") {
      postDate = longDateFormat(event.date)
    } else {
      // Check if start date = end date, only return one
      if (event.event_start_date == event.event_start_date) {
        postDate = longDateFormat(event.event_start_date)
      } else {
        postDate = `${longDateFormat(
          event.event_start_date
        )} - ${longDateFormat(event.event_end_date)}`
      }
    }

    function prepareContent() {
      return { __html: event.content }
    }

    return (
      <Layout>
        <SEO
          title={event.title}
          keywords={[`cannabis event`, `420 event`, `seshsource`]}
        />
        <div className="EventWrapper">
          <div
            className="EventWrapper__bg"
            style={{ backgroundImage: `url(${event.featured_image_src})` }}
          />
          <div className="EventPost">
            <header>
              <figure
                style={{ backgroundImage: `url(${event.featured_image_src})` }}
              />
              <aside>
                <div>
                  <h1>{event.title}</h1>
                  <p>
                    Location: <br />
                    <strong>
                      {event.event_address_location && (
                        <span>
                          {event.event_address_location}
                          <br />
                        </span>
                      )}
                      {event.event_address_city && event.event_address_city}
                      {event.event_address_city && event.event_address_state
                        ? ", "
                        : ""}
                      {event.event_address_state && event.event_address_state}
                      <br />
                      View Map
                    </strong>
                  </p>
                  <p>
                    Date &amp; Time: <br />
                    <strong>
                      {postDate}
                      <br />
                      Add to Calendar
                    </strong>
                  </p>
                </div>
              </aside>
            </header>
            <article>
              <div className="content">
                <div dangerouslySetInnerHTML={prepareContent()} />
                <aside>
                  <a href={event.link} className="TicketBtn">
                    Register
                  </a>
                  <strong>Refund Policy</strong>
                  <p>No refund policy</p>
                </aside>
              </div>
            </article>
          </div>
          <div>
            <h2>More events from this organizer</h2>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query EventPostQuery($slug: String!, $tag: Int!) {
    event: wordpressWpEvent(slug: { eq: $slug }) {
      id
      title
      slug
      date
      content
      event_cat
      event_start_date
      event_end_date
      event_cat
      event_loc
      event_address_city
      event_address_state
      event_address_location
      event_address_latitude
      event_address_longitude
      featured_image_src
      genre
      link
    }
    relatedPosts: allWordpressWpEvent(
      limit: 2
      sort: { fields: [date], order: DESC }
      filter: { slug: { ne: $slug }, event_cat: { in: [$tag] } }
    ) {
      edges {
        node {
          date
          id
          slug
          title
          content
          event_cat
          event_start_date
          event_end_date
        }
      }
    }
  }
`
