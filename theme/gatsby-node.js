exports.createPages = ({ actions, reporter }) => {
  reporter.warn("make sure to load data from somewhere!")

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/page.js"),
    context: {
      heading: "Minimalistic child theme",
      content: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat
             nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt
               mollit anim id est laborum.
        </p>
        <p>
        Magnis dis parturient montes nascetur ridiculus mus mauris
         vitae ultricies. Bibendum neque egestas congue quisque.
          Libero volutpat sed cras ornare arcu dui vivamus arcu
          felis. Enim lobortis scelerisque fermentum dui faucibus
           in. Eget gravida cum sociis natoque penatibus et.
           Donec ac odio tempor orci dapibus ultrices in iaculis.
            Suspendisse potenti nullam ac tortor vitae purus
             faucibus ornare suspendisse. Felis donec et odio
              pellentesque diam volutpat. Sodales ut etiam sit
               amet nisl. Nunc sed id semper risus in hendrerit
                gravida rutrum.</p>
        <p>
          For more information, see
          <a href="https://themejam.gatsbyjs.org">themejam.gatsbyjs.org</a>.
        </p>
      `,
    },
  })
}
