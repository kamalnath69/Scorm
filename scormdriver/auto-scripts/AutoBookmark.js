function SetBookmark() {
    var SD = window.parent,
        loc = window.location.href;

    // Set the bookmark using the relative path and document title
    SD.SetBookmark(
        loc.substring(loc.toLowerCase().lastIndexOf("/scormcontent/") + 14, loc.length),
        document.title
    );
    
    // Commit the bookmark data to the LMS
    SD.CommitData();

    // Notify the parent window that a bookmark has been set
    window.parent.postMessage({ type: 'SCORMEvent', data: 'BookmarkSet' }, '*');
}

// Automatically set a bookmark for this page.
SetBookmark();
