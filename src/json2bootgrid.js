class Parser {
    createRow(r) {
        return '<div class="row">' + this.parse(r) + '</div>';
    }

    createColumn(c) {
        return '<div style="background-color : ' + c.color + '" class="col-lg-' + c.width + '">' + (c.text ? c.text : '') + this.parse(c) + '</div>';
    }

    parse(s) {
        let S = '';

        if (s.rows) {

            for (let i in s.rows) {
                S += this.createRow(s.rows[i]);
            }
        }
        if (s.columns) {
            for (let i in s.columns) {
                S += this.createColumn(s.columns[i]);
            }
        }
        return S;
    }
}



let json2bootgrid = (inputJson) => {
    return new Parser().parse(inputJson);
}