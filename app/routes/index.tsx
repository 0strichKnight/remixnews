import { LoaderFunction, useLoaderData } from "remix";
import { getStories, Story, StoryType } from "~/api.server";

export const loader : LoaderFunction = async () => {
  return getStories(StoryType.TOP);
}

export default function Index() {
  const stories = useLoaderData<Story[]>();
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
