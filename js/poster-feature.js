document.addEventListener('DOMContentLoaded', function() {
    // Select all posters or specific poster elements by class name or ID
    const posters = document.querySelectorAll('.poster-link, #posterBox');
    
    posters.forEach(function(poster) {
        poster.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior if it's an <a> tag
            
            // Get target URL from data attribute or fallback to example.com
            const externalUrl = poster.getAttribute('data-external-url') || 'https://example.com';
            const nextUrl = poster.getAttribute('data-next-url') || 'next-page.html';
            
            // 1. Open external URL in a new tab
            window.open(externalUrl, '_blank');
            
            // 2. Redirect the main page to the next page
            window.location.href = nextUrl;
        });
    });
});