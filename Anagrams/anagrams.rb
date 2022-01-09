# Use net/http to send network request if needed.

$input_data = ''

ARGF.each_line do |line|
    $input_data += line
end

# Use the function below to output the solution
def code_here(input_data)
  puts input_data
end

code_here($input_data)


class Anagrams
  def initialize(str1, str2)
    @str1 = str1
    @str2 = str2
  end

  def test
    return true if @str1 == @str2
    s1 = sort(@str1)
    s2 = sort(@str2)
    s1 == s2
  end

  # Not sure if uniqueness should be checked or not.
  def sort(str)
    str.downcase.chars.sort.join().gsub(/[\s]/, '')
  end
end

$input_data = ''

ARGF.each_line do |line|
  $input_data += line
end


def code_here(input_data)
  str1 = input_data[0]
  str2 = input_data[1]
  puts Anagrams.new(str1, str2).test
end

code_here($input_data.split(/\n/))