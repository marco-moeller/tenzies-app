const Die = (props) => {
  const render = () => {
    switch (props.number) {
      case 1:
        return (
          <div className="dice one">
            <span className="dot"></span>
          </div>
        );
      case 2:
        return (
          <div className="dice two">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        );
      case 3:
        return (
          <div className="dice two three">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        );
      case 4:
        return (
          <div>
            <div className="dice four">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dice four">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div className="dice four five">
              <span className="dot"></span>
              <span className="dot"></span>

              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <div className="dice four"></div>
          </div>
        );
      case 6:
        return (
          <div className="row">
            <div className="dice six">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="dice six">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
      default:
        return;
    }
  };

  return render();
};

export default Die;
