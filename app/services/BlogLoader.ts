import {blogStore} from "../reducers/blog";
/**
 * the blog post
 */
export interface Post {
  name: string;
  path: string;
  content?: string;
  download_url: string;
}

/**
 * the blog loader
 */
export class BlogLoader {

  /**
   * list of post to load
   */
  postsToLoad: Post[];

  /**
   *
   * @param username
   */
  constructor(private username = "tuoitrevohoc") {

  }

  /**
   * load the content
   */
  load() {
    let contentUrl = "https://api.github.com/repos/"
            + this.username
            + "/"
            + this.username + ".github.io/contents/blogs";

    // get content of the blog
    $.get(contentUrl, (data) => {
      this.postsToLoad = data as Post[];
      this.loadNextPost();
    });

  }

  /**
   * load the next posts
   */
  loadNextPost() {

    if (this.postsToLoad.length > 0) {
      let post = this.postsToLoad.pop();

      $.get(post.download_url, content => {
        post.content = content;
        blogStore.actions.postLoaded(post);
        this.loadNextPost();
      });
    }
  }
}