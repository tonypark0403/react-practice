function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? 'unlike' : 'like';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text // children
  );
}

function Container() {
  const [count, setCount] = React.useState(0);
  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(
      'div',
      { style: { marginTop: 20 } },
      React.createElement('span', null, 'Current Count: '),
      React.createElement('span', null, count),
      React.createElement(
        'button',
        { onClick: () => setCount(count + 1) },
        'Increase'
      ),
      React.createElement(
        'button',
        { onClick: () => setCount(count - 1) },
        'Decrease'
      )
    )
  );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Container), domContainer);
