const friends = [
  { name: 'James', age: 15 },
  { name: 'Suji', age: 20 },
  { name: 'I-U', age: 25 },
  { name: 'Jina', age: 30 },
];

const timelines = [
  { desc: 'Study react', likes: 0 },
  { desc: 'Study angular', likes: 10 },
  { desc: 'Study web technology', likes: 20 },
  { desc: 'Study english', likes: 30 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
