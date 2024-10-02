# MongoTroubleshooter
The project aims at having various Shell/Javascript scripts for accessing mongo via command-line/mongo console. Specifically useful in debug scenarios and the scenarios where mongo needs to be operated independent of a UI application.   

# Script Overview: Deduplicate_iso_files.js
Purpose:
The Deduplicate_iso_files.js script is designed to identify and remove entries from a dataset of ISO files based on their checksum information. Specifically, it targets ISO files that have a SHA-1 checksum but lack an MD5 checksum, ensuring that only entries with both checksums remain in the dataset.

Use Case:
This script is particularly useful in environments where integrity checks are critical, and both SHA-1 and MD5 checksums are expected for valid ISO file processing. By ensuring that only entries with complete checksum information remain, the script helps maintain data accuracy and reliability.

Functionality:
Checksum Validation: The script scans the entries of ISO files to check for the presence of SHA-1 and MD5 checksums.
Deduplication Process:
It identifies ISO files that have a SHA-1 checksum but are missing an associated MD5 checksum.
These entries are considered incomplete for processing purposes.
The script removes these entries, retaining only those ISO files that possess both SHA-1 and MD5 checksums.


