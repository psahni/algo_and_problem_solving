# Kaden Algo
class MaxSumContiguous
  def initialize(arr)
    @arr = arr
    @sum = 0
    @max = 0
  end

  def find
    start = 0
    to = 0
    for i in 0..@arr.length-1 do
      @sum += @arr[i]
      if @sum < 0
        @sum = 0
        @max = 0
        start = 0
        to = 0
      end
      if @max < @sum
        start = i if start == 0
        @max = @sum
        to = i
      end
    end

    puts "From: #{start}"
    puts "To: #{to}"
    @max
  end

  #  def find
  #   @sum = @arr[0]
  #   @max = @sum
  #   for i in 1..@arr.length-1 do
  #     @sum = [(@sum + @arr[i]), @arr[i]].max # When -ve comes, then start over
  #     p "sum #{@sum}"
  #     @max = [@sum, @max].max
  #     p "max , #{@max}"
  #   end
  #   @max
  #  end
end

#arr = [-2, 0, -4, 6, 1, 2, -3, 0, 4]
#arr = [-2, 2, 5, -11, 6]
#arr = [2, 1, 6, -7, 5, -3]
arr = [1, 10, 5, 42, -105, 1, 10, 5, 50]
p MaxSumContiguous.new(arr).find