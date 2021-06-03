//first anser


<script>
    function getEvenNumbers() {
        var arr = [1, 2, 3, 4, 5, 6];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                document.writeln(arr[i] + "<br />");
            }
        }
    }

    getEvenNumbers();
</script>
// second anser
public static int maxOnes(int[] arr){
    int count = 0;
    int max = 0;
    for(int i = 0; i < arr.length; i++){
        if(arr[i] == 0)
            count = 0;
        else
            count++;
        max = count > max ? count : max;
    }
    return max;
}
//third anser
<script>
    function printRepeating(arr , size)
    {
        var i, j;
        document.write("Repeated Elements are :");
        for (i = 0; i < size; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                if (arr[i] == arr[j])
                    document.write(arr[i] + " ");
            }
        }
    }
 
var arr = [4, 2, 4, 5, 2, 3, 1];
var arr_size = arr.length;
printRepeating(arr, arr_size);
</script>
// fourt anser
public static int maxOnes(int[] arr){
    int count = 0;
    int max = 0;
    for(int i = 0; i < arr.length; i++){
        if(arr[i] == 0)
            count = 0;
        else
            count++;
        max = count > max ? count : max;
    }
    return max;
}
// fifth anser 
var obj = [
    {"id" : 4, "name" : "abc"},
    {"id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "abc3"},
    {"id" : 6, "name" : "abc5"},
   ];
   const sorted=obj.sort(function(a,b){return (a.id-b.id)}) 
   console.log(sorted);