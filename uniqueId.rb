

@val1=""
def generate
 val2 = "#{Time.now.to_i}#{Time.now.nsec}"
 if @val1 == val2
    puts "COLLISION FOUND!!"
    return
 end
  @val1 = val2
  p @val1
end

10000.times do
   generate
end
