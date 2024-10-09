import { Component } from "react";
import Header from "./Header";

export class Chat extends Component {
  render() {
    return (
      <div className="bg-gray-800 flex-1">
        <Header />
      </div>
    );
  }
}

export default Chat;
