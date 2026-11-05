// Realistic stationery products used as the initial local demo inventory.
export const initialProducts = [
 {id:'ST-1001',name:'Classic Ruled Notebook',category:'Notebooks',price:85,cost:52,qty:18,min:20,supplier:'PaperTree Supplies',icon:'📓',sold:42},
 {id:'ST-1002',name:'SmoothFlow Gel Pen Set',category:'Writing',price:120,cost:68,qty:64,min:25,supplier:'WriteWell Traders',icon:'🖊️',sold:86},
 {id:'ST-1003',name:'Premium Document File',category:'Files',price:45,cost:24,qty:0,min:15,supplier:'OfficeMart India',icon:'📁',sold:31},
 {id:'ST-1004',name:'Everyday Campus Backpack',category:'Bags',price:899,cost:580,qty:12,min:10,supplier:'CarryMore Co.',icon:'🎒',sold:19},
 {id:'ST-1005',name:'HB Pencil Pack of 10',category:'Writing',price:60,cost:32,qty:92,min:30,supplier:'WriteWell Traders',icon:'✏️',sold:54},
 {id:'ST-1006',name:'A4 Copy Paper Ream',category:'Paper',price:310,cost:240,qty:28,min:12,supplier:'PaperTree Supplies',icon:'📄',sold:36},
 {id:'ST-1007',name:'Pastel Highlighter Set',category:'Writing',price:150,cost:88,qty:7,min:18,supplier:'WriteWell Traders',icon:'🖍️',sold:27},
 {id:'ST-1008',name:'Geometry Box',category:'Accessories',price:220,cost:140,qty:34,min:12,supplier:'OfficeMart India',icon:'📐',sold:23}
];
// Seed sales series, transactions, and team members for analytics and reports.
export const salesSeries=[{name:'Mon',sales:4200},{name:'Tue',sales:5900},{name:'Wed',sales:5100},{name:'Thu',sales:7200},{name:'Fri',sales:6400},{name:'Sat',sales:8900},{name:'Sun',sales:8000}];
export const initialSales=[{id:'INV-2408',customer:'Aarav Mehta',date:'Today, 11:42 AM',amount:1240,status:'Paid'},{id:'INV-2407',customer:'Priya Shah',date:'Today, 10:18 AM',amount:890,status:'Paid'},{id:'INV-2406',customer:'Kabir Joshi',date:'Yesterday',amount:2160,status:'Paid'}];
export const initialUsers=[{name:'Roshan Kumar',email:'roshan@paperlane.in',role:'Admin',status:'Active',date:'12 Aug 2024'},{name:'Ananya Rao',email:'ananya@paperlane.in',role:'Staff',status:'Active',date:'03 Sep 2024'}];
