import { Dispatch } from 'redux';

export function fetchPosts() {
  const key = 'LCQTJ3sO5PH4lYcdvY06o7KW5iIoWRfO';

  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=100`
    );
    const data = await response.json();
    console.log(data.data);
    const result = await data.data.map((post: any) => {
      return {
        height: post.images.original.height,
        type: post.type,
        id: post.id,
        url: post.images.original.url,
        username: post.username,
        title: post.title,
      };
    });

    dispatch({ type: 'FETCH_POSTS', posts: result });
  };
}
