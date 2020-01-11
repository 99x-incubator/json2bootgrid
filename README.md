# json2bootgrid

Covert json to bootstrap grid with color, width and content

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Blog post](https://medium.com/@shalithasuranga/writing-a-json-to-bootstrap-grid-parser-using-recursion-dafea39ce6cf)

### Usage

#### Snippet

```javascript
    window.onload = () => {
      let a = {
        rows: [
          {
            columns: [
              {
                text: 'col 1',
                width: 6,
                color: 'green'
              },
              {
                text: 'col 2',
                width: 6,
                color: 'yellow'
              }
            ]
          }
        ]
      }
      document.getElementById('app').innerHTML = json2bootgrid(a);
    }
```

#### Output

<img src='sample.jpg'>


