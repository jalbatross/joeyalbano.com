---
path: "/dcp-struggles"
date: "2018-04-03T06:29:55.579Z"
title: "DCP Struggles"
tags: ["programming", "dcp"]
published: "true"
---
Local date: 2018-04-02T23:30:17.614PDT

This past week has been pretty hectic. I've fallen behind on my Daily Coding Problem sets. Currently, I'm 7(!!) problem sets back. My hope is that I'll be able to do a significant portion tomorrow, since I'm ahead at work.

On the bright side, I'm finding that I'm able to come to solutions both more quickly and indepedently. My preference seems to be toward linear problems involving arrays. There's still a lot of work to be done with matrices, trees, and recursion in general.

Here's my solution for DCP18. The assignment was as follows:

>Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.
>
>For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
>
>10 = max(10, 5, 2)
>7 = max(5, 2, 7)
>8 = max(2, 7, 8)
>8 = max(7, 8, 7)
>Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

```java
    public static void printMaxSubarrayVals(ArrayList<Integer> arr, int k) {
        HashMap<Integer, Stack<Integer>> myMap = new HashMap<Integer, Stack<Integer>>();
        
        int max = 0;
        for (int i = 0; i < arr.size() - k + 1; i++) {
           //get next k elements
           //put them in hash map
            for (int j = i; j < i + k; j++) {
                if (myMap.containsKey(arr.get(j)) ) {
                    myMap.get(arr.get(j)).add(arr.get(j));
                }
                else {
                    Stack<Integer> newStack = new Stack<Integer>();
                    newStack.add(arr.get(j));
                    myMap.put(arr.get(j), newStack);
                }
            }
           //calculate max val of hash map, then print it
            max = hashMapMax(myMap);
            System.out.println(max);
            
           //remove tbr from hash map
            if (myMap.get(arr.get(i)).size() == 1) {
                myMap.remove(arr.get(i));
            }
            else {
                myMap.get(arr.get(i)).pop();
            }
        }
        
        System.out.println("done");
     }
    
```

After viewing this page, there are a few things that I need to take care of with the blog:

1. The blog should be able to accept my local time and date and parse a string from it. Currently, any deviation from
YYYY-MM-DDTHH:mm:ss.%3NZ results in a graphQL error. I'm guessing it has something to do with how graphQL formats dates from date strings.
2. I want to implement Markdown language syntax highlighting. Not a big fan of gray-black monolithic blocks of code.