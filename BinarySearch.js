
// [1,3,5,6,8]
// Example of binary search if the target is found it returns it's index value if not returns -1

// Here we use the some stratergy similar to the dictionary we would go to specific word that starts with the first letter similary here we use the reference which is middle index value ((start + end)/2 ) 
// But the mid formula is start+(end - start)/2 because considering both the numbers are the largest number then it leads to the memory problem hence we use this formula 
function binarySearch(arr, target){
    let start =0, end = arr.length - 1; 
    while(start <= end){
        let mid = Math.round(start + (end- start)/2);
    console.log(mid)
        if(arr[mid] > target){
            end = mid-1;
        }else if(arr[mid] < target){
            start = mid+1;
        }else {
            return mid;
        }
    }
    return -1;
}

// Through Recurssive Method  .. 

function binarySearchRec(start , end , target, arr){
    console.log(start, end , target, arr)
    if(start > end) {
        console.log("Not found");
        return -1;
    }
        let mid = Math.round(start + (end- start)/2);
    if(start <= end ){
        if(arr[mid] < target){
            return binarySearchRec(mid+1 , end , target , arr); // Dont forget the keyword return
        }else if(arr[mid]> target){
            return binarySearchRec(start ,mid-1 , target , arr);
        }else{
            return mid
        }
    }
}

const ar= [1,3,5,6,8] , tar= 12;

// console.log(binarySearch(ar, tar))

console.log(binarySearchRec(0,(ar.length-1),tar, ar))

