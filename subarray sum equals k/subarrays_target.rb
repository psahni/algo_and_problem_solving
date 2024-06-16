class SubArrays

  def initialize(arr, target)
    @subarrays_count = {
      0 => 1
    }
    @current_sum = 0
    @num_of_subarrays = 0
    @arr = arr
    @target = target
  end

  def find
    @arr.each_with_index do |a, i|
      @current_sum += @arr[i]

      if (@subarrays_count[@current_sum - @target])
        @num_of_subarrays += @subarrays_count[@current_sum - @target]
      end

      @subarrays_count[@current_sum] = (@subarrays_count[@current_sum] || 0) + 1
    end
    @num_of_subarrays
  end
end

s = SubArrays.new([1, 2, 2, 3], 7)
p s.find