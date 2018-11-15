
var fibValue = document.getElementById('fibValue');

document.querySelector('form').addEventListener('submit', getFib);







function getFib(e){
    e.preventDefault();

    if (isNaN(fibValue.value) || fibValue.value == null || fibValue.value == ''){
        alert('Pls enter a number!');
    }else{
        //varible declrtion
        var a,b,n, result;
        //set number of fib result
        n = fibValue.value;
        //fib starts with 0, 1, 1
        arr = [1]
        //  first fib num
        a=0;
        //second fib num
        b=1;
        //third fib num
        result=b;

        //loop thru 
        for(var i = 1; i < n; i++){
            //set the third to the sume of first and the second
            result = a + b;
            //then the first becomes the second
            a= b;
            //the second becomes the third
            b= result;
            //push into array
            arr.push(b);
        }

        var output = `<h4 id="fabinputValue" class= "py-3">Your entered: ${fibValue.value}</h4>
                    <p id="fabNum">Your Fibonacci: </p>`;
        for(var i in arr){
           output +=
           `<span class="badge badge-success p-2 m-2"> " ${arr[i]} "</span>`
        }
        fibValue.value = '';
        document.getElementById('output').innerHTML = output;

    }


}





