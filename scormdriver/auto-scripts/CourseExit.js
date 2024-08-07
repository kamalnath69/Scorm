function niExit() {
    var SD = window.parent;
    
    var answer = confirm("Are You Sure You Wish To Exit This Course?");
        
    if(answer) {
        SD.ConcedeControl();

        // Notify the parent window that the user is exiting the course
        window.parent.postMessage({ type: 'SCORMEvent', data: 'CourseExit' }, '*');
    }
}
