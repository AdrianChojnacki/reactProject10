class Clock extends React.Component {
  state = {
    time: {
      hours: 12,
      minutes: 34,
      seconds: 59,
    },
  };

  render() {
    const { hours, minutes, seconds } = this.state.time;

    return (
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector(`#root`));
