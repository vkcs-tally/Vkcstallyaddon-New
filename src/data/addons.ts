import { VKCS_CANVA_1_DATA_URI, APPLY_WATERMARK_DATA_URI, FREIGHT_TRACKING_DATA_URI } from './canvaImages';

export interface AddonItem {
  id: string;
  title: string;
  category: 'inventory' | 'reports' | 'utilities' | 'ca';
  categoryLabel: string;
  pricePerYear: number;
  description: string;
  fullDescription: string;
  cardImage: string;
  modalImage: string;
  features: string[];
  tallyCompatibility: string;
  sku: string;
  popular?: boolean;
  tallyShopUrl?: string;
  tallyShopSearchCode?: string;
}

export const ADDONS_DATA: AddonItem[] = [
  {
    id: "multiple-bank-details-upi-modern-invoice",
    title: 'Free Addon : Multiple Bank Details with UPI on Modern Invoice 7.1',
    category: 'utilities',
    categoryLabel: 'Utilities & Communication',
    pricePerYear: 354,
    description: 'Simplify and accelerate your collection by printing Multiple Bank Accounts details and Unique UPI QR Codes directly on your Sales, Sales...',
    fullDescription: 'Simplify and accelerate your collection by printing Multiple Bank Accounts details and Unique UPI QR Codes directly on your Sales, Sales Order, Delivery Notes and Credit notes Invoice.',
    cardImage: VKCS_CANVA_1_DATA_URI,
    modalImage: VKCS_CANVA_1_DATA_URI,
    features: [
      'Multiple Bank Supports: Seamlessly display different company bank accounts on the ledger or branch',
      'Dynamic UPI QR Codes: Generates individual QR Codes on every invoice for instant, error-free mobile payments.',
      'Faster Reconciliation: Help your customers pay the right account instantly, speeding up cash flow and accounting reconciliation.',
      'Plug and Play: Easy integration with standard and customized Tally invoice formats.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-UTL-UPI-71',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS06I5'
  },
  {
    id: "apply-watermark-vouchers-report",
    title: 'Free Addon : Apply Watermark on Vouchers and Report 7.1',
    category: 'utilities',
    categoryLabel: 'Utilities & Communication',
    pricePerYear: 354,
    description: 'Enhance the credibility and visual appeal of your official business documents with this Watermark Tally add-on for TallyPrime.This powerful...',
    fullDescription: 'Enhance the credibility and visual appeal of your official business documents with this Watermark Tally add-on for TallyPrime.This powerful solution empowers businesses to effortlessly stamp their company logo or custom text as secure watermark across all printed and exported vouchers and reports.',
    cardImage: APPLY_WATERMARK_DATA_URI,
    modalImage: APPLY_WATERMARK_DATA_URI,
    features: [
      'Professional Brand Identity: Instantly project a polished, corporate image by embedding your company logo or customized text directly onto financial statements and transactional documents.',
      'Flexible Customization: Choose between image-based logos or tailored text watermarks to align seamlessly with your corporate branding guidelines.',
      'Comprehensive Coverage: Apply watermarks universally or selectively across wide range of Tally Vouchers and comprehensive managements report. Watermarks can also apply your standard Customized Vouchers and Report.',
      'Enhanced Document Security: Protect proprietary reports and deter unauthorized distribution or duplication by clearly marking documents with your company credentials.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-UTL-WMRK-71',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS06I4'
  },
  {
    id: "send-message-mobile",
    title: 'Send Message from Tally to Mobile',
    category: 'utilities',
    categoryLabel: 'Utilities & Communication',
    pricePerYear: 354,
    description: 'User can now send unlimited Message (thru WhatsApp) with exclusive user-defined business transactions template details like Bill Details,...',
    fullDescription: 'User can now send unlimited Message (thru WhatsApp) with exclusive user-defined business transactions template details like Bill Details, Dispatch Details, Order and Delivery Details with Item Details, Bill Outstanding Details, Party Pending Balance Details, Payment Details and Receipt Details with PDF directly from Tally to Mobile just a second.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgSRKPwqAmk4XGXhwmPSysSEtWDotEGTmBUKh-_qxdKqjzPNDUQNulGuI_0vpVmi0KuUq8jIrKUlcj4v27f28_cqTayTqwgkN4diRpRafIdDr_vQQdQtjdO3lP-n8WO7fFjmaCrKACgBhiBwBdBc73bbrC4ldVVsM6NFqCJ4kcdKzjIPVoiZFzkqcKMMJ9Rw4Kuewbp0KVmLlQjJyePtnEShoByuH6quCl7Iw004-hoHybQY8ya7DIw-kJXv1I4Sgs7IQ',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5ErbxjnQhzG8GSRYBvNaaJFD12Oh8_cn4xCSe6haNi11pHYG3-j_LdzPujJkt26ocxlT2d6C8GY2IFC7RNLcKB6Sy4rG2VpWVMCQ-8A-AGfKRlD62nN-t7JTjlrCVRRp3yj9VYg_CxhRL08I8wK-Jceb8r346prD-nlRryKp8g6R9ht4WXfHF6NmdUxqerpGLD48k3PBhs70urZ4OCvVV1yzdKOgFj_jwC7tBCCpMVgc0rkCfd-u3Llz4UwSba7Q3Qg',
    features: [
      'No need to buy Third Party WhatsApp API Yearly.',
      'User can send Unlimited WhatsApp Message with PDF instantly.',
      'User can also make own user defined various Business Transaction Message style details for Sales, Sales Order, Delivery, Payment and Receipt Voucher.',
      'No Internet Connection required while using Q R Code scanning option.',
      'With this New Add-on release 4.0 onwards, for intuitive solution for sending messaging; New Smart Message Dashboard has been developed so that user can send all business transaction in one roof very simply and quickly.',
      'Video Tutorial for this add-on also available at our YouTube Channel: https://youtu.be/bKhsjf6PA3M'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-UTL-01',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS04E9'
  },
  {
    id: "sales-purchase-analytical-report",
    title: 'Sales Purchase Bills Analytical Report',
    category: 'reports',
    categoryLabel: 'Advanced Reports',
    pricePerYear: 354,
    description: 'This Add-on exclusively analytics to Sales and Purchase Bills and to provide most helpful 4-way information with composite view in a single...',
    fullDescription: 'This Add-on exclusively analytics to Sales and Purchase Bills and to provide most helpful 4-way information with composite view in a single report with a click of button. The 4-way information for the same are as below. 1.Item-wise Inclusive Tax Rate Information and Item-wise and Total Bills of Discount Amount. 2.Item-wise Gross Sales Profit and Total Gross Sales Profit of each of the Sales Bills. 3.Each Sales Bills Against Received/Adjustment Amount and Pending Amount of each of the Bills. In a same way, Each Purchase Bills Against Paid/Adjustment Amount and Pending Amount of each of the Bills. 4.Very Easy Reconciled and Unreconciled of Purchase Bills against GSTR 2A Report and Mark it with a categorized like (Match, Mis-Match, Not Found and Pending) one to one or Bulk all purchase Bills within a second',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBZKFUxP_7SCworWeXh0lsxK3FWXyUrT6Yx-yw39EtdE-OWc45IdtivofL1Np2zkTAefbTN0jZdSbjIFJWCKZXePm440wKsZDjhy53MnwihvKx_Ewgrq-AzIQ0n9-5W7_DD3Ho_o7Fr5p63tLXR2IVXW5bao5PkNEunJiYNYhvxfd_9kSSdXNj5y6Ra9pl_369OtRMhtvH4IqA6w_yTcv5iLrQvIG4ah3ky5yWgCsIFqjukar7N6fw1JO6ZQcl4KWrKXk',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfb0664_7PWgXSSAP20sLPQg7ITdz3249cvNwlUQdVTRDtWzMfQqYK4FY3Lz6PpPUlHpP64un9Lon-v1ig7Wbw8xX3K1LWJZjP6nAURkgjq_V7K4lDOIgOtbhjmw_myyzx1SNhjdXkG_kQqBMr81cuZAusPb-SajuBW5VhUrlEiV-CKfL8KQXISttIcP6AGd97fDodr1nON868awVa5Osxf15MCXt7FysI1iuJygjmha1BpXny3-5AW7eAj_qmtyAdsn4',
    features: [
      'Item-wise Inclusive Tax Rate Information and Item-wise and Total Bills of Discount Amount. The 4-way information for the same are as below.',
      'Item-wise Gross Sales Profit and Total Gross Sales Profit of each of the Sales Bills.',
      'Each Sales Bills Against Received/Adjustment Amount and Pending Amount of each of the Bills. In a same way, Each Purchase Bills Against Paid/Adjustment Amount and Pending Amount of each of the Bills.',
      'Very Easy Reconciled and Unreconciled of Purchase Bills against GSTR 2A Report and Mark it with a categorized like (Match, Mis-Match, Not Found and Pending) one to one or Bulk all purchase Bills within a second.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-REP-02',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS0494'
  },
  {
    id: "dynamic-stock-purchase-sales",
    title: 'Dynamic Stock and Purchase Sales Report',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'This Add-on provides many type of selection like Party-wise, Group-wise, Reference-wise, Transport-wise, Destination-wise, Cost...',
    fullDescription: 'This Add-on provides many type of selection like Party-wise, Group-wise, Reference-wise, Transport-wise, Destination-wise, Cost Centre-wise, State-wise, Vehicle-wise and getting selection-wise Stock Summary,Stock Voucher and Purchase/Sales Register.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEOlTN_8_ofswCFfofjH-4NZdLFtyrgFytsafJJDs2CebSVK4MgQ3JvaQrfE5uclc3ntuz1CUFQp3YXwY0-yR0WmZZcBoEBBhn3v9sFYDF1cw7olzVWfcy_TBcc8-BkqmEs1zGAFMFLjWjnHQPwGJK6wSUnoBkod8KClDPWDIktCnWK0ktX7JBTWJf3nAYQIKQXHLM_ItDYVCzPtyoAAY-daADiOTOIKBZto3mrbbu2Vhtedmut_jMeoETRpy0h1Z_SCA',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2_Eh-kV-GF62TvjmVbwCe8sC6n2LOOwXcyP-NIqaWkxRiMDKxdgspF_Q6xNTkG5t8W6vqersR6vtqdGbkcerzhcPEXsDKYOcGoPzTwzU-dz7Gk4eZOZrrw4PpTbos4_CtWdYov0NmIs7C9EgS8AdYikcyTxr8EA6M8IbWh8fYpP-Nfz-LGycF_O3Y1rn8qzmEiqbCWx-iuF80G-YLMoLtQCPUjNzwh9sfIq38Rs9pJdn-AW7wwQB4Uv8XMvzR3-EGl7g',
    features: [
      'User can select Party-wise and getting Party-wise Stock Summary,Stock Voucher and Sales/Purchase Register.',
      'The Same way user can also select Group-wise, Reference-wise, Transporter-wise, Destination-wise, Courier/Agentwise,Cost Centre-wise, State-wise (India only), Emirates-wise (UAE only), Region-wise (Saudi Arabia only), Vehicle-wise and getting Selection-wise Stock Summary,Stock Voucher and Purchase/Sales Register.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-03',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS0470'
  },
  {
    id: "import-standard-cost-selling-price",
    title: 'Import Standard Cost and Selling Price',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'Introduction This add-on is used to Import Standard Cost and Selling Price for the existing Stock Item thru excel template within few...',
    fullDescription: 'Introduction This add-on is used to Import Standard Cost and Selling Price for the existing Stock Item thru excel template within few second. Also Provided Separate Item wise, Stock Group Wise Standard Cost and Selling Report with Item Alias, GST Rate, HSN and Closing Stock for quick reference, Alter one to one item rate also can be set and Making Item Label Data as using Export in Excel Format. Benefits User can Import all the existing Stock Item with the Standard Cost and Selling Price thru ready Excel template within a few second. User can also see Stock Item Standard Cost and Selling Price Report with Alias, GST Rate,HSN, Closing Stock for the use of quick reference and Item Price quotation as well.Also user can easily export the same in Excel for the Import template. Most Valuable used for this Add-on is too making Item barcode label template from the Item Selling Report using Export in Excel Format. Item Selling Price is also be used as Inclusive Rate during sales Entry.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUQy1WKcfiT2BzSHlfKpFNKpVi_ig2UlD5zWc2YnK3b_xTsLBN8CTXmZxmc2qeB3S-k7aGQMJ64xDX-Hwr98gQ6esr7vcnabGNSKS8flv15GU7dkqH8Zegv9mNfimuoSpUq4BUHJlvaTzvBevOg9ma3Do8PdGVahjl0BWDkitGWeHfsy3t3xq-lD8DrRLZNRF536-hIx7jPYL54cmi2EjOLv9oiTNaf5afHBScxtx88lXNgVjzF5sjnuLvj8OzaLV9guE',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZIOMfs494ov0Q4nO8mFE1gTi_ED5xQZZeGrwCoEoS6UnrrEen0Ko4yu_SQCA2_DpqFht0wKqsN4GqVJ28q65xgzo1TadSuO3cmQV1IQySFp-VUYees1X47nO_LEIn4j7Uv6LUPE-Ljyo9MPdBZGPkTkwtifUEmYjDbWWi9AcryNzHntPSRVvVRy_TDQ9xgehonKnQYRzASlAqmnGvwPTS8nKpMIbxVn-Whc97sgOOZFt0FliLoEiLvj0vOmC350DYBD0',
    features: [
      'This add-on is used to Import Standard Cost and Selling Price for the existing Stock Item thru excel template within few second.',
      'Provided Report of Separate Item wise, Stock Group Wise Standard Cost and Selling Report with Item Alias, GST Rate, HSN and Closing Stock for the quick reference, Alter one to one item rate',
      'Making Item Label Data as using Export in Excel Format.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-04',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS040F'
  },
  {
    id: "import-mrp-stock-item",
    title: 'Import MRP for Stock Item in Tally',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'This add-on is used to Import MRP for the existing Stock Item thru excel template within few second. Also Provided Separate Item wise,...',
    fullDescription: 'This add-on is used to Import MRP for the existing Stock Item thru excel template within few second. Also Provided Separate Item wise, Stock Group Wise MRP Report with Item Alias, GST Rate, HSN and Closing Stock for quick reference, Alter one to one item MRP also can be set and Making Item Label Data as using Export in Excel Format.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWwlQ43p6_1WgL8J-S4b9jFbLDJ7Gy_0CiZP2ife4oGfYqQXqFF-Q9zcmhIxDbZjnMzBvV5Ud2WfqRGOnlCY7Ig8UhtxxeSm30dN6xGeKq68IgEAWbSwEyvzOx4TzKr0gly_yJ-JaohdRJJydHQRA-s8c7IhhmTeYLGqd-gfYR5YTlaZlaa4AjYZ5fIRLCbLL_nMJ38PIzU9Ay7JnlG_lmR1JOysOhq4aNuetdhB0XNjdMrDcwaoKrnBZf6T_vKYODeC0',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD--1VnTb8qpfnj4DEtU_dBMiVecXlddK_pu5G1g47E0LNPyE9m33zDHL0htLb5KdBj3Vyz1nvqNAPSz8NbzrEogDwfBRO6vRGxZ-sgYhbgMlQ-HsByxTkUIuxNxBtqEgThqDTqSqMdI81eKSeepsUHGmTkYki7spS0lBIAuW1WFTbvzyzpj3NwQrlCobvo1Yl6HhyPMZng9GvcOYMDVxs780D_hcIWxv4icVZE0GxTGANq5Hw7wtDExQ2qIOzZqfQ7E48',
    features: [
      'User can Import MRP for existing Stock Item thru readymade Excel Template within Second.',
      'Also Provide MRP Stock Item Report for quick reference.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-05',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS047A'
  },
  {
    id: "import-item-reorder-alert",
    title: 'Import Item Reorder and Alert Report',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'With the help of this Add-on use can always keep Re-Order Management and Stock-in hand Management. User can get below facility. 1.Import...',
    fullDescription: 'With the help of this Add-on use can always keep Re-Order Management and Stock-in hand Management. User can get below facility. 1.Import All Item Re-Order Level and Min.Order Item Qty in a second. 2.Provide All Item Re-Order Report with Filter to quickly check Item Short Fall, Net Available stock and Place to order quantity. 3.Most exclusive facility is that User can create Purchase Order directly towards the Short Fall Quantity from Re-Order Report.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATuQMUSf1uEhWPmifl8lgknb9f7KGlubOoyzF6kjeAqvWBKKT0d3P-58XI2aBzmVeorHWIUE5S6RFQ1NcINm3DfESXXfpjnBQqfxN_BT18dQmgEYYOo12VEqa8nyOixatVKgyPRvc1I1qrUHdXjz7diQx48kRVuLOE2KyHj8jFSwDi68C99wWnuo4LnYOmyC-yG3AmLjEpzLxYa6SH-pBe17L3_suD2KmD2MsQed2nw2qTp7a6gXWywnRE8XKxi0-CRc0',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUBD23iyu0d16ttkHePl7a-FNFuM8zUBItmHTFr3F9n2hmTrA_xrbLFrzWEj0u-m3UXBBh5uXLu0uuc1iBAlb9oWnWWt-qkmPMtrTyngPG-uK7W1jKomptuI41O1t6C_4wsxPtiD35NpeITdaPylg3hDykYeW6B0ukKZT47ZwZ7Cir0-YVeagTNr-Co23MyMdRoyVcKnlDZsFVr-QaGbWIORkh6lre2xo-uLtLWMu9jF9vZJ9z83oEuGqG2osbS_C_MO8',
    features: [
      'With the help of this Add-on use can always keep Re-Order Management and Stock-in hand Management. User can get below facility.',
      'Import All Item Re-Order Level and Min.Order Item Qty in a second.',
      'Provide All Item Re-Order Report with Filter to quickly check Item Short Fall, Net Available stock and Place to order quantity.',
      'Most exclusive facility is that User can create Purchase Order directly towards the Short Fall Quantity from Re-Order Report.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-06',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS04C5'
  },
  {
    id: "sales-profit-report",
    title: 'Sales Profit Report',
    category: 'reports',
    categoryLabel: 'Advanced Reports',
    pricePerYear: 354,
    description: 'This add-on will helps to show the Sales Profit from the each item of sales.This information is very useful to all business organization to...',
    fullDescription: 'This add-on will helps to show the Sales Profit from the each item of sales.This information is very useful to all business organization to keep update profit of sales.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsokJV5aeblwX8W8p5PNVzIsngenY6oltDiyBwOSdxDn5-Ij1pl2fa1iRarEdVYWJeXoczTa9PF1MvrcpuwGHZZF4pgeJwSP8B7uxPpOI1jlxIByagkFIDpUVeSrd1VVTgpiPZwZa_8MttMuYw5q8lnp8Y3jUy8qQJMQEglDnA0TFq_lDSyY-Yy5mgsP1BQ_rwn7BuSa0gZIsd0vnBzHXyr3PDF4hCwOujYoF9_FZBAjFeNe4ptVVXvk6kbqc3NxrliSs',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwLWLiLojot33xPhsun3WuPjf7FLQr1ttLuhVgphiSRG6q95cjlfZ7QT1sGoIWk7bt78qpfGp98XpeERVngzXbJ5xNXDJh7dwxKYm15EO3A2_rlByPH1RZrZddSX348g_FRhAnwtXP3FDYFD2js0-PV-uTV_7p3b5PNt8uaqHY4PEbKZhgnr-x0JLq1Dn7_JnpSNHOXGhGLUH8R4NHqA7TWHX8l3PkfZ3S5MomelnUoIqgfuHT0PtF4ScXza__Q6lE0kw',
    features: [
      'This add-on will helps to show the Sales Profit from the each item of sales.This information is very useful to all business organization to keep update profit of sales.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-REP-07',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS0357'
  },
  {
    id: "save-it-and-backup-it",
    title: 'Save It and Backup It',
    category: 'utilities',
    categoryLabel: 'Utilities & Communication',
    pricePerYear: 354,
    description: 'The add-on simplify user task such as accessing data one company to another company and one path to another path typing it manually or copy...',
    fullDescription: 'The add-on simplify user task such as accessing data one company to another company and one path to another path typing it manually or copy and paste each time company is being selected during ongoing work. This add-on can automatically save loading company details such as (Company Name, Company Number, Path and Period) store in User Selected Company List Database table Whenever user load any company. Moreover, while all work is done and user quit Tally, user getting prompt for taking Automatically Tally Backup - All those selected company which they load and work on it during the day.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeF-kZAeWzpl3anPUVDiNjEaR42nE-d0wzbLZzk2TN7PkvyRACyC_ZiT6d-PBklSiZTJ6McQXsNThol9ohtScisFm_NuxTCRxodqpGKlAUfDuSqn7p8OqHomGM8C8QVGmyJrsN8ShjM_Yj7eINagRhpBwwt_M79xTlxiaMXRLSlUNfug0AxIqkrXtaxbW7SXUhofq-Iuyr7mcMVSQqXBZO0xkzkvbD2uAxC9erfXaKQ4eJCk39mG3yEQgxjY4KH1_U9K0',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC6H6L-vul862Zh36lap9-LgS4_84UIZC0LUT_KCKzDRGVYGV15X9hRSBL1nLhk0dKjCqMmwC4hjiZJFR_mFC5U9l1T7nNRM-k1UeQqK8DMW1pNArcfWYC_EAgMj6tpVAjZRp47XLhfjGagE5_vZ0kC2vSq_x8GSRZMhH4CPNWl3fA81SbFXmQ2O7Y0Xvrx-jV9f9X1ONrXidCIn29i2I13lI_m1TEUCEFwJckhyKTWWq5-lAaV9YzlsIuutwTLyXYa9M',
    features: [
      'Whenever user select and load any company, this add-on automatic saving this Loading Company details such as (Company Name, Company Number, Path and Period) store in User Selected Company List Database table.',
      'While all work is done and user quit Tally, User getting prompt for taking Auto Tally Backup - towards all those selected company which they load and work on it during the day.',
      'Add-on taking all care of users day-to-day Tally data more secure and safe in terms of providing Auto Tally Backup facility. So NEVER LOSE DATA & STAY WITH UPDATED DATA..ALWAYS'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-UTL-08',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS0484'
  },
  {
    id: "customer-support-management",
    title: 'Customer Support Management Module',
    category: 'utilities',
    categoryLabel: 'Utilities & Communication',
    pricePerYear: 354,
    description: 'With this add-on, you can maintain Sales/Service records of your customers. You can set reminder alerts for product subscription expiry or...',
    fullDescription: 'With this add-on, you can maintain Sales/Service records of your customers. You can set reminder alerts for product subscription expiry or for service due dates, send out mass mails. This add-on is mainly designed for IT Vendors (Including Tally Partners). You can set reminder alerts for product subscription expiry or for service due dates, send out mass mails. You can send (Mass/Selected) mail (with In-built Customized HTML) to the parties with all relevant Software Details regarding Renewal or follow-up/reminder message.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtDL06X3oHm0T7oxpiClvKZ1IT6puAAhKGmtLREaFpCx3VTEvxlTGb4aoyHHON-X9cCt-mKD-i2MJl1pAtkwQqKTUXraHkZnW9QQxhfn1XvNYAW32pP7pSrR_68L2QE5Cl7Hl-CIgbQ0Qg8Ij0i7YIXpJ3llXoiHADC9RbK7UFGnZn-JZ2RcUMUl3fLmyansqcp0hAmgnOeN19bnT7380xKdMNvi1KP-w7kOxGGCxorzd0-JzQJKuSEZJIOS5bXuISJUw',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDosJzAXdbGuS2bVkljT_vxmFImAoH853Y5Il1ZuErezy078MYdNvnF2dLxYYv4rTgTV9ESMev5j4nR_EZ7UIioElJP-lkUGHx2Xd-EH6Z3288QfVy05sDv6_TnUvifbK_AHSDDsTQuOcI0deBLb3CxLsbPVb_pQU3PXkkNk6-9lM73OBJdMvHbvMp6Hdit0ECV1e3W3i-uvT1359PIxY8zZW1gb1XZgzfffVc5_vK6-mBaDXbMck3wsyP4vnBYOhXCpC8',
    features: [
      'With this add-on, you can maintain Sales/Service records of your customers.',
      'You can set reminder alerts for product subscription expiry or for service due dates, send out mass mails.',
      'You can send (Mass/Selected) mail (with In-built Customized HTML) to the parties with all relevant Software Details regarding Renewal or follow-up/reminder message.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-UTL-09',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS014H'
  },
  {
    id: "add-on-ca-tax-consultant",
    title: 'Add on for CA and Tax Consultant',
    category: 'ca',
    categoryLabel: 'CA & Tax',
    pricePerYear: 354,
    description: 'For CA and Tax consultant community, They have provided various kinds of professional services to their clients. In order to that, they...',
    fullDescription: 'For CA and Tax consultant community, They have provided various kinds of professional services to their clients. In order to that, they have to put all their professional services details in entry and the same can be print in professional receipt as well. This Add on provides exclusive facility to set various kind of professional service details description in a very simple way (with some pre-defined and some during entry level) and also provide attractive customize design Professional Receipt for CA and Tax consultant.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9-90mhRYZ_Kp-EXCyRYyq36XO7r6489vdx9Mq8Ka2OdMddBR8sj1J4sqvnI9Td60xJvZFJ9_pi6j6NCqt-Ao8S73_2-ZviyY5vyfxPbtnS_YQZdUGiHjNtL-5UPc25TkAo2ubJXAi2AZMfRLMTPEFaoMx7W-x8aoKHFH3xyVCFQDV2f4bb6-0eyFhDql5H4TR1iRFsemgh7IfoK5qgqiHvfQivqYsfORi9YUpvIOtlU0Q3wHaEK60AYM-SwaoBDvQXMU',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwgoyew4Y0TLmFLAjxXjDr5JjwwLB3pXUJBoGEv7X76woBPEnkAs4rTUEuhQBzk1lhSqqh4xODVcDaExM9LzQBeBDVTslwtHn4LGPjjLvUEZVS6bF2Gl-QJ86cy1guUIXVKxB3FBNy2Zrpvp9zB36DXVKDRAHj_G329d6SMjUkLY-vITkz3UAWBQ-bsKRvVln4ytX0tNjGL5KKqbTLe0JWX8W6cW3x3appyQiY0nYTHwKhq3pVsGs6baG40qYQ5-S4UXE',
    features: [
      'Making Profession Invoice for CA and Tax consulatant as per services',
      'User can make there services list in ledger master so that during invoice making they can select as per predefined service list',
      'With profession Invoice, Digital signature also can be set.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-CA-10',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS048E'
  },
  {
    id: "faster-item-entry-purchase-sales",
    title: 'Faster Item Entry for Purchase Sales',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'In GST Arena, Accounting with Inventory maintaining is very necessary in many organizations but in practically, it is very difficult for...',
    fullDescription: 'In GST Arena, Accounting with Inventory maintaining is very necessary in many organizations but in practically, it is very difficult for the user to pick or selection of item one by one in the list of item especially in counter sales or day to day ongoing sales or purchase data entry. This add-on provide utility to be pick or selection of Item very fast for inventory entry make it within few second.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnmU_QS7SYu0CJNhT9QCtK-JKsU579rKMVaa-YaclfwBUUSiVREdWfjicL8DlFabR_w8zbRAyXUuGhrkfiAGgiGw5CRO5xt5xZ9vewk9di2sIm1Y6yDTpf58W2ukgPo0DES228cECCWCQUD1b7V8KO4PyxcaPu9gLCyj--wzrod2fu6Q_uyckfJFwTd5Hot08K81CTiPsorADMgQzjwW5WQ40ZrWRwvCcuERmhxMhdnYpEycw08wO39vUX5-siYdfdnn0',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCBZuFPqPhJfZTDD4jgwUAxohZoWVIlseV0NAAOljyXWrzOiA1eUBUP9tFIVejIBeuZXFJkvYqCsYcmj8-sf8_LEGw3DumAcw6AgRIdEdLdpiH8aQBisDV7KBOOPusM9HhBlXwRfNgCNRaERCcalb8ZZ008ERGHf90cnWDOI0eziCp74iE2WtZBRGAWamzY2RvkehfgPnIkZ1jiFZBZuau3gi-Ogsa0qABZOw2UB2xd5zhvAL35-owqHaPxx2u1lwYPfk',
    features: [
      'In GST Arena, Accounting with Inventory maintaining is very necessary in many organizations but in practically, it is very difficult for the user to pick or selection of item one by one in the list of item especially in counter sales or day to day ongoing sales or purchase data entry. This add-on provide utility to be pick or selection of Item very fast for inventory entry make it within few second.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-11',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS046C'
  },
  {
    id: "negative-item-list-during-entry",
    title: 'Negative Item List During Entry',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'This add-on is helps to provide Negative Item List during Entry (whenever any of Item getting negative during Sales / Sales Order...',
    fullDescription: 'This add-on is helps to provide Negative Item List during Entry (whenever any of Item getting negative during Sales / Sales Order Entry).This is very useful to vender to raise the order instantly to the same negative item and gets always up to date their stock in hand.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMeo8cWF09v2YZd0n6TBO4HMIHpcw5QuXpjpClF3Mwd-X8s_liarWyNrYWqDZNK99ewYWWxjQuWGXVh3KRt3sk4VZUSqIPnhsPH2CiDVJoFYNl3wooo89xYCZhTlcieUKk24zrVbBe_eoJxPr41Pce3bvQuDDPPp5lbevAZk0Xj3Vr7xuKJquiLNLBR4bzLMIqpI7sFPd-fRsDLIwAXn3TB22JNrvPsbZRajtL3oHZRuY0RReuTPgav6gvoIcEffRSk9I',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMjF5liffIzL2scmp_MObfyBYJM4Ox4u3JEGKnwNLmGE0L7QVzyC_CfbWu7zgeGXEWfev1Yx7pmyRXFeFMy5v7gW2xRGotDAR5RwkFRcInQEhF19JfDsuxvddewCl0x-ylgB83zlHukdBewGLdaA3PwadEZFx_zES3Z7hcQaG8yjdnqoFlplgdVbtUdaSjP2j_LTX7TXuf02ExsxttxOLTktJ4CZrVqe6oj28GxWgkn0ufi3aOORfZJFwAwa13CtQ6nO0',
    features: [
      'User can Print Instantly Negative Item during Sales/Sales Order Entry 2.User can always get update their stock whenever it get negative'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-12',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS047B'
  },
  {
    id: "separate-item-details-ledger",
    title: 'Separate Item Details at Ledger Vouchers',
    category: 'reports',
    categoryLabel: 'Advanced Reports',
    pricePerYear: 354,
    description: 'This add-on provides a separate item details column in the ledger voucher report. This helps in clear visibility of item details in every...',
    fullDescription: 'This add-on provides a separate item details column in the ledger voucher report. This helps in clear visibility of item details in every transaction.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCb-JzqpDTLLjxczhj9WoW6m4AZ0GJvN6nuedHpihBh3VK_am8jtrFDnU2UEw5wfqDVBfuunWBcu0QBMQ7cDiGFDHHmz2Lb4lJnbVyKpYaXLoUypYHZhQ4HLBL5nFby3Z0F7RI4Q_S-35em2FrbNf9kJGDFe-0gTPUv5COgdXB58CT14bdLmOvMuSYacc5djmIr10hXDqcAKt2v5IHx7s9tlWeACK99sdTHNMnSoWqZuKXBVP6wop6lnA3lMI3gTN_sbL4',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFpBjekbqNLo-MZPdcsn3kdlQOjeBS5ADIoHKlCkQI8Uznr_XARsahqBwltvLXh6coex0ethC3K6QbrXnpwoLWHMih5UK4Pv3CTTERYEhzGck8k3tspBvA20rq2vnSkEbPYjqIqLKJJt24pmj0pZGb0Kt0Tao3AR6hJFs79b-Wa3KHQfcmJm1oqDFPR-jsbka5NLZ-0JKFFzVAo3flN_ucitOEJlRGPKJi-qJuBD9ewqJmWNt_O2wNXZ6Xpf8CrUAxRwU',
    features: [
      'This add-on provides a separate item details column in the ledger voucher report. This helps in clear visibility of item details in every transaction.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-REP-13',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS016A'
  },
  {
    id: "stock-management-auto-stock-jv",
    title: 'Stock Management Thru Auto Stock JV',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'Many organizations particularly Wholesalers and Manufacturing unit has very difficult to manage Inward or Outward Stocks where they...',
    fullDescription: 'Many organizations particularly Wholesalers and Manufacturing unit has very difficult to manage Inward or Outward Stocks where they purchase the Item in bulk (or Lot) in Kgs or Qtl (or any UOM) and sold them same Bulk Item as different Name in Retail unit like pkt, tin,box (or any UOM) and hence at the end of point, such organizations could not be able to set Bulk Items Outward and Retail Items Inward. Either they have to create Stock Journal one to one manually but this could be more and more time consuming. This Add-on helps this scenario will be done with a click of button.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAX9ujVIPXLoL_UQaaHbGfzSJZ9FxOpW-ja0lEWNo7LpQ-2tHl_jupesTXmqWbOXuxYWrn03RwP8Gu1hpaM5UHN8yUGYJLQyv6DnfbW0_rwkLf3y44P4lLFBeHcC0bgn0vw12LsBUmv2TSEhiqYNi60PTwPyrEK3RQiH-Snzc6CAQTupi0gftSHzqTjtaXCQ1Ajw0YujEdIiZilIxstgW07mFdDeeR2HG94LWpv5vPjRKkSmAInBfe9ZZ5JpaXcXiZAyXk',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw3T9UmBsd-VgBL_4eBXH-boZuRyMZbT04LaeZq9DVVIS25fML4whrbPbWkhM58GXR41yKt3yeaB4gbIx6HdDvZHthu7VNe4pJElUy62iatXjiD-0tfB0wMacDUZBlm6CzMArVOyFHm6ZM6DvWMny1yBc52kQj61VySJItCn-zctITfl5MIBCn_bKcmHQJH5RyKZwnjyGT0AUWVCsr4iFGbNIjcuxgiBO0fyNbYJD40ZZ-HwM0gtniGMShNRQKTFDLfaU',
    features: [
      'Many organizations particularly Wholesalers and Manufacturing unit has very difficult to manage Inward or Outward Stocks where they purchase the Item in bulk (or Lot) in Kgs or Qtl (or any UOM) and sold them same Bulk Item as different Name in Retail unit like pkt, tin,box (or any UOM) and hence at the end of point, such organizations could not be able to set Bulk Items Outward and Retail Items Inward.',
      'Either they have to create Stock Journal one to one manually but this could be more and more time consuming.',
      'This Add-on helps this scenario will be done with a click of button.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-14',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS048C'
  },
  {
    id: "various-discount-on-product",
    title: 'Various Discount on Product',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'With help of this Add-on, User can set various type of Discount on Product.. 1.User can set Discount after Discount in % 2.User can set...',
    fullDescription: 'With help of this Add-on, User can set various type of Discount on Product.. 1.User can set Discount after Discount in % 2.User can set Discount after Discount in % 3.Use can set Discount per QTY.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKdIOqMmbPwMBlFqGR9mGiokBiZ3lDRMGMVKiFEd13QkbyWMrNBInl6WGv5G9lUazqwtftG20Bn5rFcVOHNM71s5KVn1ffBQaK_Y4bG7qWwftWpGldGjQT1aDlWpZC-tiqXUEEUjzQOLK21q5pXKSGLquYbiv8vow_PE1ojST6sg11cfUxZBZBfza2sTC1_-1LPKkMX6D7Pj21MYZQVdH9fxYEzBXGriCmxf6-rLgKsZFOQEgjAvSBgayJmy3WbFhmQxU',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdlASw_ynst5qqFGsKKRJzi3n_MaXwrsvw-LfEp8Icm3wjf2D8YRhV_IxLviuTFmxeNXfCcXTUMsA-cnnCwDq2LE755UtYF49uq4SbnHtdasPGzBeX6s9sw_dCGPEIjmEUb92ZbKtIHwXoSkAaP4sTy2nQa16lNtjg3DtdntsQxpedxaFOzQQlZlKxLDhuTltZINROoVF_EDE0wZDtKSeiBrYXppF6EOJObdEWz5UC7bIO018Mx6doWQ-FFEvECy2mjjo',
    features: [
      'With help of this Add-on, User can set various type of Discount on Product..',
      'User can set Discount after Discount in %',
      'Use can set Discount per QTY.',
      'User can set Discount after Discount in Amount.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-15',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS04C6'
  },
  {
    id: "group-based-item-filter",
    title: 'Group Based Item Filter',
    category: 'inventory',
    categoryLabel: 'Inventory Management',
    pricePerYear: 354,
    description: 'In many business organization, where number of Stock Item has been exist then sometimes during Inventory Entry, It is very difficult to...',
    fullDescription: 'In many business organization, where number of Stock Item has been exist then sometimes during Inventory Entry, It is very difficult to quick find and select particular Group of Item in the List of Stock Item, This Add on provides Selection and Filteration quickly in a second in the Group based Stock Item List during any type of Inventory Entries.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkjAPyxPIvcMWF9nso4-nehJSEgPQP9GDK-nOgnwkngRxi92S9v1hndeSECkGu3UyzyJ-r1F_8BeLJFMeAXMHrHSIbOPEERatvzKc1-eMUpfWr-zCWr6qhPjTpjAdMsTtiFPnr2g38ycnrofqgHNNDxYurWYBZzrH2L5A9RkDkcq4V_4sTIZAcHMC8wMgZQiIoUY-Gt8gEg0WDzjwLnGYU3B6FfbIWzVPuYKUSNMO5QOJNCPrsDKcmq-sWEx_KwhdymiA',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFArGnh7exnzeuRUzpc5AQBPMxoSL2TKwMEkkZZQh_6joGoK1hIwzLMUGYsJNVWfUCDEPSRbAo0hHavztrHcRGrd6As7Jb9Gymm8m5mllWUfnFzI1eNRAgjpOARtEF-cQbBLxmaDdnH2szy5j8UXGEjgMOI6BM2E6UEguGu-ZBtdczqr9YumaAWifLH4g-SbIxlQQmPMYe3ER3-xHlQzxarBxrfMgt7V3lJG-JtS7TPomnXcrwfY7xqK_LTCNGz-D7QBU',
    features: [
      'In many business organization, where number of Stock Item has been exist then sometimes during Inventory Entry, It is very difficult to quick find and select particular Group of Item in the List of Stock Item, This Add on provides Selection and Filteration quickly in a second in the Group based Stock Item List during any type of Inventory Entries.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-INV-16',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS044I'
  },
  {
    id: "form-21-and-19-vehicle-dealer",
    title: 'Form 21 and 19 for Vehicle Dealer',
    category: 'ca',
    categoryLabel: 'CA & Tax',
    pricePerYear: 354,
    description: 'This add-on facilitates Vehicle Dealers to issue Form 21 (Sales Letter) & Form 19 to the customers after sales of each vehicle.',
    fullDescription: 'This add-on facilitates Vehicle Dealers to issue Form 21 (Sales Letter) & Form 19 to the customers after sales of each vehicle.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMJX9Einme_XWvYgXR5QWu85IiYjNhzHqLbrZIE1nql6eJGuDhlL3QT0y25GkEVE9wOVumGC9DcQtVwyZSsy8QaIar6pXSesQ03cGd8nef_z3bgUGoyzo9l49aFnbRBy_yNdRZuqWLXIiaISENPa9STb0h_IQUTSobN0tXkxa6EKfpDrGUlEaXjOhKjJZ7cjbqZdIjeTSQL_ng06UWVSsaTpgUhCCLC1MAePaIG0Wlzz4To1i04AoaTF830bSE7WZYkj8',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFQu9TtyIIriGaIf6VBRqCeI-vz59TzrWIb2dd1E1gq-IvgGJZI1J5Nk2dx9bx3XDSrvqlNFzeLuvLh2Jc8TIcXZq3xbe0DtkFWOErco-RUzsjaoalvqJujFwOE7GslxpkQCli77dJ4RBvp5CMWpAkzDDVu6xoo8ZsjxvCHz78ri8xkwcm77WWN83aEDi7WvmSProj9SUaGMat3ByDGpSBfqJnmWE_2Q94aFjzx0Wl0KcBeDXW_arF4O5u5LZK8Ae63Dc',
    features: [
      'This add-on facilitates Vehicle Dealers to issue Form 21 (Sales Letter) & Form 19 to the customers after sales of each vehicle.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-AUTO-17',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS0215'
  },
  {
    id: "customerwise-item-selling-summary",
    title: 'Customerwise Item Selling Summary',
    category: 'reports',
    categoryLabel: 'Advanced Reports',
    pricePerYear: 354,
    description: 'This add-on will helps to show the Customer wise Item Selling Summary with Party wise and Item wise Filter option. User can easily track it...',
    fullDescription: 'This add-on will helps to show the Customer wise Item Selling Summary with Party wise and Item wise Filter option. User can easily track it all Sale Item details for each or all customer in a single report. Now, User can get more advance features like attribute wise and detailed Sales Report with the release 4.0. • Attribute-wise Sales Summary: The Add-on offers various attribute-wise sales summaries, including: - Vehicle wise Sales Summary: Analyse sales based on different vehicles used for delivery - Agent wise Sales Summary: Break down sales by agents to evaluate their performance - Transporter wise Sales Summary: View sales data categorized by transporters. - Destination wise Sales Summary: Summarize sales based on different destinations. - Reference No Wise Sales Summary: Organize sales data by ref no for better tracking. - State wise Sales Summary: Analyse sales performance across different states. - Cost Centre wise Sales Summary: View sales data categorized by Cost Centre (using Predefined Cost Centre Class) • Detailed Sales Register: Generate a comprehensive sales report that includes detailed information on sales quantity, sales returns, (with Itemwise GST if applicable) and other relevant metrics for a specified period.',
    cardImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6Sx1uEL92_GZOpdoHUT1Rn_TTO4rjzTM7oe64sFyuHIgPmiJd6HVaYGjPzUiRqFYrf74GYFmhTOmrk-WlofXjhn6qLX5R-MnJJdtsyPpUFD149O2MZ4Mn-u0MS5kucy7dx3Dnn57K0CiE7oyzCyalWHGO19aL5F0aWNm5CWQnWrC_jFbKzOzOYJrfvuuzxrDaV-HogWEydNMR1-1-xPP0_HVNkfN4COlsKc47FkNSIQ1NK2G7OqXJ2OVRRBUwb6MdZy8',
    modalImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmgBxP5-KfY0rc3HIU3FqkjONUGIaQICtSrCdmYX6Jv4tOZrstzdaGTPW-khBdQ2k2rGMlVn6w0e2cm25efIPTZtEiZ8gjtN5baD992MkTkJIzWFHLcNB9nrFMQD6kxQhK9Jy0_Sg-PS1CLPTIlkXwPu8wdSf10SwR8jGi6YxAYzIx32oKlSb0quVHLLVPF59dYvZuFMkjj_4TcPt6s2hGaWfrmkH84iDxupCv9LdpowCP1uPLZbUG50aFAmj7qoFx9g',
    features: [
      'This Add-on helps to show Customer-wise Item selling Summary with fullly explode Itemwise partywise with the click of button.',
      'User can filter Single Party Item Selling with Item details.',
      'User can also filter Single Item Selling with party details.',
      'With this new add-on release 4.0 - now User can get more advance features like attribute wise and detailed Sales Report'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-REP-18',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS04H7'
  },
  {
    id: "freight-tracking-report",
    title: 'Freight Tracking Report',
    category: 'reports',
    categoryLabel: 'Advanced Reports',
    pricePerYear: 354,
    description: 'This exclusive add-on is a specialized report designed to enhance the management and tracking of freight operations within Tally. This...',
    fullDescription: 'This exclusive add-on is a specialized report designed to enhance the management and tracking of freight operations within Tally. This add-on is useful for those businesses that have huge number of sales against supply of goods and they want to maintain freight details and tracking of each of their sales supply. This add-on provides a robust solution for tracking and reporting freight activities.',
    cardImage: FREIGHT_TRACKING_DATA_URI,
    modalImage: FREIGHT_TRACKING_DATA_URI,
    features: [
      'This exclusive add-on is a specialized report designed to enhance the management and tracking of freight operations within Tally.',
      'This add-on is useful for those businesses that have huge number of sales against supply of goods and they want to maintain freight details and tracking of each of their sales supply. This add-on provides a robust solution for tracking and reporting freight activities.'
    ],
    tallyCompatibility: 'upto TallyPrime 7.1 onwards',
    sku: 'VKCS-LOG-19',
    popular: true,
    tallyShopUrl: 'https://tallysolutions.com/tallyweb/modules/sd/docmgmt/CMktPlaceHomepageWIC.php',
    tallyShopSearchCode: 'TS05IC'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'The WhatsApp messaging and analytical reports add-ons have completely transformed how our billing team communicates with clients.',
    name: 'CA Rajesh Khandelwal',
    role: 'Senior Tax Consultant, Jaipur',
    initials: 'RK',
    rating: 5,
    tag: 'Chartered Accountant'
  },
  {
    quote: 'Installing via TallyShop was instantaneous. Vinay Chauhan\'s support and modular design are second to none.',
    name: 'Amit Sharma',
    role: 'Managing Director, Retail Chain',
    initials: 'AS',
    rating: 5,
    tag: 'FMCG Retailer'
  },
  {
    quote: 'The Customerwise Item Selling Summary add-on gives us 1-click fully exploded party-wise and item-wise sales tracking with agent and transporter filters. Indispensable for our sales analysis!',
    name: 'Suresh Patel',
    role: 'Distribution & Sales Head, Wholesale Enterprise',
    initials: 'SP',
    rating: 5,
    tag: 'Wholesale & Distribution'
  }
];

export const TALLY_SHOP_GUIDE_STEPS = [
  {
    step: '1',
    title: 'Open TallyPrime',
    desc: 'Launch TallyPrime with administrator credentials.'
  },
  {
    step: '2',
    title: 'Press F1: Help',
    desc: 'From Gateway of Tally, press F1 or click Help in the top bar menu.'
  },
  {
    step: '3',
    title: 'Open TallyShop',
    desc: 'Select "TallyShop" to enter the official marketplace.'
  },
  {
    step: '4',
    title: 'Search & Test Free Demo',
    desc: 'Search VKCS add-on title or SKU and click "Try in Lic.mode" for instant activation.'
  }
];
