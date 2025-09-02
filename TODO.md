# TODO: Ensure Social Media Links in Footer Open in New Page

## Tasks
- [x] Verify all social media links in src/components/Footer.tsx have target="_blank" attribute
- [x] Verify all social media links have rel="noopener noreferrer" for security
- [ ] Update placeholder social media links (Facebook and Twitter) to actual URLs if available
- [ ] Test the footer links to confirm they open in new tabs

## Notes
- Current implementation already includes target="_blank" and rel="noopener noreferrer" on all social media links
- Facebook and Twitter links are placeholders (href="#") and won't open new pages until updated with real URLs
- Instagram and YouTube links have real URLs and will open in new pages
- Verification complete: All social media links are configured to open in new pages
