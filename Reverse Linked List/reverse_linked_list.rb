class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node)
    @value = value
    @next_node = next_node
  end
end

#--------------------------------------------------------------------------------

class LinkedList
  def initialize(value)
     @head = Node.new(value, nil)
  end

  def add_to_list(value)
    tail = @head
    while (tail.next_node != nil)
      tail = tail.next_node
    end
    tail.next_node = Node.new(value, nil)
  end

  def return_list
    @elements = []
    current_node = @head
    while current_node.next_node != nil
      @elements << current_node
      current_node = current_node.next_node
    end
    @elements << current_node
  end

  def print
    return_list
    @elements
  end

  def reverse
    current_node = @head
    prev_node = nil

    while current_node != nil
      next_node = current_node.next_node
      current_node.next_node = prev_node

      prev_node = current_node
      current_node = next_node
    end
    @head = prev_node
  end
end

list = LinkedList.new(10)
list.add_to_list(5)
list.add_to_list(7)
list.add_to_list(11)
list.add_to_list(15)

p list.print.map(&:value)
list.reverse
p list.print.map(&:value)
