const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export type Story = {
  id: number;
  title: string;
  by: string;
  score: number;
  time: number;
  url: string;
  text: string;
}

export enum StoryType {
    TOP = "topstories.json",
    NEW = "newstories.json",
    BEST = "beststories.json",
    ASK = "askstories.json",
    SHOW = "showstories.json",
    JOB = "jobstories.json"
}

export const getStories = async (type: StoryType) => {
    const res = await fetch(`${BASE_URL}${type.toString()}`);
    const ids = await res.json();

    return Promise.all(
        ids.slice(0, 30).map(async (id: number) => {
            let storyRes = await fetch(`${BASE_URL}item/${id}.json`);
            let story: Story = await storyRes.json();
            return story;
        })
    )
}
