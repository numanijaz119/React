export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const itemNumber = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((packedItems / itemNumber) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? "You got everything! Ready to go ✈️" : `👜 You have ${itemNumber} items on your list, and you already packed ${packedItems} (${percentage}%)`}</em>
    </footer>
  );
}
