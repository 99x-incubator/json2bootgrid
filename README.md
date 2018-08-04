# json2bootgrid

Covert json to bootstrap grid with color, width and content

### Usage

#### Snippet

```javascript
let a = {
    
    rows : [
        {
            columns : [
                {
                    text : 'col 1',
                    width : 6,
                    color :  'green'               
                },
                {
                    text : 'col 2',
                    width : 6,
                    color :  'yellow'               
                }
            ]
        }
    ]
}

window.onload = () => {
    let p = new Parser();
    document.getElementById('app').innerHTML = p.parse(a);

}
```

#### Output

<img src='sample.jpg'>


