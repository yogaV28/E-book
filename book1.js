var url = 'Book-1.pdf';

// Load PDF document
pdfjsLib.getDocument(url).promise.then(function(pdf) {
    // Get the first page
    pdf.getPage(1).then(function(page) {
        // Set the scale
        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });
        var canvas = document.getElementById('pdf-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);
    });
});