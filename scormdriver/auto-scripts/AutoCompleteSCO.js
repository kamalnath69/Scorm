function SetSCOComplete() {
    var SD = window.parent;

    // This is the last page so set it complete
    SD.SetReachedEnd();
    SD.CommitData();

    // Notify the parent window that the SCO is complete
    window.parent.postMessage({ type: 'SCORMEvent', data: 'SCOComplete' }, '*');
}

// Automatically set the SCO to complete.
SetSCOComplete();
