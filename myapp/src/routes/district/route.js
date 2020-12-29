const aml = require('./aml');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'district' }],
  // the permalink function takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  // If permalink() is ommited, ({request}) => `/${request.slug}/` will be placed as the default.
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    let para = [
      `open tap water`,
      `wet hands`,
      `dispense soap`,
      `wash hands`,
      `rub hands at least 20 seconds`,
    ];

    let archieml = {
      "data": {
        "section1": [
          {
            "title": "ABC is a company of 李小龍",
            "date": "2020-12-29T11:12:13",
            "content": [
              {
                "name": "p1",
                "type": "p",
                "text": [
                  "Clean dishes",
                  "Pick up room"
                ]
              },
              {
                "name": "fig1",
                "type": "img",
                "src": "http://example.com/photo.png",
                "alt": "Family Photo",
                "caption": "AAA攝",
                "class": "iframe_cont"
              },
              {
                "name": "p2",
                "type": "p",
                "text": [
                  "为了更好地使用Python和相关软件包，你需要先安装Anaconda套装。详细的流程步骤请参考《 如何用Python做词云（3.1） 》一文。",
                  "到你的系统“终端”(macOS, Linux)或者“命令提示符”(Windows)下，进入我们的工作目录demo，执行以下命令。"
                ]
              },
              {
                "name": "list",
                "type": "x",
                "li": [
                  {
                    "type": "text",
                    "value": "hihi"
                  },
                  {
                    "type": "img",
                    "value": {
                      "src": "http://example.com/photo.png",
                      "alt": "Family Photo"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "demo": [
          {
            "key": "value",
            "arrayName": [
              {
                "name": "Amanda",
                "age": "26"
              },
              {
                "name": "Tessa",
                "age": "30"
              }
            ],
            "size": "5",
            "days": [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday{{size}}",
              "Saturday<% :) %>"
            ],
            "events": [
              {
                "type": "header",
                "value": "My Birthday"
              },
              {
                "type": "date",
                "value": "August 20th, 1990"
              },
              {
                "type": "image",
                "value": {
                  "src": "http://example.com/photo.png",
                  "alt": "Family Photo"
                }
              },
              {
                "type": "header",
                "value": "High School Graduation"
              },
              {
                "type": "date",
                "value": "June 4th, 2008"
              }
            ]
          }
        ]
      }
    };


    return {
      title: 'Elder.js Route: An Overview',
      steps: [
        `Step 1: All routes require a route.js and a svelte template. Look at ./src/simple/route.js to follow along.`,
        `Step 2: We define an 'all()' function that returns an array of 'request' objects.`,
        `Step 3: We define a permalink function that transforms the 'request' objects from 'all()' into permalinks.`,
        `Step 4: We define a data function that makes data available in your svelte template.`,
      ],
      content: para,
      archieml: aml.data,
    };
  },

  // template: 'Simple.svelte' // this is auto-detected.
  // layout: 'Layout.svelte' // this is auto-detected.
};
