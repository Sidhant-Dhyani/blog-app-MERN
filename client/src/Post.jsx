import {formatISO9075} from "date-fns"; 


export default function Post({title, content, cover, summary, createdAt, author}) {
  console.log('author:', author);
  console.log('author.username:', author.username);
  return (
    <div className="post" >
      <div className="image">
        <img
          src="https://bikeindia.in/wp-content/uploads/2023/04/Norden-013.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          {title}
        </h2>
        <p className="info">
          <a className="author"> {author.username} </a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">
          {summary}
        </p>
      </div>
    </div>
  );
}
