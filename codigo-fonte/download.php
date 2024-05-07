<?php
    header('Content-Type: application/download');
    header('Content-Disposition: attachment; filename=";;/data/products.json"');
    header("Content-Length: " . filesize("../data/products.json"));

    $fp = fopen("../data/products.json", "r");
    fpassthru($fp);
    fclose($fp);
?>
