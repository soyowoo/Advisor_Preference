
class Structure {
	constructor(args = {}) {
        this.date = typeof args.date === 'undefined'? [] : args.date;
        this.currentTrialIndex = args.currentTrialIndex || 0;
        this.complete = typeof args.complete === 'undefined'? false : args.complete;
        this.participantID = typeof args.participantID === 'undefined'? "NO_ID" : args.participantID;
    }

    saveAttentionCheck1(trial) 
    {
        this.sliderRT = trial.rt;
        this.sliderStimulus = trial.stimulus;
        this.sliderResponse = trial.response;
        this.sliderDuration = trial.time_elapsed;
    }

    saveAttentionCheck2(trial) 
    {
        this.sliderRT = trial.rt;
        this.sliderStimulus = trial.stimulus;
        this.sliderResponse2 = trial.response;
        this.sliderDuration = trial.time_elapsed;
    };

    saveSliderResponse(trial) //from end_trial in plugin 
    {
        this.sliderRT = trial.rt;
        this.sliderStimulus = trial.stimulus;
        this.sliderResponse3 = trial.response;
        this.sliderDuration = trial.time_elapsed;
    }

    saveManipulationCheck(trial)
    {
        this.manipulationRT = trial.rt;
        this.manipulationResponse = trial.response;
        this.manipulationQuestionOrder = trial.question_order;
        this.manipulationDuration = trial.time_elapsed;
        //need to do manipuation.RT? you did this.currentSubtrial.requestedTests = trial.response; or only with array?
    }

    saveAdvisorARating(trial) //need each for a and b? //Can I save var name instead?
    {
        this.advisorART = trial.rt;
        this.advisorAResponse = trial.response;
        this.advisorAQuestionOrder = trial.question_order;
        this.advisorADuration = trial.time_elapsed;
    }

    saveAdvisorBRating(trial)
    {
        this.advisorBRT = trial.rt;
        this.advisorBResponse = trial.response;
        this.advisorBQuestionOrder = trial.question_order;
        this.advisorBDuration = trial.time_elapsed;
    }

    saveEARS(trial)
    {
        this.earsRT = trial.rt;
        this.earsResponse = trial.response;
        this.earsQuestionOrder = trial.question_order;
        this.earsDuration = trial.time_elapsed;
    }

    saveDemographics(trial)
    {
        this.demoRT = trial.rt;
        this.demoResponse = trial.response;
        this.demoDuration = trial.time_elapsed;
    }
}

//Attention Checking
function checkSlider(slidervalue){
    let fail = 0
    if ((slidervalue <= 20 && slidervalue2 <= 20)) {
        fail = 0
    } else if (slidervalue > 20 || slidervalue2 > 20) {
        fail = 1
    }
    return fail;
    };


function checkSlider2(slidervalue){
    let fail = 0
    if (slidervalue <= 20 ) {
        fail = 0
    } else if (slidervalue > 20) {
        fail = 1
    }
    return fail;
    };

    //let attentionChecking = checkSlider(this.sliderResponse, this.sliderResponse2)
    

