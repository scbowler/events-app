import React from 'react';

function EventItem({ event }) {
  const { name, description, location } = event;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">{name}</div>
        <div className="col-6">{description}</div>
        <div className="col-3">{location}</div>
      </div>
    </li>
  );
}

export default class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: null
    };
  }

  componentDidMount() {
    fetch('/api/events')
      .then(res => res.json())
      .then(events => {
        this.setState({ events });
      });
  }

  render() {
    const { events } = this.state;

    if (!events) {
      return <p className="text-center">LOADING EVENTS....</p>;
    }

    return (
      <div className="container">
        <h1 className="text-center">Events</h1>

        <ul className="list-group list-group-flush">
          {
            events.length
              ? events.map(event => <EventItem key={event.eventId} event={event} />)
              : <li className="list-group-item">No current events available</li>
          }
        </ul>
      </div>
    );
  }
}
