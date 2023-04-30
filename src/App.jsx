import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelListContainer, ChannelContainer } from "./components";

import './App.css';

const apikey = "s3yvc58kgrmm";

const client = StreamChat.getInstance(apikey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} teme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
