

const VIEWS = {
    QUESTIONS: 'Questions',
    HOME: 'Home',
    RESULTS: 'Results',
}

const CARDTYPES = {
    QUESTION: 'Question',
    SUBMIT: 'Submit'
}

const BUTTONTEXT = {
    START: 'Start',
    SUBMIT: 'Submit',
    YES: 'Yes',
    NO: 'No',
    STARTOVER: 'Start Over',
    ENTERVALUE: 'Enter Value',
    CLOSE: 'Close'
}

const STRINGS = {
    HOMETEXT: 'Welcome to the DigiDoc! Click the start button to complete a short survey to identify if you have a flu.',
    SUBMITTEXT: 'Click "Submit" to submit your answers. If you would like to change your answers click "Start Over".',
    NEGATIVERESULT: 'You do not appear to be experincing the flu. If your symptoms appear to worse please see a doctor.',
    POSITIVERESULT: 'You appear to be showing signs of the flu. Please contact your nearest doctor immediately.',
    DANGER: 'Danger!',
    NODANGER: 'Everything seems to be ok!',
    ERROR: 'ERROR',
    PLACEHOLDER: 'Input value here',
    ALERTHEADER: 'Enter Valid Number',
    ALERTMESSAGE: 'Please enter a valid number in degrees Celcius.',
    ERRORMESSAGE: 'Something went wrong please try again later'
}

const REQUESTTYPES = {
    POST: 'POST',
    GET: 'GET'
}

const HEADERS = {
    JSON: { Accept: 'application/json', 'Content-Type': 'application/json'}
}

const KEYBOARDTYPES = {
    NUMERIC: 'numeric'
}

module.exports = { BUTTONTEXT, VIEWS, CARDTYPES, STRINGS, REQUESTTYPES, HEADERS, KEYBOARDTYPES }