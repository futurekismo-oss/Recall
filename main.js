function showFiles() {
    document.getElementById('fileModal').classList.add('active');
}

function closeFiles() {
    document.getElementById('fileModal').classList.remove('active');
}

function openStudyApp(subject) {
    // Close the file modal
    closeFiles();

    // Show loading screen
    document.getElementById('loadingScreen').classList.add('active');

    // Wait 3 seconds then redirect
    setTimeout(() => {
        if (subject === 'spanish') {
            window.location.href = 'https://claude.ai/public/artifacts/1a6af2f7-cefe-411d-b5ff-25f2c847ba9d';
        }
        else if (subject == 'biology') {
            window.location.href = 'https://claude.ai/public/artifacts/941c63eb-9f41-426f-8e38-ccdd30a97afd';
        }
        else if (subject == 'history') {
            window.location.href = 'https://claude.ai/public/artifacts/48ece24c-f371-4104-9d14-4749075873bc';
        }
        else if (subject == 'planets') {
            window.location.href = 'https://claude.ai/public/artifacts/f2d90b46-5743-4ed3-b0ee-59382c0a7251';
        }
        else {
            alert('This demo file is coming soon! It is still a proto, so await(original_release);');
            document.getElementById('loadingScreen').classList.remove('active');
        }
    }, 3000);
}

// Close modal when clicking outside
document.getElementById('fileModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeFiles();
    }
});