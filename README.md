# json2bootgrid

Covert json to bootstrap grid with color, width and content

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


