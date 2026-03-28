// https://leetcode.com/problems/course-schedule/description/

package main

import "fmt"

func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := make(map[int][]int)        // graph is a map where each course points to a slice of courses that depend on it.
	inDegree := make([]int, numCourses) // 0 means, they have no pre requisites

	for _, prerequisite := range prerequisites {
		course, dependency := prerequisite[0], prerequisite[1]
		graph[dependency] = append(graph[dependency], course)
		inDegree[course]++
	}

	queue := []int{}
	fmt.Println("-------")
	fmt.Println(graph, inDegree)
	for index, value := range inDegree {
		if value == 0 {
			queue = append(queue, index)
		}
	}

	coursesTaken := 0
	for len(queue) > 0 {
		course := queue[0]
		queue = queue[1:]
		coursesTaken++

		dependents := graph[course]

		for _, dependent := range dependents {
			inDegree[dependent]--
			queue = append(queue, dependent)
		}
	}

	return coursesTaken == numCourses
}

func main() {
	numCourses := 2
	prerequisites := [][]int{{1, 0}}
	cann := canFinish(numCourses, prerequisites)
	fmt.Println(cann)

	prerequisites = [][]int{{1, 0}, {0, 1}}
	cann = canFinish(numCourses, prerequisites)
	fmt.Println(cann)
}
