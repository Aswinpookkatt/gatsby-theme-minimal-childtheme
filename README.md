# gatsby-theme-minimal-childtheme

 This Repository contains  Gatsby theme jam child-theme 
 
## How to use this repo

**NOTE:** Make sure to replace `USERNAME` with your GitHub username and `THEMENAME` with your theme name.

1.  Fork this repo.

2.  Rename the forked repo `gatsby-theme-THEMENAME`. (Make sure to replace `THEMENAME` with your chosen name.)

3.  Get the theme set up locally.
    ```sh
    # clone the repo
    git clone git@github.com:USERNAME/gatsby-theme-THEMENAME.git

    # move into the directory
    cd gatsby-theme-THEMENAME

    # install dependencies
    yarn
    ```

4.  Update `package.json` with your info.
    ```diff
      {
    +   "name": "gatsby-theme-THEMENAME",
    +   "author": "Your Name <name@example.com>",
        "repository": {
          "type": "git",
    +     "url": "https://github.com/USERNAME/gatsby-theme-THEMENAME.git"
        },
    ```

5.  Start the demo site.
    ```sh
    yarn workspace demo develop
    ```

    The demo will start at http://localhost:8000

    **NOTE:** If you’re new to Yarn workspaces, check out [this post](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/) for details.
