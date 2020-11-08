# Frameworks and libs
* typescript
* chai + mocha for unit testing
* webpack for bundling
* tslog for logging

# Predefined npm scripts
* Run "npm run tsrun" to execute using ts-node
* Run "npm run test" to run tests
* Run "npm run coverage" to run test coverage
* Run "npm run buildBundle" to build a prepared js bundle (placed to dist folder)

# Exception handling input data validation
* Exceptions are handler and logged
* Input commands are validated
* Since not mentioned in the task, the mower with invalid initilaization/command line is skipped
* Specific validation if a commands line for a mower is missing not implemented. Can be added if needed

# Input/Output
* Input file name is hardcoded to "input.txt"
* Output file name is hardcoded to "output.txt"
* Logs are currently stored in "logs.txt". Also, I did not implement log file rotation. As not mentioned in the task, I did not implement ant log config files. Can be easily changed.
* As not mentioned in task, input is case sensitive