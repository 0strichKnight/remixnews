import { Link, useLoaderData } from "remix";

export const loader = async () => {
  let res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
  let ids = await res.json();

  return Promise.all(
    ids.slice(0, 10).map(async id => {
        let storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        let story = await storyRes.json();
        return story;
      })
  );
}

export default function Index() {
  const stories = useLoaderData();
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
