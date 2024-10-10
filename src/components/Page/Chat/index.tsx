import { Component } from "react";
import Header from "./Header";
import ChatContent from "./ChatContent";

export class Chat extends Component {
  render() {
    return (
      <div className="bg-gray-800 flex-1 flex flex-col">
        <Header />
        <ChatContent />
      </div>
    );
  }
}

export default Chat;
