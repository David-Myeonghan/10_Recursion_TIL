## Algorithm

    - Allows us to use data structures to perform actions on that data.
    - Data Structures + Algorithms = Programs
    - Class{} + function() = Program
    - for doing majority of scaling to improve our programs.
    - Can reduce time complexity, space complexity.

# Recursion

    - Isn't technically algorithms.
    - More of a concept.
    - Used a lot using in another algorithms.
    - such as "ls -R"  -R:recursive
    - When you define something in terms of itself. It's a function that refers to itself inside of the function.

    - How recursion helps us solve problems
    - Recursion is good for tasks that have repeated subtasks to do.
    - used in searching and sorting.

## Stack overflow

    - On the Call Stack,
    - Nothing's getting poped from the stack, and the function keeps running until we run out of memory.
    - Grabbing a piece of memory from our computer and adding function call to the stack.
    - This is the biggest problem in recursion.
    - The computer needs to allocate the memory to remember things.
    - Stack Overflow can occur when we have recursion and there's no way to stop this recursive call.

## Anatomy of Recursion

    - Every recursibe function needs to have something called a base case or a stop point.
    - Two paths:
        - Recursive Case: Call the function again and run it.
        - Base Case: Stop calling the function if there's nothing more to search.
    - How can we add this base case?
    - we can add counter, and if counter > 3.
    - Why do we get 'undefined' after a recursive function returned something?
    - Even though the inner most function returns something, if the returned value doesn't pass it up towards the very end, outer functions just returns nothing, which means 'undefined'.
    - So, This is somehting that you have to keep in mind with recursion:
    - There is usually a base case and you always want to make sure you return so that the value that you want to return gets bubbled up all the way to talk.

    - Rules to follow when you make recursive functions.
    1. Identify the base case. - when to stop
    2. Identify the recursive case. - when to continue
    3. Get closer and closer and return when needed. Usually you have 2 returns, for the base case and the recursive case.

    - The function simply gets closer and closer to the base case, and once it gets to the base case, it finally returns and pops functions off the stack.
