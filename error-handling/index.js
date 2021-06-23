
// Custom Error Class that extends default Error class
class CustomError extends Error{
    constructor(msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}


/**
 *  Try - Catch error handling
 */
    function makeWord(text) {
        try {
            console.log('I am a text');
            console.log('I am a text');
            throw new CustomError('I am a custom error');
            console.log('I am a text');
            console.log('I am a text');
            console.log('I am a text');
			
		} catch(e){
		   console.log(e.message)
		}
	}
makeWord(85);


