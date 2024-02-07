def print_reverse_array(arr):
    start , end = 0 , len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
    return arr





arr = [1,2,3,4]
print(print_reverse_array(arr[::])) # [4, 3, 2, 1]
print(arr[::-1]) # [4, 3, 2, 1]