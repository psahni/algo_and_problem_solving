class MaxSumNonContiguous
  def initialize(arr)
    @arr = arr
    @sum = 0
    @max = arr[0]
  end

  def find
    for i in 0..@arr.length-1 do
      if @arr[i] < 0
      else
       @sum += @arr[i]
      end
      @max = [@sum, @max].max
    end
    @max
  end
end

arr = [-2, 0, -4, 6, 1, 2, -3, 0, 4]
p MaxSumNonContiguous.new(arr).find