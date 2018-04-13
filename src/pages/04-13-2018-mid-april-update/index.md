---
path: "/mid-april-update"
date: "2018-04-13"
title: "Mid April Update"
tags: ["programming"]
published: "true"
---
After some Googling, I found out the valid formats for date that Gatsby's graphQL parser can interpret:

```javascript

const ISO_8601_FORMAT = [
  `YYYY`,
  `YYYY-MM`,
  `YYYY-MM-DD`,
  `YYYYMMDD`,
  `YYYY-MM-DDTHHZ`,
  `YYYY-MM-DDTHH:mmZ`,
  `YYYY-MM-DDTHHmmZ`,
  `YYYY-MM-DDTHH:mm:ssZ`,
  `YYYY-MM-DDTHHmmssZ`,
  `YYYY-MM-DDTHH:mm:ss.SSSZ`,
  `YYYY-MM-DDTHHmmss.SSSZ`,
  `YYYY-[W]WW`,
  `YYYY[W]WW`,
  `YYYY-[W]WW-E`,
  `YYYY[W]WWE`,
  `YYYY-DDDD`,
  `YYYYDDDD`,
]
```

This should make things easier for me going forward, because now I don't have to THIS every time I want to make a blog post:
 ```
 date -u YYYY-MM-DDTHH:mm:ss.%3NZ blah blah blah 
 ```


My next post will be a tutorial for how I used gatsby-remark-prismJS to handle Markdown code formatting for this blog. It will follow pretty closely to the tutorial found [here](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/), but be a lot simpler. It will also include my own additions to deal with some of the problems that I encountered with the tutorial, especially relating to correct formatting after changing prismJS themes.

DCP progress has been decent; I'm still at a deficit but I'm working to slowly chip away at it. There are some problems that I'm still incapable of doing and should throw in the towel for, but overall I feel a lot more confident when faced with programming problems. I haven't looked up the solutions for the ones I am incapable of doing because I want to give myself enough time to review and understand the solutions instead of just copying them down and closing the chapter on them.

This past week has been difficult outside of programming as I've been dealing with health issues. I had a negative reaction to the first round of medication, so we're trying something different which will hopefully clear things up without any negative side effects.