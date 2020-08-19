const settings = {
  "name": "sus.ubc.ca",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test SUS Page",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/homepage/"
            ],
            [
              "About Us",
              "/aboutus/"
            ],
            [
              "ssran",
              "/ssran2020/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          api: "https://sus.ubc.ca/wp-json",
          homepage: "/",
          postsPage: "/blog/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
