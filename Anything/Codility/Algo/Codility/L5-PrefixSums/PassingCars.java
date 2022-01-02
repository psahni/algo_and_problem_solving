package com.codility.lesson05.prefixsums;

public class PassingCars {
  public int solution(int[] A) {
    int zeros = 0;
    int carPasses = 0;

    //for every 1 - there will be an extra car pass for ALL the 0's that came before it carPasses += zeros; if(carPasses > 1000000000) {
    for(int i=0; i<A.length; i++) {
          if(A[i] == 0) {
            zeros++;
          } else if(A[i] == 1) {
            carPasses += zeros
          }
          if(carPasses > 1000000000) {
              return -1;
          }        
        }
      }
      else throw new RuntimeException("shouldn't reach here");
    }
    return carPasses;
  }
}
