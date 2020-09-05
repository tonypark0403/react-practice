function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? 'unlike' : 'like';
  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text // children
  );
}

const domContainer = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer);
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer
);

/*
    <div>
        <p>hello</p>
        <p>world</p>
    </div>

    React => 

    React.createElement(
        'div',
        null,
        React.createElement('p', null, 'hello'),
        React.createElement('p', null, 'world')
    );
*/
