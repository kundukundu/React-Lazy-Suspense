import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    blogposts: [
      {
        id: "replace-an-item-in-an-array-without-mutation-in-javascript",
        title:
          "Replace an item in an array, by number, without mutation in JavaScript (ES6)"
      },
      {
        id: "quick-dog-piling-url-stresstest",
        title: "Quick dog-piling (aka stampeding herd) URL stresstest"
      },
      {
        id: "htmlminifier-in-use-on-this-blog-now",
        title: "HTMLMinifier in use on this blog now"
      },
      {
        id: "to-defer-or-to-async-javascript",
        title: "To defer or to async JavaScript tags. That's the question."
      },
      {
        id: "json_response_cache_page_decorator",
        title:
          "A good Django view function cache decorator for http.JsonResponse"
      },
      { id: "ripgrep", title: "The best grep tool in the world; ripgrep" },
      {
        id: "how-to-unset-aliases-set-by-oh-my-zsh",
        title: "How to unset aliases set by Oh My Zsh"
      },
      {
        id: "how-to-not-start-two-servers-on-the-same-port",
        title: "How to NOT start two servers on the same port"
      }
    ]
  };
  render() {
    return (
      <ul>
        {this.state.blogposts.map(post => {
          return (
            <li key={post.id}>
              <Link to={`/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Home;
