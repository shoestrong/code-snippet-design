# 冒泡排序
```
var arr = [45,2,74,13,56,78,3,9];
```

原数组                 |次数 | 减少排序的长度
-|-|-
2,45,74,13,56,78,3,9  | 1  |  arr.length - 1 - 0
2,45,13,74,56,78,3,9  | 2  |  arr.length - 1 - 1
2,45,13,56,74,78,3,9  | 3  |  arr.length - 1 - 2
2,45,13,56,74,3,78,9  | 4  |  arr.length - 1 - 3
2,45,13,56,74,3,9,78  | 5  |  arr.length - 1 - 4
2,13,45,56,74,3,9,78  | 6  |  arr.length - 1 - 5
2,13,45,56,3,74,9,78  | 7  |  arr.length - 1 - 6
2,13,45,56,3,9,74,78  | 8  |  arr.length - 1 - 7
2,13,45,3,56,9,74,78  | 9  |  arr.length - 1 - 8
2,13,45,3,9,56,74,78  | 10 |  arr.length - 1 - 9
2,13,3,45,9,56,74,78  | 11 |  arr.length - 1 - 10
2,13,3,9,45,56,74,78  | 12 |  arr.length - 1 - 11
2,3,13,9,45,56,74,78  | 13 |  arr.length - 1 - 12
2,3,9,13,45,56,74,78  | 14 |  arr.length - 1 - 13

每次排序都要把上次排序已经排过的减去，以至于每次长度都要把当前比对过的过滤掉，所以才有arr.length-1-n

