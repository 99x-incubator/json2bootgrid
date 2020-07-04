# json2bootgrid

Convert json to bootstrap grid with color, width and content

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

### License

Distributed under the MIT [License](https://github.com/99xt-incubator/json2bootgrid/blob/master/LICENSE). 
