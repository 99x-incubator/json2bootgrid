class Parser {
    createRow(r) {
        return '<div class="row">' + this.parse(r) + '</div>';
    }
    
    createColumn(c) { 
        return '<div style="background-color : ' + c.color + '" class="col-lg-' + c.width + '">' + (c.text ? c.text : '') + this.parse(c) + '</div>';
    }
    
    parse(s) {
        let S = '';
        
        if(s.rows) {

            for(let i in s.rows) {
                S += this.createRow(s.rows[i]);
            }
        }
        if(s.columns) {
            for(let i in s.columns) {
                S += this.createColumn(s.columns[i]);
            }
        }
        return S;
    }
}

let a = {
    rows : [
        {
            columns : [
                {
                    width : 6,
                    rows : [
                        {
                            columns : [
                                {
                                    width : 12,
                                    rows : [
                                        {
                                           columns : [
                                                {
                                                    width : 6,
                                                    text : 'col',
                                                    color : 'lightblue'
                                                },
                                                {
                                                    width : 6,
                                                    text : 'col',
                                                    color : 'lightgreen'
                                                }
                                            ]
                                        }

                                    ]
                                }
                            ]
                        },
                                                {
                            columns : [
                                {
                                    width : 12,
                                    color : 'red',
                                    text : 'col'
                                }
                            ]
                        }
                    ]
                },
                {
                    width : 6,
                    color : 'yellow',
                    text : 'col'
                }
            ]
        }
    ]
}






window.onload = () => {
    let p = new Parser();
    document.getElementById('app').innerHTML = p.parse(a);

}