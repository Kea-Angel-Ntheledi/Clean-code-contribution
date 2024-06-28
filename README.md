# Clean-code-contribution

## Challenge 1:
### Problem: Refactoring the code snippet to improve the readability and expressiveness of variable names, function names, and class names.
### Solution: 
    D is renamed to Device to represent what the class actually is.
    d is renamed to status to describe what the integer represents.
    f is renamed to performAction to indicate that this method performs some action based on the device's status.
    t is renamed to executeStartup and p is renamed to executeShutdown to clarify the purpose of these methods.

## Challenge 2:
### Problem: Refactoring the code to improve function readability, reduce the number of arguments, and increase overall clarity.
### Solution: 
    The calculateAndPrintStatistics function is broken down into smaller, more manageable functions: calculateSum, calculateAverage, findMax, findMin, and printStatistics.
    Each smaller function has a single responsibility, making the code easier to read, test, and maintain.
    This refactoring reduces the complexity of the calculateAndPrintStatistics function and makes the code more modular.
