===

1. 不同类型  ->  false
2. 相同类型

   1. primitive  数值相同  --->  true

                 例外:   1. NaN === NaN         false
                         2. +0 === -0           true     


   2. reference  地址相同  --->  true       a = []   b = a
                 仅数值相同 ----> false      a = []   b = []