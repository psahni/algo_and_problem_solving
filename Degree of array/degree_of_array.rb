# My Solution - O(n)
class DegreeOfArray
  def initialize
    @degree = 0
    @array = [1, 2, 2, 3, 1, 4, 2, 4, 4]
    @hash_map = Hash.new(0)
    @first_seen = {}
    @last_seen = {}
  end

  def take_input
    puts "Input number of elements"
    @num_of_elements = gets.chomp.to_i
    raise 'Invalid input' if @num_of_elements <= 0
    puts "Input an array"
    @array = gets.chomp.split(' ')
    raise 'Invalid input' if @array.length != @num_of_elements
    @array
  end

  def calculate_frequency(element)
    @hash_map[element.to_i] += 1
  end

  def find_degree(element, i)
    calculate_frequency(element)
    @first_seen[element] = i if @first_seen[element].nil?

    if @hash_map[element.to_i] > @degree
      @degree = @hash_map[element.to_i]
    end
  end

  def collect_sub_array(start_pos, end_pos)
    @arr = []
    while start_pos <= end_pos
      @arr << @array[start_pos]
      start_pos +=1
    end
    @arr
  end

  def find_min_length_array
     subarrays = {}
     # distances = {}
     @array.each_with_index do |element, i|
        if (@hash_map[element.to_i] === @degree)
           last_seen = i
           @last_seen[element] =i
          #  distance = last_seen - @first_seen[element] + 1
          #  distances[element] = distance
           start_pos = @first_seen[element]
           end_pos = @last_seen[element]
           subarrays[element] = collect_sub_array(start_pos, end_pos)
        end
     end
     len = 0
     element = 0
     subarrays.each_key do |key|
      if subarrays[key].length > 0
        len = subarrays[key].length
        element = key
      end
     end
     puts "Min sub array is:-"
     p subarrays[element]
     subarrays[element].length
  end

  def main
    # take_input
    p @array
    @array.each_with_index do |element, index|
      find_degree(element, index)
    end

    puts "==================="
    puts "Degree of array:"
    p @degree
    puts "==================="
    puts "Min Length:"
    p find_min_length_array
  end
end

d = DegreeOfArray.new()
d.main