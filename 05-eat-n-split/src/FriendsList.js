import Friend from "./Friend";

export default function FriendsList({ firends, onSelect, selectedFriend }) {
  return (
    <ul>
      {firends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
