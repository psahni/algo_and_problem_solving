class SubArrays

  def initialize(arr, target)
    @arr_sums = {
      0 => 1
    }
    @sum = 0
    @result = 0
    @arr = arr
    @target = target
  end

  def find
    @arr.each_with_index do |a, i|
      @sum += @arr[i]

      if (@arr_sums[@sum - @target])
        @result += @arr_sums[@sum - @target]
      end

      @arr_sums[@sum] = (@arr_sums[@sum] || 0) + 1
    end
    @result
  end
end

s = SubArrays.new([1, 2, 2, 3], 7)
p s.find