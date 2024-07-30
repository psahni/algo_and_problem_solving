def reverse(arr)
   a_start = 0
   a_end = arr.size - 1
   while (a_start < a_end) do
      temp = arr[a_start]
      arr[a_start] = arr[a_end]
      arr[a_end] = temp

      a_start +=1
      a_end -=1
   end
   arr
end

arr = [7, 1, 3, 4, 5]
# 5, 1, 3, 4, 7
#reverse(arr) # 5, 7, 1, 3, 4

def rotate(arr)
   first = 0
   last  = arr.length - 1

  # Swap - Move Last
   temp = arr[first]
   arr[first] = arr[last]
   first += 1

  # Rotate
   while (last > first) do
     arr[last] = arr[last-1]
     last -=1
   end

   # Swap - Move first
   arr[last] = temp # temp is a first number
   p arr
end

rotate(arr)