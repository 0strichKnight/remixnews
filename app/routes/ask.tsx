import { LoaderFunction, useLoaderData } from "remix"
import { getStories, Story, StoryType } from '~/api.server';

export const loader: LoaderFunction = async () => {
    return getStories(StoryType.ASK);
}

export default function Ask() {
  const stories = useLoaderData<Story[]>();
    return (
        <ul>
        {stories.map( (story, i) => (
            <li key={story.id}>
            {i + 1} - 
            <a href={story.url} target="_blank" rel="noopener noreferrer">
                {story.title}
            </a>
            </li>
        ))}
        </ul>
    )
}