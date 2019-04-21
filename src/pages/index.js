import React from "react"
import { Link } from "gatsby"

import "../assets/css/pages/index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import EventCardLoop from "../components/EventCardLoop/EventCardLoop"

const IndexPage = ({ data }) => {
  const categoryBlocks = data.categories.edges.slice(0, 3).map(({ node }) => {
    return (
      <div>
        <Link to={`/category/${node.slug}`}>{node.name}</Link>
      </div>
    )
  })

  console.log("events", data.events.edges)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <section className="FrontpageSearch">
        <h1>Find Cannabis Events</h1>
        <p>Discover awesome cannabis-related events around you!</p>
        <form
          action="http://seshsource.com/all-events/"
          method="get"
          accept-charset="UTF-8"
          className="FrontpageSearch__search"
        >
          <div>
            <i class="explore-fun-block-icon fa fa-calendar" />

            <select id="listingFormTime" name="time">
              <option value="">When</option>
              <option value="1">Today</option>
              <option value="2">This Week</option>
              <option value="3">This Month</option>
            </select>
          </div>

          <div>
            <i class="explore-fun-block-icon fa fa-tags" />

            <select name="category">
              <option value="">What</option>

              <option value="business">Business</option>
              <option value="conference"> - Conference</option>
              <option value="convention"> - Convention</option>
              <option value="fire-safety-drills">
                {" "}
                - Fire &amp; Safety Drills
              </option>
              <option value="investor-summit"> - Investor Summit</option>
              <option value="lecture"> - Lecture</option>
              <option value="licensing-course"> - Licensing Course</option>
              <option value="charity-drive">Charity drive</option>
              <option value="classes">Classes</option>
              <option value="cooking-class"> - Cooking Class</option>
              <option value="painting-class"> - Painting Class</option>
              <option value="yoga-class"> - Yoga Class</option>
              <option value="dispensary-event">Dispensary Event</option>
              <option value="rally">Rally</option>
              <option value="social-events">Social Events</option>
              <option value="cannabis-spa"> - Cannabis Spa</option>
              <option value="club-event"> - Club Event</option>
              <option value="concerts"> - Concerts</option>
              <option value="farmers-market"> - Farmer's Market</option>
              <option value="festival"> - Festival</option>
              <option value="mixer"> - Mixer</option>
              <option value="retreat-getaways">
                {" "}
                - Retreat &amp; Getaways
              </option>
              <option value="sesh"> - Sesh</option>
              <option value="social-club-event"> - Social Club Event</option>
              <option value="social-lounge-event">
                {" "}
                - Social Lounge Event
              </option>
              <option value="walk-or-run"> - Walk or Run</option>
            </select>
          </div>

          <div>
            <i class="explore-fun-block-icon fa fa-map-marker" />

            <select name="location">
              <option value="">Where</option>

              <option value="adelanto">Adelanto</option>
              <option value="antelope-valley">Antelope Valley</option>
              <option value="arcata">Arcata</option>
              <option value="arizona">Arizona</option>
              <option value="barcelona">Barcelona</option>
              <option value="bermuda-dunes">Bermuda Dunes</option>
              <option value="boston">Boston</option>
              <option value="british-columbia">British Columbia</option>
              <option value="brooklyn">Brooklyn</option>
              <option value="california">California</option>
              <option value="corona"> - Corona</option>
              <option value="high-desert"> - High Desert</option>
              <option value="hollywood"> - Hollywood</option>
              <option value="humboldt"> - Humboldt</option>
              <option value="long-beach"> - Long Beach</option>
              <option value="los-angeles"> - Los Angeles</option>
              <option value="orange-county"> - Orange County</option>
              <option value="palm-springs"> - Palm Springs</option>
              <option value="riverside"> - Riverside</option>
              <option value="san-diego"> - San Diego</option>
              <option value="san-fernando-valley">
                {" "}
                - San Fernando Valley
              </option>
              <option value="san-francisco"> - San Francisco</option>
              <option value="santa-cruz"> - Santa Cruz</option>
              <option value="santa-monica"> - Santa Monica</option>
              <option value="venice-beach"> - Venice Beach</option>
              <option value="callville-bay">Callville bay</option>
              <option value="cambria">Cambria</option>
              <option value="canada">Canada</option>
              <option value="canoga-park">Canoga Park</option>
              <option value="chowchilla">chowchilla</option>
              <option value="chula-vista">Chula Vista</option>
              <option value="clio">Clio</option>
              <option value="coachella">Coachella</option>
              <option value="colorado">Colorado</option>
              <option value="colorado-springs">Colorado springs</option>
              <option value="colton">Colton</option>
              <option value="costa-mesa">Costa mesa</option>
              <option value="culver-city">Culver city</option>
              <option value="daly-city">Daly City</option>
              <option value="denver">Denver</option>
              <option value="desert-hot-springs">Desert hot springs</option>
              <option value="downey">Downey</option>
              <option value="el-monte">El monte</option>
              <option value="eugene">Eugene</option>
              <option value="flint">Flint</option>
              <option value="florida">Florida</option>
              <option value="fontana">Fontana</option>
              <option value="fullerton">Fullerton</option>
              <option value="garberville">Garberville</option>
              <option value="garden-grove">Garden Grove</option>
              <option value="gardena">Gardena</option>
              <option value="hayward">Hayward</option>
              <option value="hemet">Hemet</option>
              <option value="hollywood-2">Hollywood</option>
              <option value="huntington-beach">Huntington beach</option>
              <option value="inland-empire">Inland Empire</option>
              <option value="irvine">Irvine</option>
              <option value="joshua-tree">Joshua tree</option>
              <option value="la-puente">La Puente</option>
              <option value="lake-village">Lake Village</option>
              <option value="lancaster">Lancaster</option>
              <option value="las-vegas">Las Vegas</option>
              <option value="laytonville">Laytonville</option>
              <option value="loveland">Loveland</option>
              <option value="malibu">Malibu</option>
              <option value="massachusetts">Massachusetts</option>
              <option value="mendocino">Mendocino</option>
              <option value="merced">Merced</option>
              <option value="miami">Miami</option>
              <option value="michigan">Michigan</option>
              <option value="modesto">Modesto</option>
              <option value="montana">Montana</option>
              <option value="montclair">Montclair</option>
              <option value="monterey">Monterey</option>
              <option value="moreno-valley">Moreno valley</option>
              <option value="nevada">Nevada</option>
              <option value="new-port">New port</option>
              <option value="new-york">New York</option>
              <option value="new-york-city">New York city</option>
              <option value="oakland">Oakland</option>
              <option value="oc">OC</option>
              <option value="ocean-beach">Ocean beach</option>
              <option value="ojai">Ojai</option>
              <option value="ontario">Ontario</option>
              <option value="oregon">Oregon</option>
              <option value="oro-grande">Oro Grande</option>
              <option value="paso-robles">Paso Robles</option>
              <option value="pennsylvania">Pennsylvania</option>
              <option value="perris">Perris</option>
              <option value="pomona">Pomona</option>
              <option value="pro-grande">Pro Grande</option>
              <option value="puerto-rico">Puerto Rico</option>
              <option value="redwood-valley">Redwood valley</option>
              <option value="reno">Reno</option>
              <option value="reseda">Reseda</option>
              <option value="rincon">Rincon</option>
              <option value="riverside-2">Riverside</option>
              <option value="sacramento">Sacramento</option>
              <option value="saint-petersburg">Saint Petersburg</option>
              <option value="san-bernardino">San Bernardino</option>
              <option value="san-fernando-valley-2">San Fernando Valley</option>
              <option value="san-jose">San Jose</option>
              <option value="san-luis-obispo">San Luis Obispo</option>
              <option value="santa-ana">Santa Ana</option>
              <option value="santa-barbara">Santa Barbara</option>
              <option value="santa-fe-springs">Santa Fe Springs</option>
              <option value="santa-maria">Santa Maria</option>
              <option value="santa-paula">Santa Paula</option>
              <option value="santa-rosa">Santa Rosa</option>
              <option value="scranton">Scranton</option>
              <option value="seattle">Seattle</option>
              <option value="sherman-oaks">Sherman oaks</option>
              <option value="spain">Spain</option>
              <option value="stockton">Stockton</option>
              <option value="tarzana">Tarzana</option>
              <option value="tempe">Tempe</option>
              <option value="topanga">Topanga</option>
              <option value="toronto">Toronto</option>
              <option value="torrance">Torrance</option>
              <option value="tracy">Tracy</option>
              <option value="tulare">Tulare</option>
              <option value="upland">Upland</option>
              <option value="vancouver-island">Vancouver island</option>
              <option value="victoria">Victoria</option>
              <option value="victorville">Victorville</option>
              <option value="vista">Vista</option>
              <option value="washington">Washington</option>
              <option value="washington-dc">Washington DC</option>
              <option value="watsonville">Watsonville</option>
              <option value="westminster">Westminster</option>
              <option value="willits">Willits</option>
              <option value="wilmington">Wilmington</option>
              <option value="winchester">Winchester</option>
              <option value="woodland">Woodland</option>
              <option value="worcester">Worcester</option>
              <option value="wynwood">Wynwood</option>
            </select>
          </div>

          <div>
            <i class="explore-fun-block-icon fa fa-binoculars" />

            <button class="td-buttom" type="submit">
              <i class="fa fa-search" />
              Show me the weed!
            </button>
          </div>
        </form>
      </section>
      <section>
        <h2>Latest Events</h2>
        <EventCardLoop events={data.events.edges} />
      </section>
      <section>
        <h2>Top Categories</h2>
        <div className="CategoryBlocks">{categoryBlocks}</div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    categories: allWordpressWpEventCat {
      edges {
        node {
          name
          slug
        }
      }
    }
    events: allWordpressWpEvent(
      filter: { status: { eq: "publish" } }
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
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
          status
          link
          genre
        }
      }
    }
  }
`
