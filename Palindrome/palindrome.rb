def isPalindrome(num)
  temp_num = num;
  sum = 0;
  while (temp_num > 0)
    last_digit = temp_num%10
    sum = sum*10 + last_digit
    p sum
    temp_num = temp_num/10
  end

  if sum === num
    print "Palindrome"
    return
  end
  print "Not Palindrome"
end

isPalindrome(121)