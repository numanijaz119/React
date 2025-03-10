import { useState } from "react";
import Button from "./Button";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [ShowAddFrom, setShowAddForm] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddForm() {
    setShowAddForm((show) => !show);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setAddFriend((friends) => [...friends, friend]);
    setShowAddForm(false);
  }

  function handleFriendSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddForm(false);
  }

  function handleSplitBill(value) {
    setAddFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          firends={addFriend}
          onSelect={handleFriendSelection}
          selectedFriend={selectedFriend}
        />
        {ShowAddFrom && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddForm}>
          {ShowAddFrom ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
