<?php
/**
 * Simple File Downloader
 * Usage: Upload this file to your server, visit it in browser.
 * Enter the URL of your project zip file (e.g. from Dropbox/Google Drive).
 * It will download the file to the server.
 */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $url = $_POST['file_url'];
    $filename = basename(parse_url($url, PHP_URL_PATH));
    
    // Default to 'project.zip' if filename detection fails
    if (!$filename || $filename === 'php') {
        $filename = 'project.zip';
    }

    if (filter_var($url, FILTER_VALIDATE_URL)) {
        echo "<p>Attempting to download from: " . htmlspecialchars($url) . "</p>";
        echo "<p>Saving as: " . htmlspecialchars($filename) . "</p>";
        
        // Increase execution time for large files
        set_time_limit(300); 

        $file_content = file_get_contents($url);
        
        if ($file_content !== false) {
            if (file_put_contents($filename, $file_content)) {
                echo "<h3 style='color:green'>Success! File saved as $filename</h3>";
                echo "<p>Size: " . round(filesize($filename) / 1024 / 1024, 2) . " MB</p>";
            } else {
                echo "<h3 style='color:red'>Error: Could not save file. Check permissions.</h3>";
            }
        } else {
            echo "<h3 style='color:red'>Error: Could not download file. Check URL or server configuration (allow_url_fopen).</h3>";
        }
    } else {
        echo "<h3 style='color:red'>Invalid URL</h3>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Server File Downloader</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; }
        input[type="text"] { width: 100%; padding: 10px; margin: 10px 0; }
        button { padding: 10px 20px; background: #007bff; color: white; border: none; cursor: pointer; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
    <h2>Upload Bypass Tool</h2>
    <p>Use this to download your project zip from a direct URL (Dropbox, Google Drive direct link, etc).</p>
    <form method="post">
        <label>File URL:</label>
        <input type="text" name="file_url" placeholder="https://example.com/clean-deploy.zip" required>
        <button type="submit">Download to Server</button>
    </form>
</body>
</html>
