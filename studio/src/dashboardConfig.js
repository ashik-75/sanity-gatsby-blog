export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6167ab0b4ff3de5636eaafbe",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-pro7o2u4",
                  apiId: "1f79d4ab-504d-4fdb-b43d-520a7bfadd27",
                },
                {
                  buildHookId: "6167ab0bbc8a224df30ca7a1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-u643oxg7",
                  apiId: "ff963e66-105f-4c96-8ce5-7d09dc400c78",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ashikranasweet/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-u643oxg7.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
