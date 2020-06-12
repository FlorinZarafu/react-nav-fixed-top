import React from "react";
import "./styl.css";

class Navabar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY > 100;
      const nav = document.querySelector("#nav");
      scrollTop
        ? nav.classList.add("scrolled")
        : nav.classList.remove("scrolled");
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <div className="nav" id="nav">
        Navabar
      </div>
    );
  }
}
export default Navabar;
// class Navabar extends React.Component {
//   state = {
//     scrolled: false,
//   };
//   componentDidMount() {
//     window.addEventListener("scroll", () => {
//       const scrollTop = window.scrollY < 100;
//       console.log(scrollTop);
//       scrollTop !== true
//         ? this.setState({ scrolled: true })
//         : this.setState({ scrolled: false });
//     });
//   }
//   componentWillUnmount() {
//     window.removeEventListener("scroll");
//   }
//   render() {
//     return (
//       <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
//         Navabar
//       </div>
//     );
//   }
// }
// export default Navabar;
