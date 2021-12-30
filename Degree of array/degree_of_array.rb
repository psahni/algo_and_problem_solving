# My Solution - O(n)
class DegreeOfArray
  def initialize
    @degree = 0
    @array = [1, 2, 2, 3, 1, 4, 2]
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

  def find_min_length_array
     distances = {}
     @array.each_with_index do |element, i|
        if (@hash_map[element.to_i] === @degree)
           last_seen = i
           distance = last_seen - @first_seen[element] + 1
           distances[element] = distance
        end
     end
     distances.values.min
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