# horoscopeAndroidVer

EXPECTED RESULT: To take a string as an input and randomly generate an answer for a question out of the answer array

EVALUATION:
    1. Taking string as an input which should not be empty.
    2. Generating answers like "yes" or "maybe" by taking an array and randomly generating the number of it's index.
    3. Displaying the randomly generated array element as an answer of the user's question

WHAT WILL BE NEEDED?
    1. A variable that stores question of the user so that the null condition could be checked.
    2. An array of string answers to answer the user's question. The array will contain the following strings:
        a. yes
        b. no
        c. maybe
        d. not possible
        e. gotta work hard for that
        f. no doubt this is happening
        g. signs point to yes
        h. signs point to no
        i. even the universe can't decide
        j. even the universe is against your stupid question/ decision
    3. Variable i which takes array.length as value so we can generate a random number with it

STYLE:
    1. HTML:
        -> input with id="question"
        -> button with value "Get answer"
        -> <p> with an id="answer"
    2. JAVASCRIPT:
        -> const input
        -> let array = [answers]
        -> let i = Math.floor(Math.random() * array.length)
        -> the answer to the question will be array[i]
    3. CSS: 
        basic

BUGS:
    1. Same bug in my previous program. The input.value does not work.
