import { AddonItem } from '../data/addons';

/**
 * Robustly opens the TallyShop website with the specified addon's search code ("TS05IC").
 * In iframe environments and modern browsers, synthetic form submissions without an <a> click
 * or standard anchor navigation are blocked as popups or navigation restrictions.
 *
 * Using an explicit <a> tag click with target="_blank" guarantees browser-native tab opening.
 */
export function openTallyShopAddon(addon: AddonItem): void {
  const searchCode = addon.tallyShopSearchCode || 'TS05IC';
  const baseUrl = addon.tallyShopUrl || 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php';

  // Copy search code to clipboard for convenient paste into search field
  try {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(searchCode).catch(() => {});
    }
  } catch {
    // ignore clipboard errors
  }

  // Target destination URL with search query param
  const destinationUrl = `${baseUrl}?strSearchKeywords=${encodeURIComponent(searchCode)}#${encodeURIComponent(searchCode)}`;

  // Create an explicit anchor element to trigger reliable opening across iframe restrictions
  const link = document.createElement('a');
  link.href = destinationUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();

  // Clean up
  setTimeout(() => {
    try {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    } catch {
      // ignore
    }
  }, 500);
}
