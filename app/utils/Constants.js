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
    DANGER: 'DANGER!',
    NODANGER: 'Everything seems to be ok!'
}

module.exports = { BUTTONTEXT, VIEWS, CARDTYPES, STRINGS }