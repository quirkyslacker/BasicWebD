$(document).ready(function () {
    function fizzBuzz() {
        console.log('Running');
        let text = $('#text');
        let n = text.val();
        if (!n || n === '') n = 1000;
        let list = $('#list');

        /**
         * try counter approach too
         * let c3 = 1, c5 = 1;
         */

        // let data = [];
        let data;
        // var lis = list.getElementsByTagName("li");
        // while(lis.length > 0) {
        //     list.removeChild(lis[0]);
        // }
        list.empty();
        let start = new Date().getTime();
        for (let i = 1; i <= n; ++i) {
            //let str = $('<li></li>');
            let str = '';
            if (i % 3 === 0) {
                str += 'fizz';
            }
            if (i % 5 === 0) {
                str += 'buzz';
            }
            if (!str || str === '') {
                str = i;
            }

            //when data is var
            if (!data) data = `<li>${str}</li>`;
            else data += `<li>${str}</li>`;

            //when data is array
            //data.push(str);

            //Using DOM
            /*var element = document.createElement('li');
            element.innerText = str;
            list.appendChild(element);*/
        }
        //console.log(typeof data);
        console.log(new Date().getTime() - start);
        text.val('');
        //list.append(...data);
        list.html(data);
    }

    $('#btn').on('click', fizzBuzz);
    //document.getElementById('btn')
});